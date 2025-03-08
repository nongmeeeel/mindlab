import React from 'react';
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
import { FaCrown } from 'react-icons/fa';
import { mbtiDetails } from '../../data/mbti/detail';
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

const MBTIDetail = ({ scores, resultType }) => {
  console.log('MBTIResult2 scores:', scores);
  const detail = mbtiDetails[resultType];
  
  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        min: -100,
        max: 100,
        grid: {
          color: (context) => context.tick.value === 0 ? '#666' : '#e0e0e0',
          lineWidth: (context) => context.tick.value === 0 ? 2 : 1,
        },
        ticks: {
          callback: (value) => Math.abs(value) + '%'
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      annotation: {
        annotations: {
          // E-I 지표
          leftPJ: {
            type: 'label',
            xValue: -80,
            yValue: 3.0,
            content: '인식(P)',
            color: 'rgba(238, 140, 104, 0.8)',
            font: { size: 14 },
            textStrokeColor: 'white',
            textStrokeWidth: 2,
            z: 100,
            drawTime: 'afterDatasetsDraw'
          },
          rightPJ: {
            type: 'label',
            xValue: 80,
            yValue: 3.0,
            content: '판단(J)',
            color: 'rgba(102, 126, 234, 0.8)',
            font: { size: 14 },
            textStrokeColor: 'white',
            textStrokeWidth: 2,
            z: 100,
            drawTime: 'afterDatasetsDraw'
          },
          // S-N 지표
          leftFT: {
            type: 'label',
            xValue: -80,
            yValue: 2.0,
            content: '감정(F)',
            color: 'rgba(238, 140, 104, 0.8)',
            font: { size: 14 },
            textStrokeColor: 'white',
            textStrokeWidth: 2,
            z: 100,
            drawTime: 'afterDatasetsDraw'
          },
          rightFT: {
            type: 'label',
            xValue: 80,
            yValue: 2.0,
            content: '사고(T)',
            color: 'rgba(102, 126, 234, 0.8)',
            font: { size: 14 },
            textStrokeColor: 'white',
            textStrokeWidth: 2,
            z: 100,
            drawTime: 'afterDatasetsDraw'
          },
          // T-F 지표
          leftNS: {
            type: 'label',
            xValue: -80,
            yValue: 1.0,
            content: '직관(N)',
            color: 'rgba(238, 140, 104, 0.8)',
            font: { size: 14 },
            textStrokeColor: 'white',
            textStrokeWidth: 2,
            z: 100,
            drawTime: 'afterDatasetsDraw'
          },
          rightNS: {
            type: 'label',
            xValue: 80,
            yValue: 1.0,
            content: '감각(S)',
            color: 'rgba(102, 126, 234, 0.8)',
            font: { size: 14 },
            textStrokeColor: 'white',
            textStrokeWidth: 2,
            z: 100,
            drawTime: 'afterDatasetsDraw'
          },
          // J-P 지표
          leftIE: {
            type: 'label',
            xValue: -80,
            yValue: 0.0,
            content: '내향(I)',
            color: 'rgba(238, 140, 104, 0.8)',
            font: { size: 14 },
            textStrokeColor: 'white',
            textStrokeWidth: 2,
            z: 100,
            drawTime: 'afterDatasetsDraw'
          },
          rightIE: {
            type: 'label',
            xValue: 80,
            yValue: 0.0,
            content: '외향(E)',
            color: 'rgba(102, 126, 234, 0.8)',
            font: { size: 14 },
            textStrokeColor: 'white',
            textStrokeWidth: 2,
            z: 100,
            drawTime: 'afterDatasetsDraw'
          }
        }
      }
    }
  };

  const data = {
    labels: ['I-E', 'N-S', 'F-T', 'P-J'],
    datasets: [
      {
        data: scores,
        backgroundColor: scores.map(score => 
          score > 0 ? 'rgba(102, 126, 234, 0.6)' : 'rgba(238, 140, 104, 0.6)'
        ),
        borderColor: scores.map(score => 
          score > 0 ? 'rgb(102, 126, 234)' : 'rgb(238, 140, 104)'
        ),
        borderWidth: 1,
        borderRadius: 4
      }
    ]
  };

  return (
    <div className="premium-detail">
      <div className="premium-header">
        <FaCrown className="premium-icon" />
        <h3>프리미엄 상세 분석</h3>
      </div>

      <div className="detail-section text-center">
        <h4>나의 MBTI 그래프</h4>
        <div className="chart-wrapper">
          <Bar options={options} data={data} />
        </div>
        <div className="description">
          <div className="mbti-dimension-descriptions">
            <div className="description-item">
              <h5>MBTI: 성격의 4가지 지표로 나를 이해하기</h5>
              <p>MBTI(Myers-Briggs Type Indicator)는 4가지 성격 지표를 통해 사람들의 에너지 방향, 정보 처리 방식, 의사결정 기준, 생활 방식을 설명하는 성격 유형 모델입니다.</p>
              <p>이를 통해 자신과 타인의 성격 차이를 이해하고, 보다 나은 의사소통과 관계 형성을 돕습니다.</p>
            </div>
            <div className="description-item">
              <h5>4가지 지표로 자신을 파악</h5>
              <p>각 지표는 두 가지 선택지로 구성되어 있으며, 자신에게 더 자연스럽거나 편안한 방식을 선택합니다.</p>
              <div className="mbti-indicators">
                <div className="indicator-item">
                  <h6>E-I (외향 vs 내향)</h6>
                  <p>에너지를 외부 활동에서 얻는가, 내부 성찰에서 얻는가?</p>
                  <ul>
                    <p>• <strong>E: 외향 (Extraversion)</strong> → 사람들과의 상호작용에서 에너지를 얻음.</p>
                    <p>• <strong>I: 내향 (Introversion)</strong> → 혼자만의 시간이나 내면에서 에너지를 얻음.</p>
                  </ul>
                </div>
                <div className="indicator-item">
                  <h6>S-N (감각 vs 직관)</h6>
                  <p>정보를 현재 사실로 받아들이는가, 가능성과 큰 그림으로 받아들이는가?</p>
                  <ul>
                    <p>• <strong>S: 감각 (Sensing)</strong> → 현재의 구체적인 사실과 경험을 중시.</p>
                    <p>• <strong>N: 직관 (Intuition)</strong> → 미래 가능성과 창의적 아이디어를 중시.</p>
                  </ul>
                </div>
                <div className="indicator-item">
                  <h6>T-F (사고 vs 감정)</h6>
                  <p>결정을 논리와 객관성으로 내리는가, 감정과 인간관계로 내리는가?</p>
                  <ul>
                    <p>• <strong>T: 사고 (Thinking)</strong> → 논리와 분석을 기반으로 판단.</p>
                    <p>• <strong>F: 감정 (Feeling)</strong> → 공감과 관계를 기반으로 판단.</p>
                  </ul>
                </div>
                <div className="indicator-item">
                  <h6>J-P (판단 vs 인식)</h6>
                  <p>삶을 계획적이고 체계적으로 보는가, 유연하고 즉흥적으로 보는가?</p>
                  <ul>
                    <p>• <strong>J: 판단 (Judging)</strong> → 계획과 구조를 선호.</p>
                    <p>• <strong>P: 인식 (Perceiving)</strong> → 유연성과 상황 적응을 선호.</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="description-item">
              <h5>MBTI의 활용</h5>
              <ul>
                <p>• <strong>자기 이해:</strong> 나의 강점과 약점을 파악하고 삶의 방향성을 설정합니다.</p>
                <p>• <strong>타인 이해:</strong> 타인의 행동 방식을 존중하며, 관계 속에서 더 나은 의사소통이 가능합니다.</p>
                <p>• <strong>팀워크:</strong> 다양한 성격 유형이 조화를 이루는 방법을 학습합니다.</p>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <AdBanner adSlot="3765412231"/>

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
  );
};

export default MBTIDetail; 