import React from 'react';
import { FaCrown } from 'react-icons/fa';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Bar } from 'react-chartjs-2';
import { attachmentDetails } from '../../data/attachment/detail';
import AdBanner from '../AdBanner';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

const AttachmentDetail = ({ scores, resultType }) => {
  const detail = attachmentDetails[resultType];
  const MAX_SCORE = 12; // 문항 수

  const data = {
    labels: ['자기 이미지', '타인 이미지'],
    datasets: [
      {
        label: '이미지 점수',
        data: [scores.self, scores.others],
        backgroundColor: [
          scores.self >= 0 ? 'rgba(54, 162, 235, 0.6)' : 'rgba(255, 99, 132, 0.6)',
          scores.others >= 0 ? 'rgba(54, 162, 235, 0.6)' : 'rgba(255, 99, 132, 0.6)'
        ],
        borderColor: [
          scores.self >= 0 ? 'rgba(54, 162, 235, 1)' : 'rgba(255, 99, 132, 1)',
          scores.others >= 0 ? 'rgba(54, 162, 235, 1)' : 'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1,
        borderRadius: 5
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      x: {
        min: -MAX_SCORE,
        max: MAX_SCORE,
        grid: {
          color: (context) => context.tick.value === 0 ? '#666' : '#e0e0e0',
          lineWidth: (context) => context.tick.value === 0 ? 2 : 1,
        },
        ticks: {
          stepSize: 1
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            const sign = value >= 0 ? '긍정' : '부정';
            return `${context.label}: ${sign}적 (${value}점)`;
          }
        }
      },
      annotation: {
        annotations: {
          negativeLabel: {
            type: 'label',
            xValue: -MAX_SCORE/2,
            yValue: +0.5,
            content: '부정적 태도',
            color: 'rgba(255, 99, 132, 0.8)',
            font: {
              size: 14
            }
          },
          positiveLabel: {
            type: 'label',
            xValue: MAX_SCORE/2,
            yValue: +0.5,
            content: '긍정적 태도',
            color: 'rgba(54, 162, 235, 0.8)',
            font: {
              size: 14
            }
          }
        }
      }
    }
  };

  return (
    <>
    <div className="premium-detail">
      <div className="premium-header">
        <FaCrown className="premium-icon" />
        <h3>프리미엄 상세 분석</h3>
      </div>

      <div className="detail-section text-center">
        <h4>나의 애착유형 그래프</h4>
        <div className="chart-wrapper">
          <Bar data={data} options={options} />
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: 'rgba(54, 162, 235, 0.6)' }}></div>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: 'rgba(255, 99, 132, 0.6)' }}></div>
            </div>
          </div>
        </div>
        <div className="description">
          <p>자기/타인에 대한 이미지 점수입니다. (각 ±12점)</p>
          <p>양수(오른쪽)는 긍정적, 음수(왼쪽)는 부정적 태도를 나타냅니다.</p>
          <div className="attachment-descriptions">
            <div className="description-item">
              <h5>애착유형: 나와 타인에 대한 신뢰</h5>
              <p>애착유형은 어린 시절 형성된 자기 자신과 타인에 대한 신뢰를 바탕으로, 관계 속에서 보이는 행동 패턴과 감정 반응을 설명합니다.
              이는 크게 자기 자신과 타인을 바라보는 방식에 따라 나뉩니다.</p>
              <ul>
                <p>• 나 자신을 어떻게 바라보는가? (자기 이미지: 긍정적 vs 부정적)</p>
                <p>• 타인을 어떻게 바라보는가? (타인 이미지: 긍정적 vs 부정적)</p>
              </ul>
            </div>
            <div className="description-item">
              <h5>4가지 애착유형 이해</h5>
              <p>애착유형은 자기와 타인에 대한 신뢰 조합으로 4가지로 나뉩니다:</p>
              <div className="attachment-types">
                <div className="type-item">
                  <h6>안정형 (자기+ / 타인+)</h6>
                  <p>자신과 타인 모두를 긍정적으로 신뢰하며, 건강한 관계를 유지합니다.</p>
                  <p className="type-feature">특징: 친밀감과 독립성을 모두 잘 조화시킴.</p>
                </div>
                <div className="type-item">
                  <h6>불안형 (자기- / 타인+)</h6>
                  <p>자신을 낮게 평가하고, 타인으로부터의 인정과 사랑을 강하게 갈망합니다.</p>
                  <p className="type-feature">특징: 버림받을까 두려워 집착하거나 불안감을 느낄 수 있음.</p>
                </div>
                <div className="type-item">
                  <h6>회피형 (자기+ / 타인-)</h6>
                  <p>자신은 긍정적으로 보지만, 타인에 대한 신뢰가 낮아 친밀감을 회피합니다.</p>
                  <p className="type-feature">특징: 독립을 중시하며 감정 표현에 거리감을 둠.</p>
                </div>
                <div className="type-item">
                  <h6>혼란형 (자기- / 타인-)</h6>
                  <p>자신과 타인 모두를 부정적으로 바라보며, 관계에서 혼란과 불안을 느낍니다.</p>
                  <p className="type-feature">특징: 친밀감과 독립성 사이에서 극단적 갈등을 경험.</p>
                </div>
              </div>
            </div>
            <div className="description-item">
              <h5>애착유형의 성장과 변화</h5>
              <p>애착유형은 고정된 것이 아니라, 관계 경험과 자기 성찰을 통해 변할 수 있습니다.</p>
              <ul>
                <p>• 자기 신뢰 회복: 자신의 가치를 스스로 인정하는 과정.</p>
                <p>• 타인 신뢰 학습: 건강한 관계에서 타인에 대한 믿음을 키우는 과정.</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AdBanner adSlot="1605049109"/>

    <div className="premium-detail">
      <div className="detail-section">
        <h4>세부 분석</h4>
        <div className="analysis-content">
          {detail ? (
            <div className="type-analysis">
              {detail.analysis.split('\n\n').map((paragraph, index) => (
                <div>
                  <p key={index}>{paragraph}</p>
                  <br />
                </div>
              ))}
            </div>
          ) : (
            <div className="loading-message">
              <p>세부 분석 내용을 불러오는 중...</p>
            </div>
          )}
        </div>
      </div>

      <div className="detail-section">
        <h4>발전 방향 키워드</h4>
        <div className="development-content">
          {detail ? (
            <div className="development-list">
              {detail.development.map((item, index) => (
                <div className="development-item"key={index}>{item}</div>
              ))}
            </div>
          ) : (
            <div className="loading-message">
              <p>발전 방향 내용을 불러오는 중...</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default AttachmentDetail; 