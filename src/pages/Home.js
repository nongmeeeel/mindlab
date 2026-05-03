import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaBrain, FaUserCircle, FaHeart, FaBook } from 'react-icons/fa';
import '../styles/Home.css';
import { logEvent } from '../utils/analytics';
import AdBanner from '../components/AdBanner';
// import AdBanner from '../components/AdBanner';

const Home = () => {
  const navigate = useNavigate();

  const handleTestStart = (testType) => {
    logEvent(
      'test_start',  // category
      'click',       // action
      testType       // label
    );
    navigate(`/test/${testType}`);
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="header-section">
          <h1>마인드랩 심리 검사</h1>
        </div>

        <p className="test-notice">
          내가 원하는 모습이 아닌, 실제 내 모습을 생각하며 선택하면 검사의 정확도가 올라갑니다.
        </p>

        <div className="test-buttons">
          <button
            onClick={() => handleTestStart('mbti')} 
            className="test-button mbti"
          >
            <div className="button-icon">
              <FaBrain />
            </div>
            <div className="button-text">
              <h2>MBTI 검사</h2>
              <p>나의 성격 유형 알아보기</p>
            </div>
          </button>

          <button 
            onClick={() => handleTestStart('enneagram')} 
            className="test-button enneagram"
          >
            <div className="button-icon">
              <FaUserCircle />
            </div>
            <div className="button-text">
              <h2>에니어그램 검사</h2>
              <p>나의 심층 내면 알아보기</p>
            </div>
          </button>

          <button 
            onClick={() => handleTestStart('attachment')} 
            className="test-button attachment"
          >
            <div className="button-icon">
              <FaHeart />
            </div>
            <div className="button-text">
              <h2>애착유형 검사</h2>
              <p>나의 연애 스타일 알아보기</p>
            </div>
          </button>

          {/* <button 
            onClick={() => handleTestStart('newYearWish')} 
            className="test-button newyear"
          >
            <div className="button-icon">
              <img 
                src={fortuneColor}
                alt="설날 운세"
                className="fortune-icon"
              />
            </div>
            <div className="button-text">
              <h2>설날 운세</h2>
              <p>2024년 나의 운세 보기</p>
            </div>
          </button> */}
        </div>
        
        <AdBanner adSlot="5402691877" />

        <div className="test-backgrounds">
          <h2>검사 이론 배경</h2>
          <div className="background-links">
            <Link to="/guide/mbti" className="background-item">
              <div className="background-icon">
                <FaBook />
              </div>
              <h3>MBTI 검사의 배경</h3>
              <p>융의 심리유형론을 기반으로 한 MBTI의 이론적 배경과 역사를 알아보세요.</p>
            </Link>

            <Link to="/guide/enneagram" className="background-item">
              <div className="background-icon">
                <FaBook />
              </div>
              <h3>에니어그램 검사의 배경</h3>
              <p>고대 수피즘에서 시작된 에니어그램의 역사와 이론을 살펴보세요.</p>
            </Link>

            <Link to="/guide/attachment" className="background-item">
              <div className="background-icon">
                <FaBook />
              </div>
              <h3>애착유형 검사의 배경</h3>
              <p>존 볼비의 애착이론이 현대 심리학에 미친 영향을 이해해보세요.</p>
            </Link>
          </div>
        </div>

        <div className="service-intro">
          <h2>심리 검사, 어떻게 활용할까요</h2>
          <p>
            요즘은 소개팅 앱에서도 MBTI가 필수 입력 항목이 됐고, 처음 만나는 사람들 사이에서 "무슨 유형이에요?"가 거의 인사처럼 쓰이고 있죠.
            그만큼 자기 자신을 이해하려는 관심이 높아진 건데, 한편으로는 유형 하나로 사람을 단정 짓는 경우도 생기는 것 같아서 조금 아쉽기도 해요.
          </p>
          <p>
            마인드랩은 세 가지 검사를 무료로 제공합니다. MBTI는 성격 유형을, 에니어그램은 내면 동기를, 애착유형은 관계 패턴을 보여줍니다.
            세 가지를 함께 해보시면 자기 자신에 대한 꽤 입체적인 그림이 그려질 거예요.
          </p>
          <div className="intro-cards">
            <div className="intro-card">
              <h3>🧠 MBTI</h3>
              <p>카를 융의 심리유형론을 기반으로 한 16가지 성격 유형 분류. 일상에서 가장 친숙한 성격 검사입니다. 처음 심리 검사를 접하신다면 여기서 시작해보세요.</p>
            </div>
            <div className="intro-card">
              <h3>🔵 에니어그램</h3>
              <p>9가지 유형으로 분류하는 성격 체계. MBTI보다 '왜 그렇게 행동하는가'를 더 깊이 파고드는 편입니다. 자기이해를 진지하게 해보고 싶은 분께 추천해요.</p>
            </div>
            <div className="intro-card">
              <h3>❤️ 애착유형</h3>
              <p>존 볼비의 애착이론을 기반으로 한 관계 패턴 검사. 연애나 대인관계에서 내가 반복하는 행동이 궁금하신 분들에게 특히 도움이 됩니다.</p>
            </div>
          </div>
          <p className="intro-note">
            검사 결과는 참고 자료입니다. '나는 이 유형이니까 이래야 해'가 아니라, '나한테 이런 면이 있구나' 정도로 가볍게 받아들이시는 게 좋습니다.
            더 자세한 내용이 궁금하시면 <Link to="/about" style={{color: '#667eea'}}>마인드랩 소개</Link> 페이지를 확인해보세요.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home; 