import React from 'react';
import { FaShareAlt } from 'react-icons/fa';

const ImageActions = ({ image, title, type }) => {
  const handleShare = async () => {
    try {
      const response = await fetch(image);
      const blob = await response.blob();
      
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      if (isMobile && navigator.share) {
        const file = new File([blob], `${title}.png`, { type: 'image/png' });
        await navigator.share({
          files: [file],
          title: `${type} 테스트 결과`,
        });
      } else {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${title}.png`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (error) {
      // console.error('공유/저장 실패:', error);
      // alert('이미지 공유/저장에 실패했습니다.');
    }
  };

  return (
    <div className="image-actions">
      <button 
        className="image-action-button"
        onClick={handleShare}
        aria-label="내 결과 이미지 공유"
      >
        <FaShareAlt size={16} />
        <span>내 결과 이미지 공유</span>
      </button>
    </div>
  );
};

export default ImageActions; 