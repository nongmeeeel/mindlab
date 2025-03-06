import React from 'react';
import '../../styles/Guide.css';
import { Link } from 'react-router-dom';
import AdBanner from '../../components/AdBanner';

const AttachmentGuide = () => {
  return (
    <div className="guide-page">
      <div className="guide-container">
        <h1>애착유형의 이해</h1>

        <section>
          <h2>애착이론의 시작</h2>
          <p>애착이론은 영국의 정신분석학자 존 볼비(John Bowlby)에 의해 발전된 이론으로, 영유아기에 형성된 주 양육자와의 관계가 성인이 된 후의 대인관계에 미치는 영향을 설명합니다. 이후 메리 에인스워스(Mary Ainsworth)의 '낯선 상황 실험'을 통해 더욱 체계화되었으며, 현대 심리학의 핵심 이론 중 하나로 자리잡았습니다.</p>
        </section>

        <AdBanner />

        <section>
          <h2>4가지 애착유형의 특징</h2>
          <ul>
            <li>안정형 애착 (Secure Attachment)
              <p>- 자신과 타인을 신뢰하며, 친밀한 관계를 편안하게 형성</p>
              <p>- 스트레스 상황에서도 안정적인 대처가 가능</p>
              <p>- 건강한 의사소통과 감정 표현이 자유로움</p>
            </li>
            <li>불안형 애착 (Anxious Attachment)
              <p>- 관계에서 과도한 불안과 집착을 보임</p>
              <p>- 상대방의 반응에 매우 민감하게 반응</p>
              <p>- 버림받는 것에 대한 강한 두려움</p>
            </li>
            <li>회피형 애착 (Avoidant Attachment)
              <p>- 친밀한 관계 형성을 어려워하고 거리두기를 선호</p>
              <p>- 감정 표현과 의존을 불편해함</p>
              <p>- 강한 독립성과 자율성을 추구</p>
            </li>
            <li>혼란형 애착 (Disorganized Attachment)
              <p>- 일관성 없는 대인관계 패턴</p>
              <p>- 친밀감과 거리두기 사이에서 혼란을 경험</p>
              <p>- 과거의 트라우마가 현재 관계에 영향</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>애착유형의 형성 과정</h2>
          <p>애착유형은 생후 6개월에서 3세 사이에 주 양육자와의 상호작용을 통해 형성됩니다. 이 시기의 경험은 다음과 같은 요소들에 의해 영향을 받습니다:</p>
          <ul>
            <li>양육자의 반응성과 민감성</li>
            <li>안전 기지로서의 역할 수행</li>
            <li>정서적 지지와 공감의 정도</li>
            <li>일관된 양육 태도의 유지</li>
          </ul>
        </section>

        <section>
          <h2>성인기 애착유형의 영향</h2>
          <p>초기에 형성된 애착유형은 성인기의 다양한 영역에 영향을 미칩니다:</p>
          <ul>
            <li>연인관계
              <p>- 친밀감과 신뢰 형성 방식</p>
              <p>- 갈등 해결 패턴</p>
              <p>- 정서적 친밀도 조절</p>
            </li>
            <li>직장생활
              <p>- 동료와의 협력 방식</p>
              <p>- 리더십 스타일</p>
              <p>- 스트레스 대처 방식</p>
            </li>
            <li>자기 이해
              <p>- 자아존중감 형성</p>
              <p>- 정서 조절 능력</p>
              <p>- 자기 효능감</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>애착유형의 변화 가능성</h2>
          <p>애착유형은 고정된 것이 아니라 새로운 관계 경험과 자기 인식을 통해 변화할 수 있습니다. 다음과 같은 방법들이 도움이 될 수 있습니다:</p>
          <ul>
            <li>전문적인 상담이나 심리치료</li>
            <li>자기 이해와 통찰의 증진</li>
            <li>건강한 관계 경험의 축적</li>
            <li>정서적 자각과 표현 능력의 향상</li>
          </ul>
          <p>자신의 애착유형을 이해하고 개선하려는 노력은 더 건강하고 만족스러운 관계 형성에 도움이 됩니다.</p>
        </section>

        <section className="related-types">
          <h5>애착유형별 특징 바로가기</h5>
          <div className="type-links">
            <div className="type-group">
              <h6>긍정적 모델</h6>
              <Link to="/static/attachment/secure" className="type-link">안정형 (Secure)</Link>
            </div>
            <div className="type-group">
              <h6>양가적 모델</h6>
              <Link to="/static/attachment/anxious" className="type-link">불안형 (Anxious)</Link>
              <Link to="/static/attachment/avoidant" className="type-link">회피형 (Avoidant)</Link>
            </div>
            <div className="type-group">
              <h6>부정적 모델</h6>
              <Link to="/static/attachment/disorganized" className="type-link">혼란형 (Disorganized)</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AttachmentGuide; 