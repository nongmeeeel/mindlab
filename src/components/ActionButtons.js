import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShareAlt, FaHome, FaCrown, FaDownload } from 'react-icons/fa';
import { generatePDF } from '../utils/pdfGenerator';

const ActionButtons = ({ position = 'bottom', type, scores, resultType, onPremiumPurchase, isPremium }) => {
  const navigate = useNavigate();
  
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
    const confirmed = window.confirm('전체 결과 보기는 프리미엄 서비스입니다. (5,000원)\n결제 페이지로 이동하시겠습니까?');
    if (confirmed) {
      onPremiumPurchase();
    }
  };

  const handleSaveResult = async () => {
    const elementId = 'result-container'; // MBTIResult의 결과 컨테이너 ID
    const fileName = `MBTI_결과_${resultType}`;
    
    try {
      const success = await generatePDF(elementId, fileName);
      if (success) {
        alert('결과가 PDF로 저장되었습니다.');
      } else {
        alert('PDF 저장 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('PDF 저장 실패:', error);
      alert('PDF 저장에 실패했습니다.');
    }
  };

  const className = `action-buttons ${position === 'top' ? 'fixed-top' : 'bottom-buttons'}`;

  return (
    <div className={className}>
      {!isPremium ? (
        // 프리미엄 구매 전 버튼
        <button 
          className="action-button premium-button"
          onClick={handlePremium}
          aria-label="전체 결과 확인"
        >
          <FaCrown size={14} />
          <span>전체 결과 확인하기</span>
        </button>
      ) : (
        // 프리미엄 구매 후 버튼
        <button 
          className="action-button save-button"
          onClick={handleSaveResult}
          aria-label="결과 저장"
        >
          <FaDownload size={14} />
          <span>결과PDF 저장</span>
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
  );
};

export default ActionButtons; 