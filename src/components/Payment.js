import React, { useEffect } from 'react';
import { FaComment, FaCreditCard } from 'react-icons/fa';
import '../styles/Payment.css';
import axios from 'axios';

const Payment = ({ amount, onSuccess, onCancel }) => {
  useEffect(() => {
    // 포트원 SDK 로드
    const script = document.createElement('script');
    script.src = 'https://cdn.iamport.kr/v1/iamport.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePaymentMethod = async (method) => {
    try {
      if (method === 'kakao') {
        const response = await axios.post('/api/payments/kakao/ready', {
          amount: amount,
          orderName: '마인드랩 프리미엄 서비스',
          customerName: '고객',
          successUrl: `${window.location.origin}/payments/success`,
          failUrl: `${window.location.origin}/payments/fail`,
          cancelUrl: `${window.location.origin}/payments/cancel`,
        });

        if (response.data.next_redirect_mobile_url) {
          window.location.href = response.data.next_redirect_mobile_url;
        } else if (response.data.next_redirect_pc_url) {
          window.location.href = response.data.next_redirect_pc_url;
        }
      } else if (method === 'card') {
        const { IMP } = window;
        IMP.init('YOUR_IMP_MERCHANT_ID'); // 포트원 가맹점 식별코드

        const data = {
          pg: 'html5_inicis',               // PG사 (이니시스)
          pay_method: 'card',               // 결제수단
          merchant_uid: `mid_${Date.now()}`,// 주문번호
          amount: amount,                   // 결제금액
          name: '마인드랩 프리미엄 서비스',    // 주문명
          buyer_name: '고객',               // 구매자 이름
          buyer_tel: '',                    // 구매자 전화번호
          buyer_email: '',                  // 구매자 이메일
          m_redirect_url: `${window.location.origin}/payments/complete`, // 모바일 결제 후 리디렉션 URL
        };

        IMP.request_pay(data, callback);
      } else {
        // 네이버페이 등 다른 결제 수단
        const paymentResult = await mockPayment(method);
        if (paymentResult.success) {
          onSuccess();
        }
      }
    } catch (error) {
      console.error('결제 실패:', error);
      alert('결제에 실패했습니다. 다시 시도해주세요.');
    }
  };

  // 포트원 결제 콜백
  const callback = async (response) => {
    const { success, error_msg, imp_uid, merchant_uid } = response;

    if (success) {
      // 결제 검증 요청
      try {
        const verificationResponse = await axios.post('/api/payments/verify', {
          imp_uid,
          merchant_uid,
        });
        
        if (verificationResponse.data.success) {
          onSuccess();
        } else {
          alert('결제 검증에 실패했습니다.');
        }
      } catch (error) {
        console.error('결제 검증 실패:', error);
        alert('결제 검증 중 오류가 발생했습니다.');
      }
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

  // 임시 결제 처리 함수 (다른 결제 수단용)
  const mockPayment = async (method) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true };
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h2>프리미엄 결제</h2>
        <p className="payment-amount">{amount.toLocaleString()}원</p>
      </div>
      
      <div className="payment-methods">
        <button 
          className="payment-button kakao"
          onClick={() => handlePaymentMethod('kakao')}
        >
          <FaComment />
          <span>카카오페이</span>
        </button>
        
        <button 
          className="payment-button naver"
          onClick={() => handlePaymentMethod('naver')}
        >
          <span className="naver-icon">N</span>
          <span>네이버페이</span>
        </button>
        
        <button 
          className="payment-button card"
          onClick={() => handlePaymentMethod('card')}
        >
          <FaCreditCard />
          <span>일반결제</span>
        </button>
      </div>

      <button 
        className="payment-cancel"
        onClick={onCancel}
      >
        취소
      </button>
    </div>
  );
};

export default Payment; 