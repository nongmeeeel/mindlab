import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MBTIDetail = () => {
  const location = useLocation();
  const { scores } = location.state || {};

  const options = {
    responsive: true,
    indexAxis: 'y',
    scales: {
      x: {
        min: -100,
        max: 100,
        grid: {
          color: (context) => context.tick.value === 0 ? '#666' : '#e0e0e0',
          lineWidth: (context) => context.tick.value === 0 ? 2 : 1,
        }
      },
      y: {
        reverse: true,
        grid: {
          display: false
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
            const labels = {
              'E-I': value > 0 ? '외향(E)' : '내향(I)',
              'S-N': value > 0 ? '감각(S)' : '직관(N)',
              'T-F': value > 0 ? '사고(T)' : '감정(F)',
              'J-P': value > 0 ? '판단(J)' : '인식(P)'
            };
            return `${labels[context.label]}: ${Math.abs(value)}%`;
          }
        }
      }
    }
  };

  const chartData = {
    labels: ['E-I', 'S-N', 'T-F', 'J-P'],
    datasets: [
      {
        data: scores,
        borderColor: 'rgb(102, 126, 234)',
        backgroundColor: 'rgba(102, 126, 234, 0.5)',
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.1
      }
    ]
  };

  return (
    <div className="detail-page">
      <div className="detail-container">
        <h2>MBTI 성향 분석</h2>
        <div className="chart-section">
          <Line options={options} data={chartData} />
        </div>
        <div className="description">
          <p>중간선(0)을 기준으로 오른쪽은 E/S/T/J 성향이, 왼쪽은 I/N/F/P 성향이 강함을 나타냅니다.</p>
        </div>
      </div>
    </div>
  );
};

export default MBTIDetail; 