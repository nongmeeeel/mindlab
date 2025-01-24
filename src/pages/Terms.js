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
        </section>
      </div>
    </div>
  );
};

export default Terms; 