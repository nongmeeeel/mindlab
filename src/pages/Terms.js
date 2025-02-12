import React from 'react';
import '../styles/Legal.css';

const Terms = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>이용약관</h1>

        <section>
          <h2>1. 서비스 이용</h2>
          <p>본 서비스는 심리 테스트 결과를 제공하며, 전문적인 심리 상담을 대체할 수 없습니다.</p>
        </section>

        <section>
          <h2>2. 책임 제한</h2>
          <p>테스트 결과는 참고용이며, 결과에 대한 책임은 사용자에게 있습니다.</p>
        </section>

        <section>
          <h2>3. 광고 서비스</h2>
          <p>본 서비스는 Google AdSense를 통한 광고를 포함하고 있습니다.</p>
          <p>광고는 사용자의 관심사에 기반하여 제공될 수 있으며, 이는 Google의 광고 정책을 따릅니다.</p>
          <p>광고 콘텐츠에 대한 책임은 해당 광고주에게 있습니다.</p>
          <p>사용자는 브라우저 설정을 통해 맞춤형 광고를 거부할 수 있습니다.</p>
          <p>본 사이트는 광고 수익을 통해 무료 서비스를 제공하고 있습니다.</p>
        </section>

        <section>
          <h2>4. 콘텐츠 정책</h2>
          <p>본 서비스의 모든 콘텐츠는 저작권법의 보호를 받으며, 무단 복제 및 배포를 금지합니다.</p>
          <p>서비스 내 제공되는 심리 테스트는 전문적인 진단을 대체할 수 없습니다.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms; 