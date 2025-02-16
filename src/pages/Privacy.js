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
            <li>Google AdSense: 맞춤형 광고를 위한 쿠키 정보</li>
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

        <section>
          <h2>4. 쿠키 사용에 대한 안내</h2>
          <p>본 사이트는 Google AdSense를 통한 광고 서비스를 사용하고 있으며, 이를 위해 제3자 쿠키가 사용될 수 있습니다.</p>
          <p>사용자는 브라우저 설정을 통해 쿠키 사용을 거부할 수 있으며, 이 경우 서비스 이용에 제한이 있을 수 있습니다.</p>
        </section>

        <section>
          <h2>5. 광고 서비스</h2>
          <p>본 사이트는 다음과 같은 광고 서비스를 사용합니다:</p>
          <ul>
            <li>Google AdSense</li>
            <li>카카오 애드핏</li>
            <li>맞춤형 광고를 위한 사용자 관심사 기반 광고</li>
          </ul>
          <p>광고 차단 소프트웨어를 사용하시는 경우 일부 기능이 제한될 수 있습니다.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy; 