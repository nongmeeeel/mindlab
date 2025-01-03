import React, { useState } from 'react';
import '../styles/Payment.css';
import kakaoQRImage from '../assets/images/kakao_qr.jpg';

const Payment = ({ amount, service }) => {
  const [showQR, setShowQR] = useState(false);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  const handlePayment = (type) => {
    switch(type) {
      case 'kakaopay':
        if (isMobile) {
          window.location.href = 'kakaopay://sendmoney';
        } else {
          setShowQR(true);
        }
        break;
      case 'toss':
        if (isMobile) {
          window.location.href = 'supertoss://';
        } else {
          alert('모바일에서 결제를 진행해주세요.');
        }
        break;
      case 'chat':
        window.location.href = 'https://pf.kakao.com/[카카오톡채널ID]/chat';
        break;
      default:
        break;
    }
  };

  const QRModal = () => (
    <div className="qr-modal" onClick={() => setShowQR(false)}>
      <div className="qr-content" onClick={e => e.stopPropagation()}>
        <h3>모바일 결제</h3>
        <img 
          src={kakaoQRImage}
          alt="카카오페이 QR코드"
          className="qr-image"
        />
        <p>휴대폰으로 QR코드를 스캔하세요</p>
        <button 
          onClick={() => setShowQR(false)}
          className="close-button"
        >
          닫기
        </button>
      </div>
    </div>
  );

  return (
    <div className="payment-card">
      <div className="service-info">
        <h3>{service}</h3>
        <p className="price">{amount.toLocaleString()}원</p>
      </div>

      <div className="payment-methods">
        <button 
          onClick={() => handlePayment('kakaopay')}
          className="payment-button kakaopay"
        >
          {isMobile ? '카카오페이로 결제' : '모바일에서 카카오페이 결제'}
        </button>

        <button 
          onClick={() => handlePayment('toss')}
          className="payment-button toss"
        >
          {isMobile ? '토스로 결제' : '모바일에서 토스 결제'}
        </button>

        <button 
          onClick={() => handlePayment('chat')}
          className="payment-button chat"
        >
          카카오톡으로 문의
        </button>
      </div>

      {!isMobile && (
        <p className="mobile-notice">
          * 결제는 모바일에서만 가능합니다
        </p>
      )}
      <p className="payment-notice">
        * 결제 완료 후 즉시 이용 가능합니다
      </p>
      {showQR && <QRModal />}
    </div>
  );
};

export default Payment; 