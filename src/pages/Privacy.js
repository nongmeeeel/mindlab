import React from 'react';
import '../styles/Legal.css';

const Privacy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>개인정보처리방침</h1>
        <p style={{color: '#999', fontSize: '0.9rem', marginBottom: '30px'}}>시행일: 2024년 1월 1일 | 최종 수정: 2025년 3월 1일</p>

        <section>
          <h2>1. 개인정보처리방침의 목적</h2>
          <p>마인드랩(이하 "서비스")은 이용자의 개인정보 보호를 중요하게 생각합니다. 본 방침은 서비스가 수집하는 정보의 종류, 이용 목적, 보유 기간 등을 안내하기 위해 작성되었습니다.</p>
          <p>본 서비스는 이용자에게 MBTI, 에니어그램, 애착유형 등 심리 검사 서비스를 무료로 제공하며, 서비스 운영을 위해 최소한의 정보만 수집합니다.</p>
        </section>

        <section>
          <h2>2. 수집하는 정보 항목</h2>
          <p>본 서비스는 별도의 회원가입이 없으며, 검사 결과를 서버에 저장하지 않습니다. 수집되는 정보는 다음과 같습니다:</p>
          <ul>
            <li><strong>자동 수집 정보</strong>: 접속 로그, IP 주소, 브라우저 종류, 방문한 페이지, 방문 일시, 체류 시간</li>
            <li><strong>Google Analytics 수집 정보</strong>: 방문자 수, 페이지별 방문 수, 사용자 행동(어떤 버튼을 클릭했는지 등), 기기 종류, 국가/지역 정보 (익명 처리됨)</li>
            <li><strong>Google AdSense 관련 정보</strong>: 맞춤형 광고 제공을 위한 쿠키 및 유사 기술. 이용자의 관심사와 브라우징 패턴을 기반으로 광고가 노출될 수 있습니다.</li>
          </ul>
          <p>검사 질문에 대한 답변(심리 검사 응답 데이터)은 결과 계산 후 즉시 소멸되며, 어떤 형태로도 저장되지 않습니다.</p>
        </section>

        <section>
          <h2>3. 개인정보의 수집 및 이용 목적</h2>
          <ul>
            <li>서비스 이용 통계 분석 및 사용성 개선</li>
            <li>오류 및 기술적 문제 파악</li>
            <li>Google AdSense를 통한 맞춤형 광고 제공</li>
            <li>서비스 보안 유지</li>
          </ul>
        </section>

        <section>
          <h2>4. 개인정보의 보유 및 이용 기간</h2>
          <p>접속 로그 등 자동 수집 정보는 Google Analytics 및 서버 정책에 따라 최대 26개월까지 보유될 수 있습니다. 서비스가 직접 수집하는 별도 개인정보는 없으므로, 별도 파기 절차는 없습니다.</p>
          <p>서비스 이용 계약이 종료되거나 서비스가 폐지될 경우, 수집된 정보는 지체 없이 파기합니다.</p>
        </section>

        <section>
          <h2>5. 쿠키(Cookie) 사용에 대한 안내</h2>
          <p>본 사이트는 쿠키를 사용합니다. 쿠키는 웹사이트가 이용자의 브라우저에 저장하는 소규모 데이터 파일로, 서비스 이용 경험 개선 및 광고 관련 목적으로 사용됩니다.</p>
          <p>이용자는 브라우저 설정을 통해 쿠키 저장을 거부하거나 삭제할 수 있습니다. 다만 이 경우 일부 기능 이용에 제한이 있을 수 있습니다.</p>
          <ul>
            <li>Chrome: 설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터</li>
            <li>Safari: 설정 → Safari → 개인 정보 보호 → 모든 쿠키 차단</li>
            <li>Firefox: 설정 → 개인 정보 및 보안 → 쿠키 및 사이트 데이터</li>
          </ul>
        </section>

        <section>
          <h2>6. 제3자 서비스 및 광고</h2>
          <p>본 서비스는 다음과 같은 제3자 서비스를 사용합니다. 각 서비스는 독자적인 개인정보처리방침을 가지며, 해당 방침에 따라 데이터를 처리합니다.</p>
          <ul>
            <li><strong>Google Analytics</strong> — 방문자 분석. Google의 개인정보처리방침: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{color: '#667eea'}}>policies.google.com/privacy</a></li>
            <li><strong>Google AdSense</strong> — 광고 제공. 이용자는 <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" style={{color: '#667eea'}}>Google 광고 설정</a>에서 맞춤 광고를 거부할 수 있습니다.</li>
          </ul>
          <p>광고 차단 소프트웨어 사용 시 일부 광고가 표시되지 않을 수 있습니다.</p>
        </section>

        <section>
          <h2>7. 정보주체의 권리</h2>
          <p>이용자는 개인정보와 관련하여 다음의 권리를 행사할 수 있습니다:</p>
          <ul>
            <li>개인정보 수집·이용에 대한 동의 철회</li>
            <li>개인정보 처리 정지 요청</li>
            <li>Google Analytics 데이터 수집 거부: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{color: '#667eea'}}>Google Analytics 옵트아웃 도구</a> 사용</li>
          </ul>
          <p>개인정보와 관련된 문의 사항은 아래 연락처로 연락 주세요.</p>
        </section>

        <section>
          <h2>8. 개인정보 보호 책임자</h2>
          <p>개인정보 관련 문의는 아래 이메일로 연락 주시기 바랍니다.</p>
          <p>이메일: <a href="mailto:yong8master@gmail.com" style={{color: '#667eea'}}>yong8master@gmail.com</a></p>
        </section>

        <section>
          <h2>9. 개인정보처리방침의 변경</h2>
          <p>법령이나 서비스 변경 사항을 반영하기 위해 개인정보처리방침이 수정될 수 있습니다. 변경 시 해당 페이지를 통해 공지합니다. 중요한 변경이 있을 경우 별도의 안내를 제공할 수 있습니다.</p>
          <p style={{fontSize: '0.85rem', color: '#999', marginTop: '20px'}}>본 방침은 2025년 3월 1일부터 시행됩니다.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
