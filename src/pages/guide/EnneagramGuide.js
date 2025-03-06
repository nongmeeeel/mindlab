import React from 'react';
import '../../styles/Guide.css';
import { Link } from 'react-router-dom';
import AdBanner from '../../components/AdBanner';

const EnneagramGuide = () => {
  return (
    <div className="guide-page">
      <div className="guide-container">
        <h1>에니어그램의 이해</h1>

        <section>
          <h2>에니어그램의 기원과 역사</h2>
          <p>에니어그램은 고대 수피즘에서 유래한 인간 이해의 도구로, '9개의 그림'이라는 의미를 가지고 있습니다. 20세기 초 조지 거드지예프(George Gurdjieff)에 의해 서양에 소개되었고, 오스카 이차조(Oscar Ichazo)와 클라우디오 나란호(Claudio Naranjo)를 통해 현대적 성격유형 체계로 발전했습니다.</p>
          <p>현대의 에니어그램은 심리학, 영성, 기업 컨설팅 등 다양한 분야에서 활용되는 종합적인 인간 이해의 도구로 자리잡았습니다.</p>
        </section>

        <AdBanner />

        <section>
          <h2>9가지 성격유형의 특징</h2>
          <ul>
            <li>1번 개혁가형 (The Reformer)
              <p>- 완벽주의적이고 윤리적인 성향</p>
              <p>- 높은 도덕성과 책임감</p>
              <p>- 자기 개선과 발전 추구</p>
            </li>
            <li>2번 조력가형 (The Helper)
              <p>- 이타적이고 대인관계 중심적</p>
              <p>- 타인의 필요에 민감</p>
              <p>- 사랑과 인정 추구</p>
            </li>
            <li>3번 성취가형 (The Achiever)
              <p>- 목표 지향적이고 적응력이 뛰어남</p>
              <p>- 성공과 인정을 추구</p>
              <p>- 효율성과 성과 중시</p>
            </li>
            <li>4번 개인주의형 (The Individualist)
              <p>- 예술적 감수성이 풍부</p>
              <p>- 독특성과 자아실현 추구</p>
              <p>- 깊은 감정과 의미 추구</p>
            </li>
            <li>5번 탐구자형 (The Investigator)
              <p>- 지적 호기심이 강함</p>
              <p>- 관찰과 분석을 선호</p>
              <p>- 독립성과 프라이버시 중시</p>
            </li>
            <li>6번 충성가형 (The Loyalist)
              <p>- 책임감과 의무감이 강함</p>
              <p>- 안전과 신뢰 추구</p>
              <p>- 충실하고 헌신적인 성향</p>
            </li>
            <li>7번 열정가형 (The Enthusiast)
              <p>- 낙관적이고 모험을 즐김</p>
              <p>- 새로운 경험 추구</p>
              <p>- 다재다능하고 활동적</p>
            </li>
            <li>8번 도전가형 (The Challenger)
              <p>- 강력한 리더십과 결단력</p>
              <p>- 정의와 힘 추구</p>
              <p>- 독립적이고 지배적인 성향</p>
            </li>
            <li>9번 평화추구형 (The Peacemaker)
              <p>- 조화와 평화 추구</p>
              <p>- 포용력과 수용성이 높음</p>
              <p>- 갈등을 피하고 중재하는 성향</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>에니어그램의 핵심 개념</h2>
          <ul>
            <li>기본 두려움과 욕구
              <p>각 유형은 고유한 기본 두려움과 이를 극복하기 위한 기본 욕구를 가지고 있습니다.</p>
            </li>
            <li>날개(Wing)
              <p>주요 유형 양쪽의 인접 유형 특성이 보조적으로 나타나는 현상입니다.</p>
            </li>
            <li>통합과 분열의 방향
              <p>스트레스와 안정 상태에서 각 유형이 보이는 성격 변화의 방향성을 설명합니다.</p>
            </li>
            <li>본능의 하위유형
              <p>자기보존, 사회적, 성적 본능에 따른 세부적인 성격 특성을 나타냅니다.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>에니어그램의 실제 활용</h2>
          <p>에니어그램은 다음과 같은 영역에서 실질적으로 활용됩니다:</p>
          <ul>
            <li>자기 이해와 성장
              <p>- 자신의 강점과 약점 파악</p>
              <p>- 개인적 성장 방향 설정</p>
              <p>- 스트레스 대처 방식 개선</p>
            </li>
            <li>대인관계 개선
              <p>- 타인의 관점 이해</p>
              <p>- 효과적인 의사소통 방법 습득</p>
              <p>- 갈등 해결 능력 향상</p>
            </li>
            <li>조직과 리더십
              <p>- 팀 구성과 역할 분배</p>
              <p>- 리더십 스타일 개발</p>
              <p>- 조직 문화 이해와 개선</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>에니어그램을 통한 성장</h2>
          <p>에니어그램은 단순한 성격 분류를 넘어 개인의 성장과 발전을 위한 도구입니다. 다음과 같은 방법으로 활용할 수 있습니다:</p>
          <ul>
            <li>자기 인식의 확장
              <p>- 행동 패턴의 이해</p>
              <p>- 내면의 동기 파악</p>
              <p>- 무의식적 습관 인식</p>
            </li>
            <li>균형 잡힌 발전
              <p>- 약점의 보완과 강점의 활용</p>
              <p>- 통합의 방향으로의 성장</p>
              <p>- 다양한 관점의 수용</p>
            </li>
            <li>실천적 적용
              <p>- 일상생활에서의 자기 관찰</p>
              <p>- 의식적인 행동 변화 시도</p>
              <p>- 지속적인 자기 성찰</p>
            </li>
          </ul>
        </section>

        <section className="related-types">
          <h5>에니어그램 유형별 특징 바로가기</h5>
          <div className="type-links">
            <div className="type-group">
              <h6>장 중심 (Body)</h6>
              <Link to="/static/enneagram/8" className="type-link">8유형: 지도자</Link>
              <Link to="/static/enneagram/9" className="type-link">9유형: 중재자</Link>
              <Link to="/static/enneagram/1" className="type-link">1유형: 개혁가</Link>
            </div>
            <div className="type-group">
              <h6>가슴 중심 (Heart)</h6>
              <Link to="/static/enneagram/2" className="type-link">2유형: 조력가</Link>
              <Link to="/static/enneagram/3" className="type-link">3유형: 성취가</Link>
              <Link to="/static/enneagram/4" className="type-link">4유형: 예술가</Link>
            </div>
            <div className="type-group">
              <h6>머리 중심 (Head)</h6>
              <Link to="/static/enneagram/5" className="type-link">5유형: 연구가</Link>
              <Link to="/static/enneagram/6" className="type-link">6유형: 충성가</Link>
              <Link to="/static/enneagram/7" className="type-link">7유형: 낙천가</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EnneagramGuide; 