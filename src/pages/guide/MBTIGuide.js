import React from 'react';
import '../../styles/Guide.css';
import { Link } from 'react-router-dom';

const MBTIGuide = () => {
  return (
    <div className="guide-page">
      <div className="guide-container">
        <h1>MBTI의 이해</h1>

        <section>
          <h2>MBTI의 역사와 발전</h2>
          <p>MBTI(Myers-Briggs Type Indicator)는 스위스의 정신분석학자 카를 융(Carl Jung)의 심리유형론을 기반으로, 캐서린 브릭스(Katherine Briggs)와 이사벨 마이어스(Isabel Myers)가 개발한 성격유형 지표입니다.</p>
          <p>1940년대에 개발이 시작되어 1960년대부터 본격적으로 사용되기 시작했으며, 현재는 전 세계적으로 가장 널리 활용되는 성격유형 검사 도구 중 하나로 자리잡았습니다. 특히 교육, 상담, 기업 등 다양한 분야에서 활발하게 활용되고 있습니다.</p>
        </section>

        <section>
          <h2>4가지 선호 경향의 이해</h2>
          <ul>
            <li>에너지 방향 (외향 E - 내향 I)
              <p>- 외향(Extraversion): 외부 세계와의 상호작용에서 에너지를 얻음</p>
              <p>- 내향(Introversion): 내면의 세계에서 에너지를 얻음</p>
              <p>- 주요 차이: 사회적 상호작용에 대한 선호도와 에너지 충전 방식</p>
            </li>
            <li>인식 기능 (감각 S - 직관 N)
              <p>- 감각(Sensing): 구체적이고 현실적인 정보를 선호</p>
              <p>- 직관(iNtuition): 추상적이고 이론적인 정보를 선호</p>
              <p>- 주요 차이: 정보 수집과 경험 해석 방식</p>
            </li>
            <li>판단 기능 (사고 T - 감정 F)
              <p>- 사고(Thinking): 논리와 객관성을 기반으로 결정</p>
              <p>- 감정(Feeling): 가치와 조화를 기반으로 결정</p>
              <p>- 주요 차이: 의사결정과 문제해결 접근 방식</p>
            </li>
            <li>생활 양식 (판단 J - 인식 P)
              <p>- 판단(Judging): 계획적이고 체계적인 생활 선호</p>
              <p>- 인식(Perceiving): 유연하고 자유로운 생활 선호</p>
              <p>- 주요 차이: 일상생활과 업무 처리 스타일</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>16가지 성격유형의 특징</h2>
          <ul>
            <li>분석가형 (NT)
              <p>- INTJ: 용의주도한 전략가</p>
              <p>- INTP: 논리적인 사색가</p>
              <p>- ENTJ: 대담한 통솔자</p>
              <p>- ENTP: 논쟁을 즐기는 혁신가</p>
            </li>
            <li>외교관형 (NF)
              <p>- INFJ: 선의의 옹호자</p>
              <p>- INFP: 열정적인 중재자</p>
              <p>- ENFJ: 정의로운 사회운동가</p>
              <p>- ENFP: 재기발랄한 활동가</p>
            </li>
            <li>관리자형 (SJ)
              <p>- ISTJ: 청렴결백한 논리주의자</p>
              <p>- ISFJ: 용감한 수호자</p>
              <p>- ESTJ: 엄격한 관리자</p>
              <p>- ESFJ: 사교적인 외교관</p>
            </li>
            <li>탐험가형 (SP)
              <p>- ISTP: 만능 재주꾼</p>
              <p>- ISFP: 호기심 많은 예술가</p>
              <p>- ESTP: 모험을 즐기는 사업가</p>
              <p>- ESFP: 자유로운 영혼의 연예인</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>MBTI의 실제 활용</h2>
          <p>MBTI는 다양한 영역에서 실용적으로 활용됩니다:</p>
          <ul>
            <li>진로 및 직업 선택
              <p>- 개인의 성격특성과 직무 적합성 파악</p>
              <p>- 효과적인 경력 개발 방향 설정</p>
              <p>- 직업 만족도 향상을 위한 지침</p>
            </li>
            <li>대인관계 개선
              <p>- 의사소통 스타일의 이해와 개선</p>
              <p>- 갈등 해결 방식의 차이 인식</p>
              <p>- 팀워크와 협력 관계 증진</p>
            </li>
            <li>자기 개발
              <p>- 개인의 강점과 약점 파악</p>
              <p>- 스트레스 관리 방법 이해</p>
              <p>- 개인 성장 방향 설정</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>MBTI의 한계와 올바른 활용</h2>
          <p>MBTI는 유용한 도구이지만, 다음과 같은 점들을 고려해야 합니다:</p>
          <ul>
            <li>유의사항
              <p>- 성격유형은 고정된 것이 아닌 선호 경향성을 나타냄</p>
              <p>- 모든 유형은 각자의 가치가 있으며 좋고 나쁨이 없음</p>
              <p>- 검사 결과는 참고사항이며 절대적 기준이 아님</p>
            </li>
            <li>올바른 활용
              <p>- 자기 이해의 도구로 활용</p>
              <p>- 타인과의 차이를 이해하고 존중하는 기회로 활용</p>
              <p>- 개인의 성장과 발전을 위한 참고자료로 활용</p>
            </li>
          </ul>
        </section>

        <section className="related-types">
          <h5>MBTI 유형별 특징 바로가기</h5>
          <div className="type-links">
            <div className="type-group">
              <h6>NT (분석가형)</h6>
              <Link to="/static/mbti/INTJ" className="type-link">INTJ</Link>
              <Link to="/static/mbti/INTP" className="type-link">INTP</Link>
              <Link to="/static/mbti/ENTJ" className="type-link">ENTJ</Link>
              <Link to="/static/mbti/ENTP" className="type-link">ENTP</Link>
            </div>
            <div className="type-group">
              <h6>NF (이상가형)</h6>
              <Link to="/static/mbti/INFJ" className="type-link">INFJ</Link>
              <Link to="/static/mbti/INFP" className="type-link">INFP</Link>
              <Link to="/static/mbti/ENFJ" className="type-link">ENFJ</Link>
              <Link to="/static/mbti/ENFP" className="type-link">ENFP</Link>
            </div>
            <div className="type-group">
              <h6>SJ (관리자형)</h6>
              <Link to="/static/mbti/ISTJ" className="type-link">ISTJ</Link>
              <Link to="/static/mbti/ISFJ" className="type-link">ISFJ</Link>
              <Link to="/static/mbti/ESTJ" className="type-link">ESTJ</Link>
              <Link to="/static/mbti/ESFJ" className="type-link">ESFJ</Link>
            </div>
            <div className="type-group">
              <h6>SP (탐험가형)</h6>
              <Link to="/static/mbti/ISTP" className="type-link">ISTP</Link>
              <Link to="/static/mbti/ISFP" className="type-link">ISFP</Link>
              <Link to="/static/mbti/ESTP" className="type-link">ESTP</Link>
              <Link to="/static/mbti/ESFP" className="type-link">ESFP</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MBTIGuide; 