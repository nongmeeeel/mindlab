import React from 'react';
import { FaCrown } from 'react-icons/fa';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { enneagramDetails } from '../../data/enneagram/detail';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartDataLabels
);

const EnneagramDetail = ({ scores, resultType }) => {
  const detail = enneagramDetails[resultType];
  console.log('EnneagramDetail scores:', scores);

  const scoresArray = Array.from({length: 9}, (_, i) => scores[i] || 0);

  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    datasets: [
      {
        label: '유형별 점수',
        data: scoresArray,
        backgroundColor: 'rgba(102, 126, 234, 0.2)',
        borderColor: 'rgba(102, 126, 234, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(102, 126, 234, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(102, 126, 234, 1)',
        pointRadius: 4,
        pointHoverRadius: 6
      }
    ]
  };

  if (!scores || scores.length === 0) {
    return (
      <div className="loading-message">
        <p>데이터를 불러오는 중...</p>
      </div>
    );
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)'
        },
        suggestedMin: 0,
        suggestedMax: 45,
        ticks: {
          stepSize: 9,
          display: true,
          font: {
            size: 10
          }
        },
        pointLabels: {
          font: {
            size: 14,
            weight: 'bold'
          },
          color: '#8B7355',
          padding: 8,
          callback: function(value) {
            return value + '유형';
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw}점`;
          }
        }
      },
      datalabels: {
        display: true,
        color: '#666',
        font: {
          weight: 'bold',
          size: 11
        },
        formatter: function(value) {
          return value + '점';
        },
        anchor: 'end',
        align: 'top',
        offset: 5
      }
    }
  };

  return (
    <div className="premium-detail">
      <div className="premium-header">
        <FaCrown className="premium-icon" />
        <h3>프리미엄 상세 분석</h3>
      </div>

      <div className="detail-section text-center">
        <h4>나의 에니어그램 그래프</h4>
        <div className="chart-wrapper">
          <Radar data={data} options={options} />
        </div>
        <div className="description">
          <p>각 유형별 성향 점수입니다. (각 0~45점)</p>
          <p>가장 높은 점수를 보인 유형이 당신의 주된 성향입니다.</p>
          <div className="enneagram-descriptions">
            <div className="description-item">
              <h5>에니어그램의 번호 (9가지 성격 유형)</h5>
              <p>각 번호는 특정한 성격 패턴, 행동 방식, 동기를 나타냅니다.</p>
              <p>자신이 주로 속하는 번호를 찾는 것은 자기 이해의 첫걸음입니다.</p>
            </div>
            <div className="description-item">
              <h5>통합 (성장 방향)</h5>
              <p>스트레스가 적고 안정된 상황에서 자신의 번호가 긍정적으로 발전할 때 나타나는 특징입니다.</p>
              <p>각 번호는 성장 시 다른 번호의 긍정적 특성을 배우고 통합하게 됩니다.</p>
              <p className="example">예: 1번(완벽주의자)이 성장하면 7번(열정가)의 여유와 즐거움을 받아들입니다.</p>
            </div>
            <div className="description-item">
              <h5>분열 (스트레스 방향)</h5>
              <p>스트레스 상황에서 자신의 번호가 부정적인 방향으로 변화할 때 나타나는 특징입니다.</p>
              <p>각 번호는 위기 상황에서 다른 번호의 부정적 특성을 보이기도 합니다.</p>
              <p className="example">예: 1번(완벽주의자)이 스트레스 받으면 4번(개인주의자)의 우울함과 감정 과잉을 경험할 수 있습니다.</p>
            </div>
            <div className="description-item">
              <h5>통합과 분열의 활용</h5>
              <p>자신이 성장할 때와 스트레스받을 때 어떤 행동 패턴을 보이는지 이해하면, 자기 관리와 변화에 도움을 받을 수 있습니다.</p>
              <p>이를 통해 자기 성찰과 관계 개선의 실질적인 도구로 활용 가능합니다.</p>
            </div>
            <div className="description-item">
              <h5>에니어그램의 발전 요소</h5>
              <p><b>자기 성찰:</b> 자신의 주된 유형과 행동 패턴을 파악하여 스스로를 더 깊이 이해합니다.</p>
              <p><b>타인 이해:</b> 타인의 동기와 행동 방식을 이해함으로써 관계를 개선합니다.</p>
              <p><b>변화의 길:</b> 자신의 성격 유형에서 벗어나 더 균형 잡힌 삶을 추구할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>

      <AdBanner adSlot="2958525195"/>

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

export default EnneagramDetail; 