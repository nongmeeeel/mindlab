import React from 'react';
import '../styles/Legal.css';

const Privacy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>개인정보처리방침</h1>
        
        <section>
          <h2>1. 수집하는 개인정보 항목</h2>
          <p>본 서비스는 다음과 같은 정보를 수집합니다:</p>
          <ul>
            <li>자동 수집 항목: 접속 로그, IP 주소</li>
            <li>Google Analytics: 방문 통계, 사용자 행동 정보</li>
            <li>광고 관련: 쿠키를 통한 광고 최적화 정보</li>
          </ul>
        </section>

        <section>
          <h2>2. 개인정보의 수집 및 이용목적</h2>
          <ul>
            <li>서비스 이용 통계 및 분석</li>
            <li>맞춤형 광고 제공</li>
            <li>서비스 개선 및 개발</li>
          </ul>
        </section>

        <section>
          <h2>3. 개인정보의 보유 및 이용기간</h2>
          <p>수집된 정보는 서비스 제공 목적 달성 후 즉시 파기됩니다.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy; 