import React from 'react';
import { FaShareAlt } from 'react-icons/fa';

const ShareButton = () => {
  const handleShare = async () => {
    const shareUrl = window.location.origin; // 메인 페이지 URL

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

  return (
    <button 
      className="share-button"
      onClick={handleShare}
      aria-label="테스트 공유하기"
    >
      <FaShareAlt size={18} />
      <span>테스트 공유</span>
    </button>
  );
};

export default ShareButton; 