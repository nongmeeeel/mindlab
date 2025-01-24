import React, { useEffect, useRef } from 'react';

const AdBanner = () => {
  const isLoaded = useRef(false);

  useEffect(() => {
    if (!isLoaded.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isLoaded.current = true;
      } catch (error) {
        console.error('AdSense 에러:', error);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center' }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-2285464317468764"
      data-ad-slot="3626007551"
      data-full-width-responsive="true"
    />
  );
};

export default AdBanner;