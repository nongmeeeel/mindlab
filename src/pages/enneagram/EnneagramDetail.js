import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const EnneagramDetail = ({ data }) => {
  const radarData = {
    labels: ['1유형', '2유형', '3유형', '4유형', '5유형', '6유형', '7유형', '8유형', '9유형'],
    datasets: [{
      label: '유형별 성향',
      data: data.scores,
      backgroundColor: 'rgba(238,140,104,0.2)',
      borderColor: 'rgba(238,140,104,1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(238,140,104,1)',
    }]
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 100,
        beginAtZero: true
      }
    }
  };

  return (
    <div className="detail-page">
      <div className="detail-container">
        <h2>에니어그램 상세 분석</h2>

        <section className="chart-section">
          <Radar data={radarData} options={options} />
        </section>

        <section className="type-analysis">
          <h3>주요 유형 분석</h3>
          <div className="main-type">
            <h4>핵심 유형: {data.mainType}</h4>
            <p>{data.mainTypeAnalysis}</p>
          </div>
          <div className="wing-types">
            <h4>날개 유형</h4>
            {data.wingTypes.map((wing, index) => (
              <div key={index} className="wing-item">
                <h5>{wing.type}</h5>
                <p>{wing.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="growth-section">
          <h3>성장 방향</h3>
          <div className="growth-points">
            <div className="stress-point">
              <h4>스트레스 시점</h4>
              <p>{data.growthPath.stress}</p>
            </div>
            <div className="growth-point">
              <h4>성장 시점</h4>
              <p>{data.growthPath.growth}</p>
            </div>
          </div>
        </section>

        <section className="integration-section">
          <h3>통합과 분열의 방향</h3>
          <div className="integration-points">
            {data.integrationPoints.map((point, index) => (
              <div key={index} className="integration-item">
                <h4>{point.title}</h4>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EnneagramDetail; 