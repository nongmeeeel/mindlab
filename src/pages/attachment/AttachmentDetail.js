import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AttachmentDetail = ({ data }) => {
  const lineData = {
    labels: ['안정형', '불안형', '회피형', '혼란형'],
    datasets: [{
      label: '애착 유형 분포',
      data: data.scores,
      backgroundColor: 'rgba(72,198,239,0.2)',
      borderColor: 'rgba(72,198,239,1)',
      tension: 0.4,
      fill: true
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '애착 유형 분포도'
      }
    }
  };

  return (
    <div className="detail-page">
      <div className="detail-container">
        <h2>애착유형 상세 분석</h2>

        <section className="chart-section">
          <Line data={lineData} options={options} />
        </section>

        <section className="pattern-analysis">
          <h3>애착 패턴 분석</h3>
          <div className="main-pattern">
            <h4>주요 애착 유형: {data.mainPattern}</h4>
            <p>{data.mainPatternAnalysis}</p>
          </div>
          <div className="sub-patterns">
            {data.subPatterns.map((pattern, index) => (
              <div key={index} className="pattern-item">
                <h5>{pattern.type}</h5>
                <p>{pattern.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relationship-dynamics">
          <h3>관계 역동성</h3>
          <div className="dynamics-grid">
            {data.relationshipDynamics.map((dynamic, index) => (
              <div key={index} className="dynamic-item">
                <h4>{dynamic.aspect}</h4>
                <p>{dynamic.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="improvement-section">
          <h3>관계 개선 방안</h3>
          <div className="improvement-points">
            {data.improvementPoints.map((point, index) => (
              <div key={index} className="improvement-item">
                <span className="point-number">{index + 1}</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AttachmentDetail; 