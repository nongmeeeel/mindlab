import secureImg from '../../assets/images/result/attachment/Secure.jpg';
import anxiousImg from '../../assets/images/result/attachment/Anxious.jpg';
import avoidantImg from '../../assets/images/result/attachment/Avoidant.jpg';
import disorganizedImg from '../../assets/images/result/attachment/Disorganized.jpg';

export const attachmentDescriptions = {
  secure: {
    title: "안정형 애착",
    description: "건강하고 안정적인 관계를 형성할 수 있는 유형",
    image: secureImg,
    mainDescription: "당신은 자신과 타인을 신뢰하며, 건강한 관계를 맺을 수 있는 안정형 애착 유형입니다. 친밀함과 독립성의 균형을 잘 유지하며, 관계에서 발생하는 갈등을 건설적으로 해결할 수 있습니다.",
    traits: [
      "높은 자존감과 타인에 대한 신뢰",
      "친밀감과 독립성의 균형",
      "갈등 상황에서 건설적인 대처",
      "정서적 안정성"
    ],
    relationships: "안정형 애착은 가장 건강한 애착 유형으로, 타인과의 관계에서 안정적이고 신뢰로운 관계를 형성할 수 있습니다."
  },
  anxious: {
    title: "불안형 애착",
    description: "관계에서 과도한 불안과 집착을 경험하는 유형",
    image: anxiousImg,
    mainDescription: "당신은 관계에 대한 깊은 갈망과 동시에 불안을 느끼는 불안형 애착 유형입니다. 타인과의 관계에서 더 많은 확신과 안정감을 원하며, 거절이나 이별에 대한 두려움이 큽니다.",
    traits: [
      "관계에 대한 강한 몰입",
      "버림받는 것에 대한 두려움",
      "상대방의 반응에 민감",
      "자기가치감의 변동"
    ],
    relationships: "불안형 애착은 관계에서 더 많은 확신과 안정감을 필요로 하며, 이를 인식하고 개선하려 노력하면 더 건강한 관계를 만들 수 있습니다."
  },
  avoidant: {
    title: "회피형 애착",
    description: "친밀한 관계 형성을 어려워하고 거리를 두는 유형",
    image: avoidantImg,
    mainDescription: "당신은 독립성을 중요시하며 깊은 관계 형성을 어려워하는 회피형 애착 유형입니다. 자신의 감정과 필요를 표현하는 것을 어려워하며, 친밀한 관계에서 불편함을 느낄 수 있습니다.",
    traits: [
      "정서적 거리두기 선호",
      "독립성과 자율성 중시",
      "친밀감에 대한 불편함",
      "자기의존적 성향"
    ],
    relationships: "회피형 애착은 점진적으로 타인과의 친밀감을 늘려가며, 안전한 관계에서부터 시작하여 신뢰를 쌓아갈 수 있습니다."
  },
  disorganized: {
    title: "혼란형 애착",
    description: "관계에서 일관성 없는 패턴을 보이는 유형",
    image: disorganizedImg,
    mainDescription: "당신은 관계에서 양가적인 감정을 경험하는 혼란형 애착 유형입니다. 친밀함을 원하면서도 두려워하는 복잡한 감정을 가지고 있으며, 관계 패턴이 일관적이지 않을 수 있습니다.",
    traits: [
      "관계에 대한 양가적 감정",
      "예측하기 어려운 대인관계 패턴",
      "신뢰 형성의 어려움",
      "감정 조절의 불안정성"
    ],
    relationships: "혼란형 애착은 전문가의 도움을 받아 자신의 패턴을 이해하고, 점진적으로 안정적인 관계를 형성해나갈 수 있습니다."
  }
}; 