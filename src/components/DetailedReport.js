import React from 'react';
import { Line, Radar, Bar } from 'react-chartjs-2';
import '../styles/DetailedReport.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
);

const DetailedReport = ({ type, data }) => {
  const renderChart = () => {
    switch(type) {
      case 'mbti':
        return (
          <div className="chart-container">
            <Bar data={data.dimensionScores} />
            <p className="chart-description">
              각 차원별 선호도를 보여주는 그래프입니다.
            </p>
          </div>
        );
      
      case 'enneagram':
        return (
          <div className="chart-container">
            <Radar data={data.typeScores} />
            <p className="chart-description">
              9가지 유형에 대한 성향을 보여주는 레이더 차트입니다.
            </p>
          </div>
        );
      
      case 'attachment':
        return (
          <div className="chart-container">
            <Line data={data.patternScores} />
            <p className="chart-description">
              4가지 애착 유형의 분포를 보여주는 그래프입니다.
            </p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="detailed-report">
      <h2>상세 분석 리포트</h2>
      {renderChart()}
      <div className="analysis-section">
        <h3>주요 특징 분석</h3>
        <ul>
          {data.analysis.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="recommendation-section">
        <h3>개선 및 발전 방향</h3>
        <ul>
          {data.recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailedReport; 