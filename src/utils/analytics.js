import ReactGA from 'react-ga4';

// Google Analytics 초기화 (단일 소스).
// send_page_view: false 로 초기 자동 페이지뷰를 끄고, 라우트 변경 시 logPageView로만
// 수동 전송한다. SPA에서 자동+수동 중복 집계를 막기 위함.
ReactGA.initialize('G-JJ7J4MNF17', {
  gtagOptions: { send_page_view: false },
});

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