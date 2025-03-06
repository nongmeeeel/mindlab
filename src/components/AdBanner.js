import React, { useEffect, useRef } from 'react';
import '../styles/AdBanner.css';

// 광고 타입을 props로 받아서 구분
const AdBanner = ({ adSlot, position, type = 'google' }) => {
  const isLoaded = useRef(false);

  useEffect(() => {
    // 컴포넌트가 마운트되거나 adSlot이 변경될 때마다 광고 다시 로드
    isLoaded.current = false;
    
    if (type === 'google') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isLoaded.current = true;
      } catch (error) {
        console.error('AdSense 에러:', error);
      }
    }
  }, [adSlot, type]); // adSlot을 의존성 배열에 추가

  return (
    <div className={`ad-container ${position}`}>
      {type === 'google' ? (
        // 구글 광고
        <ins
          className="adsbygoogle"
          style={{ display: 'block', textAlign: 'center' }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-2285464317468764"
          data-ad-slot={adSlot}
          data-full-width-responsive="true"
        />
      ) : (
        // 카카오 광고
        <ins 
          className="kakao_ad_area" 
          style={{ display: 'none' }}
          data-ad-unit="광고단위코드"
          data-ad-width="320" 
          data-ad-height="100"
        />
      )}
    </div>
  );
};

export default AdBanner;