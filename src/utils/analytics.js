export const logEvent = (eventName, params = {}) => {
  // 개발 환경에서는 콘솔에만 출력
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, params);
    return;
  }

  // 프로덕션 환경에서만 실제 이벤트 전송
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }
}; 