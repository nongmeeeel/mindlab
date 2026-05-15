import React from 'react';
import '../styles/Guide.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="guide-page">
      <div className="guide-container">
        <h1>마인드랩 소개</h1>

        <section>
          <h2>왜 이 서비스를 만들었나요</h2>
          <p>솔직히 처음 시작한 이유가 그렇게 거창하지 않아요. MBTI에 푹 빠져서 주변 사람들한테 "너 무슨 유형이야?"를 달고 살다가, 제대로 된 무료 검사 사이트가 생각보다 없다는 걸 느꼈습니다. 결과를 보려면 공유를 해야 하거나, 광고가 너무 많거나, 아니면 질문 수가 너무 적어서 결과가 대충 나오거나.</p>
          <p>그래서 그냥 만들어봤어요. 2023년 말쯤부터 조금씩 만들기 시작했는데, 처음엔 MBTI만 있었습니다. 그러다 MBTI 하나로는 자기 자신을 다 설명하기 어렵다는 걸 점점 느끼게 됐고, 에니어그램이랑 애착유형까지 추가하게 됐죠.</p>
          <p>지금은 세 가지 검사를 무료로 제공하고 있고, 회원가입도 없고 결과도 서버에 저장하지 않습니다. 그냥 하고 싶을 때 와서 하고 가는 사이트를 만들고 싶었어요.</p>
        </section>

        <section>
          <h2>제공하는 검사 세 가지</h2>
          <p>각 검사가 조금씩 다른 각도에서 자기 자신을 보여준다고 생각합니다.</p>
          <ul>
            <li style={{marginBottom: '15px'}}>
              <strong>MBTI 성격유형 검사</strong><br />
              카를 융(Carl Jung)의 심리유형론을 기반으로 한 가장 유명한 성격 분류 검사입니다. 16가지 유형. 한국에서 특히 인기가 많죠. 처음 심리 검사를 접하시는 분들이 가장 쉽게 시작할 수 있습니다.
            </li>
            <li style={{marginBottom: '15px'}}>
              <strong>에니어그램 검사</strong><br />
              9가지 성격 유형을 기본 두려움과 욕구, 핵심 동기의 관점에서 분석합니다. MBTI가 '어떻게 행동하는가'를 보여준다면, 에니어그램은 '왜 그렇게 행동하는가'를 파고드는 느낌이에요. 개인적으로는 자기이해에 더 깊은 통찰을 줄 때가 많다고 느낍니다.
            </li>
            <li style={{marginBottom: '15px'}}>
              <strong>애착유형 검사</strong><br />
              존 볼비(John Bowlby)의 애착이론을 기반으로, 연인관계와 대인관계에서 내가 보이는 패턴을 확인합니다. 4가지 유형 분류. "왜 나는 관계에서 이런 행동을 반복하는 걸까?"라는 질문을 가진 분들에게 특히 도움이 될 수 있어요.
            </li>
          </ul>
        </section>

        <section>
          <h2>검사 결과를 어떻게 받아들이면 좋을까요</h2>
          <p>마인드랩의 검사 결과는 당신이 어떤 사람인지를 규정하지 않습니다. 지금 이 시점에 당신이 가진 경향성과 패턴을 보여주는 거울 하나 정도라고 생각해주세요.</p>
          <p>"나는 INFP니까 이래야 해"가 아니라, "아, 나한테 이런 면이 있구나" 정도의 발견이면 충분합니다. 같은 유형이라도 자란 환경이나 경험에 따라 전혀 다른 사람이 되니까요.</p>
          <p>그리고 저희 검사가 완벽하지 않다는 것도 말씀드려야 할 것 같아요. 온라인 심리 검사는 공인된 전문가의 상담을 대체할 수 없어요. 진지한 심리적 어려움이 있으시다면 전문 상담사를 찾아보시길 권장합니다. 마인드랩은 어디까지나 자기이해를 위한 가벼운 도구입니다.</p>
        </section>

        <section>
          <h2>운영에 대해</h2>
          <p>마인드랩은 광고 수익으로 운영되는 무료 서비스입니다. 광고가 불편하시더라도 이해 부탁드려요. 광고 없이는 서버 유지도, 지속적인 업데이트도 어렵습니다.</p>
          <p>피드백이나 문의 사항은 이메일로 연락 주세요. 빠르게 답장 못 할 수 있지만, 다 읽고 있습니다.</p>
          <p>📧 <a href="mailto:yong8master@gmail.com" style={{color: '#667eea'}}>yong8master@gmail.com</a></p>
        </section>

        <section>
          <h2>관련 페이지</h2>
          <p>
            <Link to="/guide/mbti" style={{color: '#667eea', marginRight: '20px'}}>MBTI 이론 배경 →</Link>
            <Link to="/guide/enneagram" style={{color: '#667eea', marginRight: '20px'}}>에니어그램 이론 배경 →</Link>
            <Link to="/guide/attachment" style={{color: '#667eea'}}>애착유형 이론 배경 →</Link>
          </p>
          <p style={{fontSize: '0.85rem', color: '#aaa', marginTop: '30px'}}>마지막 업데이트: 2026년 5월 | 본 서비스는 심리학 전문 기관이 운영하는 서비스가 아닙니다.</p>
        </section>
      </div>
    </div>
  );
};

export default About;
