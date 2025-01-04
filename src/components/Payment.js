import React, { useState } from 'react';
import '../styles/Payment.css';
import '../styles/Detail.css';

const Payment = ({ amount, service, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      // 여기에 실제 결제 로직 구현
      // 예: PG사 연동
      await new Promise(resolve => setTimeout(resolve, 1000)); // 임시 딜레이
      onSuccess();
    } catch (error) {
      alert('결제에 실패했습니다. 다시 시도해주세요.');
    }
    setLoading(false);
  };

  return (
    <div className="payment-container">
      <div className="payment-service">{service}</div>
      <div className="payment-amount">{amount.toLocaleString()}원</div>
      <button 
        className="payment-button"
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? '처리중...' : '구매하기'}
      </button>
    </div>
  );
};

export default Payment; 