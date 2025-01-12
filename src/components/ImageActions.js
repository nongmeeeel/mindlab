import React from 'react';
import { FaShareAlt, FaDownload } from 'react-icons/fa';

const ImageActions = ({ image, title, type }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = image;
    link.download = `${title}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `내 ${type} 검사 결과`,
          url: window.location.href
        });
      } catch (error) {
        console.log('공유 실패:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('결과 링크가 클립보드에 복사되었습니다!');
    }
  };

  return (
    <div className="image-actions">
      <button 
        className="image-action-button"
        onClick={handleShare}
        aria-label="결과 공유하기"
      >
        <FaShareAlt size={16} />
        <span>이미지 공유</span>
      </button>
      <button 
        className="image-action-button"
        onClick={handleDownload}
        aria-label="이미지 저장하기"
      >
        <FaDownload size={16} />
        <span>이미지 저장</span>
      </button>
    </div>
  );
};

export default ImageActions; 