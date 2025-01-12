import ESTPImg from '../../assets/images/result/mbti/ESTP.jpg';
import ENTPImg from '../../assets/images/result/mbti/ENTP.jpg';
import ESTJImg from '../../assets/images/result/mbti/ESTJ.jpg';
import ENTJImg from '../../assets/images/result/mbti/ENTJ.jpg';
import ESFPImg from '../../assets/images/result/mbti/ESFP.jpg';
import ENFPImg from '../../assets/images/result/mbti/ENFP.jpg';
import ESFJImg from '../../assets/images/result/mbti/ESFJ.jpg';
import ENFJImg from '../../assets/images/result/mbti/ENFJ.jpg';
import ISTPImg from '../../assets/images/result/mbti/ISTP.jpg';
import INTPImg from '../../assets/images/result/mbti/INTP.jpg';
import ISTJImg from '../../assets/images/result/mbti/ISTJ.jpg';
import INTJImg from '../../assets/images/result/mbti/INTJ.jpg';
import ISFPImg from '../../assets/images/result/mbti/ISFP.jpg';
import INFPImg from '../../assets/images/result/mbti/INFP.jpg';
import ISFJImg from '../../assets/images/result/mbti/ISFJ.jpg';
import INFJImg from '../../assets/images/result/mbti/INFJ.jpg';

