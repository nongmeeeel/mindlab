import ReactGA from 'react-ga4';

// Google Analytics 초기화
ReactGA.initialize('G-RWT3HDG5ZK');  // 새로운 측정 ID 적용

// 페이지뷰 추적
export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

// 이벤트 추적
export const logEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
};

// 사용자 속성 설정
export const setUserProperties = (properties) => {
  ReactGA.set(properties);
}; 