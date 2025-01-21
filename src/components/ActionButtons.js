import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShareAlt, FaHome, FaCrown, FaDownload } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import Payment from './Payment';

const ActionButtons = ({ position = 'bottom', type, scores, resultType, onPremiumPurchase, isPremium }) => {
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);
  
  const handleShare = async () => {
    const shareUrl = window.location.origin;

    if (navigator.share) {
      try {
        await navigator.share({
          title: '마인드랩 심리 검사',
          text: '나의 성격 유형을 알아보세요!',
          url: shareUrl
        });
      } catch (error) {
        console.log('공유 실패:', error);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('테스트 링크가 클립보드에 복사되었습니다!');
    }
  };

  const handlePremium = () => {
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    onPremiumPurchase();
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
  };

  const handleSaveResult = async () => {
    const element = document.getElementById('result-container');
    if (!element) return;

    try {
      // 버튼들을 임시로 숨김
      const actionButtons = element.querySelectorAll('.action-buttons');
      const imageActions = element.querySelectorAll('.image-actions');
      [...actionButtons, ...imageActions].forEach(button => {
        button.style.display = 'none';
      });

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true
      });

      // 버튼들 다시 표시
      [...actionButtons, ...imageActions].forEach(button => {
        button.style.display = '';
      });

      // 모바일 여부 확인
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      if (isMobile && navigator.share) {
        // 모바일에서는 공유 API 사용
        canvas.toBlob(async (blob) => {
          const file = new File([blob], `${type}_결과_${resultType}.png`, { type: 'image/png' });
          try {
            await navigator.share({
              files: [file],
              title: '결과 저장',
            });
          } catch (error) {
            console.error('공유 실패:', error);
            alert('이미지 저장에 실패했습니다.');
          }
        }, 'image/png');
      } else {
        // 데스크톱에서는 바로 다운로드
        const link = document.createElement('a');
        link.download = `${type}_결과_${resultType}.png`;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('저장 실패:', error);
      alert('결과 저장에 실패했습니다.');
    }
  };

  const className = `action-buttons ${position === 'top' ? 'fixed-top' : 'bottom-buttons'}`;

  return (
    <>
      <div className={className}>
        {!isPremium ? (
          <button 
            className="action-button premium-button"
            onClick={handlePremium}
            aria-label="전체 결과 확인"
          >
            <FaCrown size={14} />
            <span>전체 결과 확인하기</span>
          </button>
        ) : (
          <button 
            className="action-button save-button"
            onClick={handleSaveResult}
            aria-label="결과저장"
          >
            <FaDownload size={14} />
            <span>결과저장</span>
          </button>
        )}
        
        <button 
          className="action-button share-button"
          onClick={handleShare}
          aria-label="테스트 공유"
        >
          <FaShareAlt size={14} />
          <span>테스트공유</span>
        </button>
        
        <button 
          className="action-button home-button"
          onClick={() => navigate('/')}
          aria-label="다른 검사"
        >
          <FaHome size={14} />
          <span>다른검사</span>
        </button>
      </div>

      {showPayment && (
        <Payment 
          amount={5000}
          onSuccess={handlePaymentSuccess}
          onCancel={handlePaymentCancel}
        />
      )}
    </>
  );
};

export default ActionButtons; 