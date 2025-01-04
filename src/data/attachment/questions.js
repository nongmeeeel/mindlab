export const attachmentQuestions = [
  {
    id: 1,
    scenario: "친밀한 관계에서 상대방이 당신에게 더 많은 관심을 보이지 않을 때, 당신은...",
    responses: [
      {
        text: "불안해지고 상대방의 마음이 변한 것은 아닌지 걱정한다",
        selfImage: "negative",    // 불안형
        othersImage: "positive"
      },
      {
        text: "관계 자체에 대한 회의감이 들고 혼란스러워진다",
        selfImage: "negative",    // 혼란형
        othersImage: "negative"
      },
      {
        text: "크게 신경 쓰지 않고 나의 일상을 유지한다",
        selfImage: "positive",    // 안정형
        othersImage: "positive"
      },
      {
        text: "애초에 깊은 관계를 맺지 않는 것이 편하다고 생각한다",
        selfImage: "positive",    // 회피형
        othersImage: "negative"
      }
    ]
  },
  {
    id: 2,
    scenario: "새로운 관계를 시작할 때 당신은...",
    responses: [
      {
        text: "깊은 관계로 발전하는 것을 경계하고 거리를 둔다",
        selfImage: "positive",    // 회피형
        othersImage: "negative"
      },
      {
        text: "자연스럽게 발전하는 대로 두며 편안함을 느낀다",
        selfImage: "positive",    // 안정형
        othersImage: "positive"
      },
      {
        text: "관계에 대한 기대와 두려움이 동시에 존재한다",
        selfImage: "negative",    // 혼란형
        othersImage: "negative"
      },
      {
        text: "상대방이 나를 어떻게 생각할지 많이 신경 쓰인다",
        selfImage: "negative",    // 불안형
        othersImage: "positive"
      }
    ]
  },
  {
    id: 3,
    scenario: "중요한 관계에서 갈등이 생겼을 때, 당신은...",
    responses: [
      {
        text: "감정적 소모를 피하기 위해 거리를 둔다",
        selfImage: "positive",    // 회피형
        othersImage: "negative"
      },
      {
        text: "관계가 깨질까 봐 불안해하며 최대한 맞춰준다",
        selfImage: "negative",    // 불안형
        othersImage: "positive"
      },
      {
        text: "관계를 단절하고 싶으면서도 미련이 남는다",
        selfImage: "negative",    // 혼란형
        othersImage: "negative"
      },
      {
        text: "대화를 통해 서로의 입장을 이해하려 노력한다",
        selfImage: "positive",    // 안정형
        othersImage: "positive"
      }
    ]
  },
  {
    id: 4,
    scenario: "친밀한 관계에서 상대방이 바쁘다며 연락이 뜸해졌을 때, 당신은...",
    responses: [
      {
        text: "관계 자체에 대한 의심이 들고 혼란스러워진다",
        selfImage: "negative",    // 혼란형
        othersImage: "negative"
      },
      {
        text: "먼저 연락하지 않고 나도 거리를 둔다",
        selfImage: "positive",    // 회피형
        othersImage: "negative"
      },
      {
        text: "상대방의 상황을 이해하고 기다릴 수 있다",
        selfImage: "positive",    // 안정형
        othersImage: "positive"
      },
      {
        text: "불안해하며 계속 연락하고 싶은 충동을 느낀다",
        selfImage: "negative",    // 불안형
        othersImage: "positive"
      }
    ]
  },
  {
    id: 5,
    scenario: "상대방이 나의 감정을 이해하지 못했을 때, 당신은...",
    responses: [
      {
        text: "감정 표현 자체를 포기하고 내면으로 숨긴다",
        selfImage: "positive",    // 회피형
        othersImage: "negative"
      },
      {
        text: "차분히 내 감정을 설명하고 대화를 시도한다",
        selfImage: "positive",    // 안정형
        othersImage: "positive"
      },
      {
        text: "이해받지 못할 것이라 체념하고 관계를 포기한다",
        selfImage: "negative",    // 혼란형
        othersImage: "negative"
      },
      {
        text: "크게 상처받고 인정받지 못한다고 느낀다",
        selfImage: "negative",    // 불안형
        othersImage: "positive"
      }
    ]
  },
  {
    id: 6,
    scenario: "중요한 일이 있을 때 도움이 필요한 상황이라면, 당신은...",
    responses: [
      {
        text: "도움을 받고 싶지만 어떻게 해야 할지 모르겠다",
        selfImage: "negative",    // 혼란형
        othersImage: "negative"
      },
      {
        text: "도움을 요청하면서도 거절당할까 불안하다",
        selfImage: "negative",    // 불안형
        othersImage: "positive"
      },
      {
        text: "혼자 해결하는 것을 선호하고 의지하지 않는다",
        selfImage: "positive",    // 회피형
        othersImage: "negative"
      },
      {
        text: "필요할 때 적절히 도움을 요청할 수 있다",
        selfImage: "positive",    // 안정형
        othersImage: "positive"
      }
    ]
  },
  {
    id: 7,
    scenario: "친밀한 관계에서 상대방이 나의 약점을 알게 되었을 때, 당신은...",
    responses: [
      {
        text: "더 이상 가까워지지 않으려고 거리를 둔다",
        selfImage: "positive",    // 회피형
        othersImage: "negative"
      },
      {
        text: "있는 그대로의 나를 받아들여줄 것이라 믿는다",
        selfImage: "positive",    // 안정형
        othersImage: "positive"
      },
      {
        text: "실망하고 떠날까봐 불안하고 초조하다",
        selfImage: "negative",    // 불안형
        othersImage: "positive"
      },
      {
        text: "관계를 지속해야 할지 고민하고 혼란스러워한다",
        selfImage: "negative",    // 혼란형
        othersImage: "negative"
      }
    ]
  },
  {
    id: 8,
    scenario: "상대방과 의견 차이가 있을 때, 당신은...",
    responses: [
      {
        text: "갈등을 피하기 위해 내 의견을 숨기고 맞춘다",
        selfImage: "negative",    // 불안형
        othersImage: "positive"
      },
      {
        text: "더 이상의 논쟁을 피하고 대화를 중단한다",
        selfImage: "positive",    // 회피형
        othersImage: "negative"
      },
      {
        text: "관계가 틀어질까 불안하면서도 화가 난다",
        selfImage: "negative",    // 혼란형
        othersImage: "negative"
      },
      {
        text: "서로의 차이를 인정하고 타협점을 찾으려 한다",
        selfImage: "positive",    // 안정형
        othersImage: "positive"
      }
    ]
  },
  {
    id: 9,
    scenario: "새로운 환경에서 사람들과 교류해야 할 때, 당신은...",
    responses: [
      {
        text: "사람들과의 관계에 대해 불안하고 긴장된다",
        selfImage: "negative",    // 혼란형
        othersImage: "negative"
      },
      {
        text: "잘 보이고 싶은 마음에 지나치게 신경 쓴다",
        selfImage: "negative",    // 불안형
        othersImage: "positive"
      },
      {
        text: "필요한 만큼만 교류하고 거리를 유지한다",
        selfImage: "positive",    // 회피형
        othersImage: "negative"
      },
      {
        text: "자연스럽게 사람들과 관계를 맺어간다",
        selfImage: "positive",    // 안정형
        othersImage: "positive"
      }
    ]
  },
  {
    id: 10,
    scenario: "친밀한 관계에서 상대방이 나의 요구를 거절했을 때, 당신은...",
    responses: [
      {
        text: "거절당한 것에 대해 크게 상처받고 우울해진다",
        selfImage: "negative",    // 불안형
        othersImage: "positive"
      },
      {
        text: "관계 자체에 대한 회의감이 들고 멀어진다",
        selfImage: "negative",    // 혼란형
        othersImage: "negative"
      },
      {
        text: "앞으로는 요구하지 않고 혼자 해결하려 한다",
        selfImage: "positive",    // 회피형
        othersImage: "negative"
      },
      {
        text: "상대방의 상황을 이해하고 수용할 수 있다",
        selfImage: "positive",    // 안정형
        othersImage: "positive"
      }
    ]
  },
  {
    id: 11,
    scenario: "친밀한 관계에서 상대방이 나의 이야기에 공감하지 못할 때, 당신은...",
    responses: [
      {
        text: "상대방의 입장에서 이해하려 노력하며 다시 설명한다",
        selfImage: "positive",    // 안정형
        othersImage: "positive"
      },
      {
        text: "더 이상 속마음을 털어놓지 않기로 한다",
        selfImage: "positive",    // 회피형
        othersImage: "negative"
      },
      {
        text: "이해받지 못한다는 생각에 우울해진다",
        selfImage: "negative",    // 불안형
        othersImage: "positive"
      },
      {
        text: "관계의 진정성에 대해 의심하게 된다",
        selfImage: "negative",    // 혼란형
        othersImage: "negative"
      }
    ]
  },
  {
    id: 12,
    scenario: "장기간 유지해온 관계가 소원해질 때, 당신은...",
    responses: [
      {
        text: "관계를 회복하기 위해 대화를 시도한다",
        selfImage: "positive",    // 안정형
        othersImage: "positive"
      },
      {
        text: "미리 관계를 정리하고 마음의 준비를 한다",
        selfImage: "positive",    // 회피형
        othersImage: "negative"
      },
      {
        text: "상대방의 작은 반응에도 과민하게 반응한다",
        selfImage: "negative",    // 불안형
        othersImage: "positive"
      },
      {
        text: "관계를 정리해야 할지 회복해야 할지 혼란스럽다",
        selfImage: "negative",    // 혼란형
        othersImage: "negative"
      }
    ]
  }
]; 