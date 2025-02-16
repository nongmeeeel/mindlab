import React, { useEffect, useRef } from 'react';

// 광고 타입을 props로 받아서 구분
const AdBanner = ({ position, type = 'google' }) => {
  const isLoaded = useRef(false);

  useEffect(() => {
    if (!isLoaded.current && type === 'google') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isLoaded.current = true;
      } catch (error) {
        console.error('AdSense 에러:', error);
      }
    }
  }, [type]);

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
          data-ad-slot="3626007551"
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