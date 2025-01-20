import React from 'react';
import { FaShareAlt, FaDownload } from 'react-icons/fa';

const ImageActions = ({ image, title, type }) => {
  const handleShare = async () => {
    try {
      // 이미지 URL을 Blob으로 변환
      const response = await fetch(image);
      const blob = await response.blob();
      
      if (navigator.share) {
        // 모바일에서 이미지만 공유
        const file = new File([blob], `${title}.png`, { type: 'image/png' });
        await navigator.share({
          files: [file],
          title: `${type} 테스트 결과`,
        });
      } else {
        // 데스크톱에서는 URL 복사
        navigator.clipboard.writeText(window.location.href);
        alert('결과 링크가 클립보드에 복사되었습니다!');
      }
    } catch (error) {
      console.error('공유 실패:', error);
    }
  };

  const handleSave = async () => {
    try {
      const response = await fetch(image);
      const blob = await response.blob();
      
      // 모바일 여부 확인
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      if (isMobile) {
        // 모바일에서는 새 탭에서 이미지를 열어서 길게 누르면 저장할 수 있도록 함
        const url = window.URL.createObjectURL(blob);
        window.open(url, '_blank');
        window.URL.revokeObjectURL(url);
        alert('이미지를 길게 눌러서 저장할 수 있습니다.');
      } else {
        // 데스크톱에서는 기존 방식대로 다운로드
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
      console.error('저장 실패:', error);
      alert('이미지 저장에 실패했습니다.');
    }
  };

  return (
    <div className="image-actions">
      <button 
        className="image-action-button"
        onClick={handleShare}
        aria-label="이미지 공유"
      >
        <FaShareAlt size={16} />
        <span>이미지 공유</span>
      </button>
      <button 
        className="image-action-button"
        onClick={handleSave}
        aria-label="이미지 저장"
      >
        <FaDownload size={16} />
        <span>이미지 저장</span>
      </button>
    </div>
  );
};

export default ImageActions; 