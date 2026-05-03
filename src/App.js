import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';

// Test 페이지들
import MBTITest from './pages/mbti/MBTITest';
import EnneagramTest from './pages/enneagram/EnneagramTest';
import AttachmentTest from './pages/attachment/AttachmentTest';
import NewYearWish from './pages/newYear/NewYearWish';

// Result 페이지들
import MBTIResult from './pages/mbti/MBTIResult';
import EnneagramResult from './pages/enneagram/EnneagramResult';
import AttachmentResult from './pages/attachment/AttachmentResult';

// Guide 페이지들 추가
import MBTIGuide from './pages/guide/MBTIGuide';
import EnneagramGuide from './pages/guide/EnneagramGuide';
import AttachmentGuide from './pages/guide/AttachmentGuide';

// DetailedReport 대신 직접 Detail 컴포넌트 사용

import './styles/App.css';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import About from './pages/About';
import Footer from './components/Footer';
import { logPageView } from './utils/analytics';

// StaticResult 컴포넌트들
import StaticMBTIResult from './components/static/StaticMBTIResult';
import StaticEnneagramResult from './components/static/StaticEnneagramResult';
import StaticAttachmentResult from './components/static/StaticAttachmentResult';
import EgenTetoTest from './pages/egenTeto/EgenTetoTest';

function App() {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* 검사 페이지 라우트 */}
        <Route path="/test/mbti" element={<MBTITest />} />
        <Route path="/test/enneagram" element={<EnneagramTest />} />
        <Route path="/test/attachment" element={<AttachmentTest />} />
        <Route path="/test/egenTeto" element={<EgenTetoTest />} />
        <Route path="/test/newYearWish" element={<NewYearWish />} />
        
        {/* 결과 페이지 라우트 */}
        <Route path="/result/mbti" element={<MBTIResult />} />
        <Route path="/result/enneagram" element={<EnneagramResult />} />
        <Route path="/result/attachment" element={<AttachmentResult />} />
        
        {/* 가이드 페이지 라우트 추가 */}
        <Route path="/guide/mbti" element={<MBTIGuide />} />
        <Route path="/guide/enneagram" element={<EnneagramGuide />} />
        <Route path="/guide/attachment" element={<AttachmentGuide />} />
        
        {/* 기타 페이지 라우트 */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />

        {/* MBTI 정적 결과 페이지 라우트 */}
        <Route path="/static/mbti/INTJ" element={<StaticMBTIResult resultType="INTJ" />} />
        <Route path="/static/mbti/INTP" element={<StaticMBTIResult resultType="INTP" />} />
        <Route path="/static/mbti/INFJ" element={<StaticMBTIResult resultType="INFJ" />} />
        <Route path="/static/mbti/INFP" element={<StaticMBTIResult resultType="INFP" />} />
        <Route path="/static/mbti/ISTJ" element={<StaticMBTIResult resultType="ISTJ" />} />
        <Route path="/static/mbti/ISTP" element={<StaticMBTIResult resultType="ISTP" />} />
        <Route path="/static/mbti/ISFJ" element={<StaticMBTIResult resultType="ISFJ" />} />
        <Route path="/static/mbti/ISFP" element={<StaticMBTIResult resultType="ISFP" />} />
        <Route path="/static/mbti/ENTJ" element={<StaticMBTIResult resultType="ENTJ" />} />
        <Route path="/static/mbti/ENTP" element={<StaticMBTIResult resultType="ENTP" />} />
        <Route path="/static/mbti/ENFJ" element={<StaticMBTIResult resultType="ENFJ" />} />
        <Route path="/static/mbti/ENFP" element={<StaticMBTIResult resultType="ENFP" />} />
        <Route path="/static/mbti/ESTJ" element={<StaticMBTIResult resultType="ESTJ" />} />
        <Route path="/static/mbti/ESTP" element={<StaticMBTIResult resultType="ESTP" />} />
        <Route path="/static/mbti/ESFJ" element={<StaticMBTIResult resultType="ESFJ" />} />
        <Route path="/static/mbti/ESFP" element={<StaticMBTIResult resultType="ESFP" />} />

        {/* 에니어그램 정적 결과 페이지 라우트 */}
        <Route path="/static/enneagram/1" element={<StaticEnneagramResult resultType={1} />} />
        <Route path="/static/enneagram/2" element={<StaticEnneagramResult resultType={2} />} />
        <Route path="/static/enneagram/3" element={<StaticEnneagramResult resultType={3} />} />
        <Route path="/static/enneagram/4" element={<StaticEnneagramResult resultType={4} />} />
        <Route path="/static/enneagram/5" element={<StaticEnneagramResult resultType={5} />} />
        <Route path="/static/enneagram/6" element={<StaticEnneagramResult resultType={6} />} />
        <Route path="/static/enneagram/7" element={<StaticEnneagramResult resultType={7} />} />
        <Route path="/static/enneagram/8" element={<StaticEnneagramResult resultType={8} />} />
        <Route path="/static/enneagram/9" element={<StaticEnneagramResult resultType={9} />} />

        {/* 애착유형 정적 결과 페이지 라우트 */}
        <Route path="/static/attachment/secure" element={<StaticAttachmentResult resultType="secure" />} />
        <Route path="/static/attachment/anxious" element={<StaticAttachmentResult resultType="anxious" />} />
        <Route path="/static/attachment/avoidant" element={<StaticAttachmentResult resultType="avoidant" />} />
        <Route path="/static/attachment/disorganized" element={<StaticAttachmentResult resultType="disorganized" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App; 