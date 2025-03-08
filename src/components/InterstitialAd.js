import { useEffect, useRef } from 'react';

const InterstitialAd = () => {
    const isAdShown = useRef(false);

    useEffect(() => {
        if (!isAdShown.current) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({
                    overlays: { interstitials: true } 
                });
                isAdShown.current = true;
            } catch (error) {
                console.error('AdSense 전면 광고 로드 실패:', error);
            }
        }
    }, []);

    return null; // 이 컴포넌트는 UI 요소가 필요 없음
};

export default InterstitialAd;