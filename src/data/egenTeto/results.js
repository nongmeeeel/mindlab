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
    description: "ESTP는 활동적이고 현실적인 성격으로, 새로운 경험과 모험을 즐깁니다. 현재의 상황에 빠르게 적응하며, 실질적인 결과를 얻기 위해 행동으로 옮깁니다. 사람들과 잘 어울리며, 설득력이 뛰어나 비즈니스나 협상에서 강점을 발휘합니다. 그러나 때로는 충동적으로 행동하거나 장기적인 계획을 무시하는 경향이 있을 수 있습니다.",
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
    description: "ENTP는 아이디어가 풍부하고 창의적인 사고를 지닌 유형으로, 새로운 가능성을 탐구하는 데 열정을 보입니다. 논리와 설득력이 뛰어나며, 종종 도전적이고 토론을 즐깁니다. 덕분에 남들에게 매력적인 사람으로 보이기도 합니다. 새로운 프로젝트를 시작하는 데는 능숙하지만, 지속적으로 유지하는 데에는 약점을 보일 수 있습니다.",
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
    description: "ESTJ는 조직적이고 실용적이며, 전통과 규칙을 중시합니다. 리더십 능력이 뛰어나며, 체계적이고 효율적인 방식으로 목표를 달성하려고 합니다. 결정을 내릴 때는 논리와 사실을 바탕으로 하며, 다른 사람들에게 신뢰받는 관리자 역할을 잘 수행합니다. 그러나 융통성이 부족하거나 지나치게 권위적으로 보일 수 있습니다.",
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
    description: "ENTJ는 대담하고 목표 지향적인 리더 유형으로, 문제 해결과 조직화에 뛰어납니다. 효율성과 결과를 중시하며, 큰 비전을 가지고 이를 실현하기 위해 노력합니다. 논리적이고 분석적인 사고를 바탕으로 결정을 내리며, 리더십과 추진력이 강점입니다. 그러나 때로는 지나치게 경쟁적이거나 감정적으로 냉정하게 보일 수 있습니다.",
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
    description: "ESFP는 활기차고 외향적이며, 사람들과의 교류를 통해 에너지를 얻습니다. 즉흥적이고 즐거운 경험을 선호하며, 주변 사람들을 행복하게 만드는 재능을 가졌습니다. 실질적인 문제를 해결하는 데 능숙하며, 타인의 감정을 잘 이해합니다. 다만, 때로는 감정에 휩싸이거나 장기적인 계획을 세우는 데 어려움을 겪을 수 있습니다.",
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
    description: "ENFP는 창의적이고 열정적이며, 자유로운 영혼을 가진 유형입니다. 사람들과의 관계를 중시하며, 다양한 아이디어를 탐구하고 새로운 가능성을 찾는 것을 좋아합니다. 높은 공감 능력을 가지고 있으며, 다른 사람을 격려하는 데 능숙합니다. 그러나 때로는 산만하거나 계획을 실행하는 데 어려움을 겪을 수 있습니다.",
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
    description: "ESFJ는 타인을 돌보고 조화를 유지하는 것을 중시합니다. 사회적이고 외향적이며, 친절한 성격으로 주변 사람들을 잘 배려합니다. 전통과 관계를 중요하게 생각하며, 종종 사람들의 기대에 부응하려는 경향이 있습니다. 그러나 때로는 타인의 인정에 과도하게 의존하거나 지나치게 감정적으로 반응할 수 있습니다.",
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
    description: "ENFJ는 따뜻하고 카리스마 있는 리더로, 타인의 잠재력을 발견하고 격려하는 데 뛰어납니다. 강한 공감 능력을 가지고 있으며, 사회적 관계를 중요시합니다. 사람들과의 상호작용을 통해 에너지를 얻으며, 집단의 조화를 위해 노력합니다. 다만, 자신의 감정을 소홀히 하거나 지나치게 타인의 의견에 민감해질 수 있습니다.",
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
    description: "ISTP는 문제 해결 능력이 뛰어나고 실용적인 접근 방식을 선호합니다. 분석적이고 논리적이며, 도구나 시스템을 다루는 데 능숙합니다. 자율성과 자유를 중시하며, 새로운 도전을 즐기는 경향이 있습니다. 감정보다는 사실과 데이터에 근거한 판단을 선호하며, 일상적인 규칙이나 제약을 싫어합니다. 다만, 관계에서 감정을 표현하는 데 서툴 수 있습니다.",
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
    description: "ISFP는 조용하면서도 감각적이며, 독창성과 미적 감각이 뛰어납니다. 현재를 즐기며 타인을 존중하고 조화를 추구하는 성격입니다. 강한 공감 능력과 개성을 가지고 있으며, 자신의 가치를 소중히 여깁니다. 그러나 갈등을 피하려는 성향이 있어 자신의 감정을 솔직히 표현하는 데 어려움을 겪을 수 있습니다. 즉흥적이고 자유로운 삶을 선호하며, 규칙보다는 경험을 중시합니다.",
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
    description: "INFP는 이상적이고 감성적이며, 타인의 고통에 민감하게 반응합니다. 자신의 내적 가치관에 따라 행동하며, 창의적이고 깊은 사고를 합니다. 세상에 긍정적인 변화를 만들고자 하며, 종종 예술이나 문학에 강한 관심을 보입니다. 그러나 이상에 너무 집중하면 현실적인 문제를 간과할 수 있습니다. 내향적이지만 타인과의 깊은 연결을 추구하며, 공감 능력이 뛰어납니다.",
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
    description: "ISFJ는 따뜻하고 사려 깊으며, 타인을 돕고자 하는 욕구가 강한 유형입니다. 책임감이 강하며, 세부 사항에 주의를 기울이고 조직적입니다. 주로 조화로운 환경을 만들고 유지하는 데 능숙하며, 전통과 관계를 소중히 여깁니다. 그러나 갈등을 피하려는 경향이 있어 자신의 감정을 억누르기도 합니다. 친절하고 헌신적인 성격으로 인해 주변 사람들에게 신뢰를 얻는 경우가 많습니다.",
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
    description: "INFJ는 직관적이며 이상을 추구하는 유형으로, 깊은 내면의 통찰력과 공감 능력을 가집니다. 종종 큰 비전을 세우고 이를 실현하기 위해 노력하며, 타인의 감정과 필요를 잘 이해합니다. 창의적이고 신비로운 면모를 가지고 있으며, 자신의 가치를 지키고 세상에 긍정적인 영향을 미치고자 합니다. 그러나 지나치게 이상에 집중하면 현실적인 문제를 간과하거나 감정적으로 소진될 수 있습니다.",
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
    description: "INTJ는 계획적이고 독립적이며, 전략적으로 목표를 달성하려는 성향이 강합니다. 이 유형은 복잡한 문제를 체계적으로 분석하고 해결하는 데 능숙하며, 큰 그림을 보는 데 뛰어난 능력을 발휘합니다. 효율성과 혁신을 중요하게 여기며, 종종 비전을 가지고 행동합니다. 그러나 감정보다는 논리에 치중하기 때문에 타인과의 관계에서 차갑게 보일 수 있습니다.",
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
    description: "INTP는 호기심이 많고 분석적이며, 독창적인 아이디어를 탐구하는 것을 즐깁니다. 복잡한 문제를 해결하고 새로운 개념을 이해하는 데 뛰어난 능력을 가집니다. 논리와 이성을 중시하며, 종종 이론과 원칙을 정립하는 데 열정을 보입니다. 감정보다는 논리를 우선시하며, 대인 관계에서 소통이 단조롭게 느껴질 수 있습니다.",
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
    description: "ISTJ는 책임감이 강하고 조직적이며, 규칙과 절차를 중시합니다. 현실적이고 실용적인 사고를 통해 문제를 해결하며, 신뢰받는 관리자로서의 자질이 돋보입니다. 계획을 세우고 이를 체계적으로 실행하는 것을 좋아하며, 안정성과 전통을 중요하게 생각합니다. 감정보다는 사실과 논리에 기반한 결정을 선호하며, 종종 조용하고 신중한 태도를 보입니다. 하지만 변화나 새로운 방식에 적응하는 데 시간이 걸릴 수 있습니다.",
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