export const mbtiDescriptions = {
  ESTP: {
    title: "ESTP",
    subtitle: "모험을 즐기는 사업가",
    image: ESTPImg,
    description: "현재에 충실하며 실용적인 문제 해결과 임기응변에 능한 유형입니다. 에너지가 넘치고 활동적이며, 새로운 경험을 추구하는 모험가적 성향을 가지고 있습니다.",
    strengths: [
      "뛰어난 문제 해결 능력",
      "현실적인 판단력",
      "유연한 적응력",
      "순발력과 임기응변"
    ],
    weaknesses: [
      "장기 계획 수립의 어려움",
      "감정적 공감 부족",
      "규칙과 제약 거부감",
      "인내심 부족"
    ],
    matches: {
      romantic: {
        title: "이상적인 연인 궁합",
        types: ["ISFJ", "ISTJ"]
      },
      work: {
        title: "최고의 업무 파트너",
        types: ["ISTP", "ENTJ"]
      }
    }
  },
  ENTP: {
    title: "ENTP",
    subtitle: "논쟁을 즐기는 변론가",
    image: ENTPImg,
    description: "창의적이고 도전적인 혁신가입니다. 새로운 아이디어를 탐구하고 논리적인 토론을 즐기며, 기존의 틀을 깨는 것을 두려워하지 않습니다.",
    strengths: [
      "창의적인 문제 해결",
      "뛰어난 분석력",
      "유연한 사고방식",
      "카리스마 있는 설득력"
    ],
    weaknesses: [
      "일관성 부족",
      "마감일 준수 어려움",
      "논쟁적인 성향",
      "감정적 배려 부족"
    ],
    matches: {
      romantic: {
        title: "이상적인 연인 궁합",
        types: ["INFJ", "INTJ"]
      },
      work: {
        title: "최고의 업무 파트너",
        types: ["INTP", "ENFP"]
      }
    }
  },
  ESTJ: {
    title: "ESTJ",
    subtitle: "엄격한 관리자",
    image: ESTJImg,
    description: "체계적이고 규칙을 중시하는 현실주의자입니다. 명확한 기준과 질서를 바탕으로 목표를 달성하며, 책임감 있게 조직을 이끌어갑니다.",
    strengths: [
      "체계적인 조직력",
      "강한 책임감",
      "현실적인 문제해결",
      "명확한 의사결정"
    ],
    weaknesses: [
      "융통성 부족",
      "감정 표현의 어려움",
      "지나친 완벽주의",
      "변화 수용의 어려움"
    ],
    matches: {
      romantic: {
        title: "이상적인 연인 궁합",
        types: ["ISFP", "ISTP"]
      },
      work: {
        title: "최고의 업무 파트너",
        types: ["ISTJ", "ENFP"]
      }
    }
  },
  ENTJ: {
    title: "ENTJ",
    subtitle: "대담한 통솔자",
    image: ENTJImg,
    description: "카리스마 있는 리더십과 전략적 사고를 가진 유형입니다. 장기적인 비전을 제시하고 효율적으로 목표를 달성하며, 혁신적인 변화를 주도합니다.",
    strengths: [
      "강력한 리더십",
      "전략적 사고",
      "추진력과 결단력",
      "목표 지향적"
    ],
    weaknesses: [
      "감정적 배려 부족",
      "지나친 완벽주의",
      "비인내심",
      "독단적 성향"
    ],
    matches: {
      romantic: {
        title: "이상적인 연인 궁합",
        types: ["INFP", "INTP"]
      },
      work: {
        title: "최고의 업무 파트너",
        types: ["INTJ", "ESTP"]
      }
    }
  },
  ESFP: {
    title: "ESFP",
    subtitle: "자유로운 영혼의 연예인",
    image: ESFPImg,
    description: "밝고 낙천적인 성격으로 현재의 즐거움을 추구하는 유형입니다. 사교적이고 활발하며, 주변 사람들에게 긍정적인 에너지를 전파합니다.",
    strengths: [
      "뛰어난 사교성",
      "긍정적인 에너지",
      "실용적인 문제해결",
      "즉흥적 적응력"
    ],
    weaknesses: [
      "장기계획 부족",
      "집중력 부족",
      "갈등 회피",
      "깊이 있는 분석 어려움"
    ],
    matches: {
      romantic: {
        title: "이상적인 연인 궁합",
        types: ["ISTJ", "ISFJ"]
      },
      work: {
        title: "최고의 업무 파트너",
        types: ["ISFP", "ENFJ"]
      }
    }
  },
  ENFP: {
    title: "ENFP",
    subtitle: "재기발랄한 활동가",
    image: ENFPImg,
    description: "열정적이고 창의적인 자유영혼입니다. 새로운 가능성을 발견하고 사람들과 깊은 관계를 맺으며, 독창적인 아이디어로 세상을 변화시키고자 합니다.",
    strengths: [
      "창의적인 발상",
      "뛰어난 공감능력",
      "열정적인 추진력",
      "유연한 적응력"
    ],
    weaknesses: [
      "일관성 부족",
      "현실감각 부족",
      "감정 기복",
      "체계적 수행 어려움"
    ],
    matches: {
      romantic: {
        title: "이상적인 연인 궁합",
        types: ["INTJ", "INFJ"]
      },
      work: {
        title: "최고의 업무 파트너",
        types: ["INFP", "ENTP"]
      }
    }
  },
  ESFJ: {
    title: "ESFJ",
    subtitle: "사교적인 외교관",
    image: ESFJImg,
    description: "타인을 배려하고 도움을 주는 것을 좋아하는 사교적인 유형입니다. 조화로운 관계를 중시하며, 책임감 있게 공동체에 기여합니다.",
    strengths: [
      "뛰어난 대인관계",
      "실용적인 봉사정신",
      "체계적인 업무처리",
      "신뢰성과 책임감"
    ],
    weaknesses: [
      "과도한 자기희생",
      "비판에 대한 민감성",
      "변화에 대한 두려움",
      "지나친 동조"
    ],
    matches: {
      romantic: {
        title: "이상적인 연인 궁합",
        types: ["ISFP", "ISTP"]
      },
      work: {
        title: "최고의 업무 파트너",
        types: ["ISFJ", "ESTJ"]
      }
    }
  },
  ENFJ: {
    title: "ENFJ",
    subtitle: "정의로운 사회운동가",
    image: ENFJImg,
    description: "카리스마 있는 이상주의자로 타인의 성장을 돕는 것을 좋아합니다. 공동체의 화합을 이끌어내며, 긍정적인 변화를 만들어내는 데 열정적입니다.",
    strengths: [
      "뛰어난 리더십",
      "강한 통찰력",
      "탁월한 의사소통",
      "헌신적인 태도"
    ],
    weaknesses: [
      "과도한 자기희생",
      "비판에 예민함",
      "완벽주의 성향",
      "우유부단함"
    ],
    matches: {
      romantic: {
        title: "이상적인 연인 궁합",
        types: ["INFP", "ISFP"]
      },
      work: {
        title: "최고의 업무 파트너",
        types: ["INFJ", "ENFP"]
      }
    }
  },
  ISTP: {
    title: "ISTP",
    subtitle: "만능 재주꾼",
    image: ISTPImg,
    description: "뛰어난 상황 적응력과 문제해결 능력을 가진 유형입니다. 실용적이고 논리적인 사고로 효율적인 해결책을 찾아내며, 독립적인 성향을 가지고 있습니다.",
    strengths: [
      "뛰어난 적응력",
      "실용적 문제해결",
      "침착한 위기대처",
      "객관적 분석력"
    ],
    weaknesses: [
      "감정표현 부족",
      "장기계획 어려움",
      "관계형성 소극적",
      "즉흥적 결정"
    ],
    matches: {
      romantic: {
        title: "이상적인 연인 궁합",
        types: ["ESFJ", "ESTJ"]
      },
      work: {
        title: "최고의 업무 파트너",
        types: ["ESTP", "ISFJ"]
      }
    }
  },
  ISFP: {
    title: "ISFP",
    subtitle: "호기심 많은 예술가",
    image: ISFPImg,
    description: "예술적 감각과 섬세한 감성을 지닌 유형입니다. 자신만의 가치관을 중요시하며, 현재의 순간을 즐기고 자유로운 영혼을 가지고 있습니다.",
    strengths: [
      "예술적 감각",
      "섬세한 감성",
      "적응력",
      "실용적 창의성"
    ],
    weaknesses: [
      "장기계획 부족",
      "우유부단함",
      "스트레스에 약함",
      "자기주장 부족"
    ],
    matches: {
      romantic: {
        title: "이상적인 연인 궁합",
        types: ["ENFJ", "ESFJ"]
      },
      work: {
        title: "최고의 업무 파트너",
        types: ["ESFP", "ISTJ"]
      }
    }
  },
  INFP: {
    title: "INFP",
    subtitle: "낭만적인 이상주의자",
    image: INFPImg,
    description: "깊은 통찰력과 풍부한 상상력을 가진 유형입니다. 자신만의 가치관을 중요시하며, 인간의 잠재력과 가능성을 믿습니다.",
    strengths: [
      "창의적 사고",
      "깊은 통찰력",
      "강한 공감능력",
      "이상적 가치추구"
    ],
    weaknesses: [
      "현실감각 부족",
      "우유부단함",
      "완벽주의",
      "비판에 예민함"
    ],
    matches: {
      romantic: {
        title: "이상적인 연인 궁합",
        types: ["ENFJ", "ENTJ"]
      },
      work: {
        title: "최고의 업무 파트너",
        types: ["ENFP", "INTP"]
      }
    }
  },
  ISFJ: {
    title: "ISFJ",
    subtitle: "용감한 수호자",
    image: ISFJImg,
    description: "세심하고 헌신적인 성격으로 타인을 배려하는 유형입니다. 책임감이 강하고 전통을 중시하며, 실용적인 방식으로 다른 사람을 돕습니다.",
    strengths: [
      "뛰어난 관찰력",
      "강한 책임감",
      "실용적 봉사정신",
      "세심한 배려"
    ],
    weaknesses: [
      "자기주장 부족",
      "변화 수용 어려움",
      "과도한 자기희생",
      "스트레스에 약함"
    ],
    matches: {
      romantic: {
        title: "이상적인 연인 궁합",
        types: ["ESTP", "ESFP"]
      },
      work: {
        title: "최고의 업무 파트너",
        types: ["ESFJ", "ISTP"]
      }
    }
  },
  INFJ: {
    title: "INFJ",
    subtitle: "선의의 옹호자",
    image: INFJImg,
    description: "이상적인 세상을 추구하며 깊은 통찰력을 가진 유형입니다. 타인의 성장을 돕는 것에 사명감을 느끼며, 창의적인 문제해결 능력을 가지고 있습니다.",
    strengths: [
      "뛰어난 통찰력",
      "창의적 문제해결",
      "깊은 공감능력",
      "강한 직관력"
    ],
    weaknesses: [
      "완벽주의",
      "현실과 이상의 괴리",
      "과도한 자기희생",
      "스트레스에 민감"
    ],
    matches: {
      romantic: {
        title: "이상적인 연인 궁합",
        types: ["ENTP", "ENFP"]
      },
      work: {
        title: "최고의 업무 파트너",
        types: ["ENFJ", "INTP"]
      }
    }
  },
  INTJ: {
    title: "INTJ",
    subtitle: "용의주도한 전략가",
    image: INTJImg,
    description: "전략적 사고와 혁신적인 비전을 가진 유형입니다. 지적 탐구를 즐기며, 복잡한 문제를 해결하는데 탁월한 능력을 보입니다.",
    strengths: [
      "전략적 사고",
      "혁신적 문제해결",
      "높은 통찰력",
      "독립적 판단력"
    ],
    weaknesses: [
      "감정표현 부족",
      "완벽주의",
      "고집이 강함",
      "대인관계 어려움"
    ],
    matches: {
      romantic: {
        title: "이상적인 연인 궁합",
        types: ["ENFP", "ENTP"]
      },
      work: {
        title: "최고의 업무 파트너",
        types: ["ISTJ", "ENTJ"]
      }
    }
  },
  INTP: {
    title: "INTP",
    subtitle: "논리적인 사색가",
    image: INTPImg,
    description: "논리적인 사고와 혁신적인 비전을 가진 유형입니다. 지적 탐구를 즐기며, 복잡한 문제를 해결하는데 탁월한 능력을 보입니다.",
    strengths: [
      "논리적인 사고",
      "혁신적인 문제해결",
      "높은 통찰력",
      "독립적 판단력"
    ],
    weaknesses: [
      "감정표현 부족",
      "완벽주의",
      "고집이 강함",
      "대인관계 어려움"
    ],
    matches: {
      romantic: {
        title: "이상적인 연인 궁합",
        types: ["ENFP", "ENTP"]
      },
      work: {
        title: "최고의 업무 파트너",
        types: ["INTP", "ENFP"]
      }
    }
  },
  ISTJ: {
    title: "ISTJ",
    subtitle: "청렴결백한 논리주의자",
    image: ISTJImg,
    description: "체계적이고 규칙을 중시하는 현실주의자입니다. 명확한 기준과 질서를 바탕으로 목표를 달성하며, 책임감 있게 조직을 이끌어갑니다.",
    strengths: [
      "체계적인 조직력",
      "강한 책임감",
      "현실적인 문제해결",
      "명확한 의사결정"
    ],
    weaknesses: [
      "융통성 부족",
      "감정 표현의 어려움",
      "지나친 완벽주의",
      "변화 수용의 어려움"
    ],
    matches: {
      romantic: {
        title: "이상적인 연인 궁합",
        types: ["ISFP", "ISTP"]
      },
      work: {
        title: "최고의 업무 파트너",
        types: ["ISTJ", "ENFP"]
      }
    }
  }
}; 