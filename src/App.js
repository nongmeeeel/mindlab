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
import Footer from './components/Footer';
import { logPageView } from './utils/analytics';

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
      </Routes>
      <Footer />
    </>
  );
}

export default App; 