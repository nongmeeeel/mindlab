import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShareAlt, FaHome, FaCrown } from 'react-icons/fa';

const ActionButtons = ({ position = 'bottom' }) => {
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
      // 결제 페이지로 이동하는 로직
      console.log('결제 페이지로 이동');
    }
  };

  const className = `action-buttons ${position === 'top' ? 'fixed-top' : 'bottom-buttons'}`;

  return (
    <div className={className}>
      <button 
        className="action-button premium-button"
        onClick={handlePremium}
        aria-label="전체 결과 확인"
      >
        <FaCrown size={18} />
        <span>전체 결과</span>
      </button>
      <button 
        className="action-button share-button"
        onClick={handleShare}
        aria-label="테스트 공유"
      >
        <FaShareAlt size={18} />
        <span>테스트 공유</span>
      </button>
      <button 
        className="action-button home-button"
        onClick={() => navigate('/')}
        aria-label="다른 검사"
      >
        <FaHome size={18} />
        <span>다른 검사</span>
      </button>
    </div>
  );
};

export default ActionButtons; 