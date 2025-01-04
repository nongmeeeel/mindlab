export const enneagramQuestions = [
  // 1번째 세트 (1,4,7번 유형)
  {
    id: 1,
    text: "나는 모든 일을 올바르게 하려고 노력한다.",
    impacts: [
      { type: 1, weight: 1.0 },  // 완요 영향
      { type: 3, weight: 0.3 },  // 첫번째 부가 영향
      { type: 5, weight: 0.2 }   // 두번째 부가 영향
    ]
  },
  {
    id: 2,
    text: "나는 나만의 독특한 개성을 표현하고 싶어한다.",
    impacts: [
      { type: 4, weight: 1.0 },  // 주요 영향
      { type: 7, weight: 0.3 },  // 첫번째 부가 영향
      { type: 3, weight: 0.2 }   // 두번째 부가 영향
    ]
  },
  {
    id: 3,
    text: "나는 새로운 경험과 모험을 추구한다.",
    impacts: [
      { type: 7, weight: 1.0 },  // 주요 영향
      { type: 4, weight: 0.3 },  // 첫번째 부가 영향
      { type: 8, weight: 0.2 }   // 두번째 부가 영향
    ]
  },

  // 2번째 세트 (2,5,8번 유형)
  {
    id: 4,
    text: "나는 다른 사람들의 필요를 잘 알아차린다.",
    impacts: [
      { type: 2, weight: 1.0 },  // 타인 중심
      { type: 9, weight: 0.4 },  // 조화 추구
      { type: 6, weight: 0.3 }   // 관계 중시
    ]
  },
  {
    id: 5,
    text: "나는 깊이 있는 지식과 이해를 추구한다.",
    impacts: [
      { type: 5, weight: 1.0 },  // 지적 추구
      { type: 1, weight: 0.4 },  // 완벽한 이해 추구
      { type: 4, weight: 0.3 }   // 깊이 있는 탐구
    ]
  },
  {
    id: 6,
    text: "나는 상황을 통제하고 주도하려는 경향이 있다.",
    impacts: [
      { type: 8, weight: 1.0 },  // 통제력 추구
      { type: 1, weight: 0.4 },  // 질서 추구
      { type: 3, weight: 0.3 }   // 주도적 성향
    ]
  },

  // 3번째 세트 (3,6,9번 유형)
  {
    id: 7,
    text: "나는 목표를 달성하기 위해 끊임없이 노력한다.",
    impacts: [
      { type: 3, weight: 1.0 },  // 성취 지향
      { type: 1, weight: 0.4 },  // 완벽 추구
      { type: 8, weight: 0.3 }   // 목표 지향
    ]
  },
  {
    id: 8,
    text: "나는 최악의 상황에 대비하려고 한다.",
    impacts: [
      { type: 6, weight: 1.0 },  // 안전 추구
      { type: 1, weight: 0.4 },  // 준비성 중시
      { type: 5, weight: 0.3 }   // 분석적 대비
    ]
  },
  {
    id: 9,
    text: "나는 평화로운 관계를 유지하려고 노력한다.",
    impacts: [
      { type: 9, weight: 1.0 },  // 평화 추구
      { type: 2, weight: 0.4 },  // 관계 중시
      { type: 6, weight: 0.3 }   // 안정 추구
    ]
  },

  // 4번째 세트 (1,4,7번 유형)
  {
    id: 10,
    text: "나는 실수하는 것을 매우 두려워한다.",
    impacts: [
      { type: 1, weight: 1.0 },  // 완벽주의
      { type: 6, weight: 0.4 },  // 안전 추구
      { type: 3, weight: 0.3 }   // 성과 중시
    ]
  },
  // 4번째 세트 계속 (1,4,7번 유형)
  {
    id: 11,
    text: "나는 깊은 감정과 의미를 추구한다.",
    impacts: [
      { type: 4, weight: 1.0 },  // 주요 영향
      { type: 5, weight: 0.3 },  // 첫번째 부가 영향
      { type: 9, weight: 0.2 }   // 두번째 부가 영향
    ]
  },
  {
    id: 12,
    text: "나는 즐거운 가능성을 상상하는 것을 좋아한다.",
    impacts: [
      { type: 7, weight: 1.0 },  // 주요 영향
      { type: 4, weight: 0.3 },  // 첫번째 부가 영향
      { type: 9, weight: 0.2 }   // 두번째 부가 영향
    ]
  },

  // 5번째 세트 (2,5,8번 유형)
  {
    id: 13,
    text: "나는 다른 사람들에게 도움이 되고 싶어한다.",
    impacts: [
      { type: 2, weight: 1.0 },  // 주요 영향
      { type: 6, weight: 0.3 },  // 첫번째 부가 영향
      { type: 9, weight: 0.2 }   // 두번째 부가 영향
    ]
  },
  {
    id: 14,
    text: "나는 혼자만의 시간과 공간이 필요하다.",
    impacts: [
      { type: 5, weight: 1.0 },  // 독립성
      { type: 4, weight: 0.4 },  // 자아 성찰
      { type: 9, weight: 0.3 }   // 평화 추구
    ]
  },
  {
    id: 15,
    text: "나는 약자를 보호하고 정의를 추구한다.",
    impacts: [
      { type: 8, weight: 1.0 },  // 정의감
      { type: 2, weight: 0.4 },  // 보호 본능
      { type: 1, weight: 0.3 }   // 도덕성
    ]
  },

  // 6번째 세트 (3,6,9번 유형)
  {
    id: 16,
    text: "나는 다른 사람들에게 능력 있는 사람으로 보이고 싶다.",
    impacts: [
      { type: 3, weight: 1.0 },  // 성공 지향
      { type: 2, weight: 0.4 },  // 인정 추구
      { type: 7, weight: 0.3 }   // 자신감
    ]
  },
  {
    id: 17,
    text: "나는 신뢰할 수 있는 사람들과 함께 있을 때 안정감을 느낀다.",
    impacts: [
      { type: 6, weight: 1.0 },  // 안전 추구
      { type: 9, weight: 0.4 },  // 안정 추구
      { type: 2, weight: 0.3 }   // 관계 중시
    ]
  },
  {
    id: 18,
    text: "나는 다른 사람들의 의견을 잘 수용하는 편이다.",
    impacts: [
      { type: 9, weight: 1.0 },  // 수용성
      { type: 2, weight: 0.4 },  // 조화 추구
      { type: 5, weight: 0.2 }   // 이해 추구
    ]
  },

  // 7번째 세트 (1,4,7번 유형)
  {
    id: 19,
    text: "나는 도덕적 기준과 원칙을 중요하게 여긴다.",
    impacts: [
      { type: 1, weight: 1.0 },  // 원칙주의
      { type: 6, weight: 0.4 },  // 책임감
      { type: 8, weight: 0.2 }   // 정의감
    ]
  },
  {
    id: 20,
    text: "나는 내면의 감정을 예술적으로 표현하고 싶어한다.",
    impacts: [
      { type: 4, weight: 1.0 },  // 예술성
      { type: 3, weight: 0.3 },  // 표현 욕구
      { type: 5, weight: 0.2 }   // 내면 탐구
    ]
  },
  {
    id: 21,
    text: "나는 자유롭게 선택하고 움직이는 것을 좋아한다.",
    impacts: [
      { type: 7, weight: 1.0 },  // 자유 추구
      { type: 8, weight: 0.4 },  // 독립성
      { type: 3, weight: 0.2 }   // 주도성
    ]
  },

  // 8번째 세트 (2,5,8번 유형)
  {
    id: 22,
    text: "나는 다른 사람들의 감정에 민감하게 반응한다.",
    impacts: [
      { type: 2, weight: 1.0 },  // 감정 이입
      { type: 4, weight: 0.4 },  // 감수성
      { type: 9, weight: 0.3 }   // 조화 추구
    ]
  },
  {
    id: 23,
    text: "나는 세상을 객관적으로 관찰하고 분석하려고 한다.",
    impacts: [
      { type: 5, weight: 1.0 },  // 분석적 성향
      { type: 1, weight: 0.4 },  // 객관성
      { type: 9, weight: 0.2 }   // 중립성
    ]
  },
  {
    id: 24,
    text: "나는 내 영향력을 확장하고 싶어하는 경향이 있다.",
    impacts: [
      { type: 8, weight: 1.0 },  // 영향력 추구
      { type: 3, weight: 0.5 },  // 성공 지향
      { type: 7, weight: 0.2 }   // 도전 정신
    ]
  },

  // 9번째 세트 (3,6,9번 유형)
  {
    id: 25,
    text: "나는 성공적인 이미지를 보여주려고 노력한다.",
    impacts: [
      { type: 3, weight: 1.0 },  // 이미지 중시
      { type: 2, weight: 0.3 },  // 인정 추구
      { type: 4, weight: 0.3 }   // 개성 표현
    ]
  },
  {
    id: 26,
    text: "나는 결정을 내리기 전에 여러 번 생각하고 확인한다.",
    impacts: [
      { type: 6, weight: 1.0 },  // 신중함
      { type: 5, weight: 0.4 },  // 분석적
      { type: 1, weight: 0.3 }   // 완벽 추구
    ]
  },
  {
    id: 27,
    text: "나는 편안하고 안정된 상태를 유지하고 싶어한다.",
    impacts: [
      { type: 9, weight: 1.0 },  // 평화 추구
      { type: 6, weight: 0.4 },  // 안정 추구
      { type: 4, weight: 0.2 }   // 내적 조화
    ]
  },

  /* 추가 문항들 (각 유형당 1문항씩 주석처리)
  // 1번 유형 추가 문항
  {
    id: 28,
    text: "나는 항상 더 나은 방법을 찾으려고 한다.",
    impacts: [
      { type: 1, weight: 1.0 },  // 개선 추구
      { type: 3, weight: 0.4 },  // 성취 지향
      { type: 5, weight: 0.3 }   // 분석적 태도
    ]
  },

  // 2번 유형 추가 문항
  {
    id: 29,
    text: "나는 다른 사람들로부터 사랑받고 싶어한다.",
    impacts: [
      { type: 2, weight: 1.0 },  // 사랑 추구
      { type: 4, weight: 0.4 },  // 감정적 욕구
      { type: 3, weight: 0.3 }   // 인정 욕구
    ]
  },

  // 3번 유형 추가 문항
  {
    id: 30,
    text: "나는 항상 목표를 향해 전진하는 편이다.",
    impacts: [
      { type: 3, weight: 1.0 },  // 목표 지향
      { type: 1, weight: 0.4 },  // 성취 욕구
      { type: 7, weight: 0.3 }   // 진취성
    ]
  },

  // 4번 유형 추가 문항
  {
    id: 31,
    text: "나는 남들과는 다른 특별한 존재라고 생각한다.",
    impacts: [
      { type: 4, weight: 1.0 },  // 독특성
      { type: 3, weight: 0.3 },  // 자기 이미지
      { type: 1, weight: 0.2 }   // 이상 추구
    ]
  },

  // 5번 유형 추가 문항
  {
    id: 32,
    text: "나는 모든 것을 깊이 있게 이해하고 싶어한다.",
    impacts: [
      { type: 5, weight: 1.0 },  // 지식 추구
      { type: 1, weight: 0.4 },  // 완벽한 이해
      { type: 4, weight: 0.2 }   // 깊이 있는 통찰
    ]
  },

  // 6번 유형 추가 문항
  {
    id: 33,
    text: "나는 불확실한 상황을 피하려고 한다.",
    impacts: [
      { type: 6, weight: 1.0 },  // 안전 추구
      { type: 1, weight: 0.4 },  // 확실성 추구
      { type: 9, weight: 0.3 }   // 안정 선호
    ]
  },

  // 7번 유형 추가 문항
  {
    id: 34,
    text: "나는 항상 새로운 것을 시도하고 싶어한다.",
    impacts: [
      { type: 7, weight: 1.0 },  // 새로움 추구
      { type: 3, weight: 0.4 },  // 도전 정신
      { type: 4, weight: 0.3 }   // 독특성 추구
    ]
  },

  // 8번 유형 추가 문항
  {
    id: 35,
    text: "나는 강한 의지로 목표를 달성하려 한다.",
    impacts: [
      { type: 8, weight: 1.0 },  // 의지력
      { type: 3, weight: 0.4 },  // 성취 욕구
      { type: 1, weight: 0.3 }   // 완벽 추구
    ]
  },

  // 9번 유형 추가 문항
  {
    id: 36,
    text: "나는 모든 관점을 이해하고 조화를 이루려고 한다.",
    impacts: [
      { type: 9, weight: 1.0 },  // 포용성
      { type: 5, weight: 0.4 },  // 이해력
      { type: 2, weight: 0.3 }   // 조화 추구
    ]
  }
  */
]; 