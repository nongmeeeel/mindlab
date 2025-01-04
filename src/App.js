import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// Test 페이지들
import MBTITest from './pages/mbti/MBTITest';
import EnneagramTest from './pages/enneagram/EnneagramTest';
import AttachmentTest from './pages/attachment/AttachmentTest';

// Result 페이지들
import MBTIResult from './pages/mbti/MBTIResult';
import EnneagramResult from './pages/enneagram/EnneagramResult';
import AttachmentResult from './pages/attachment/AttachmentResult';

// DetailedReport 대신 직접 Detail 컴포넌트 사용
import MBTIDetail from './pages/mbti/MBTIDetail';
import EnneagramDetail from './pages/enneagram/EnneagramDetail';
import AttachmentDetail from './pages/attachment/AttachmentDetail';

import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* 검사 페이지 라우트 */}
      <Route path="/test/mbti" element={<MBTITest />} />
      <Route path="/test/enneagram" element={<EnneagramTest />} />
      <Route path="/test/attachment" element={<AttachmentTest />} />
      
      {/* 결과 페이지 라우트 */}
      <Route path="/result/mbti" element={<MBTIResult />} />
      <Route path="/result/enneagram" element={<EnneagramResult />} />
      <Route path="/result/attachment" element={<AttachmentResult />} />
      
      {/* Detail 페이지 라우트 추가 */}
      <Route path="/detail/mbti" element={<MBTIDetail />} />
      <Route path="/detail/enneagram" element={<EnneagramDetail />} />
      <Route path="/detail/attachment" element={<AttachmentDetail />} />
    </Routes>
  );
}

export default App; 