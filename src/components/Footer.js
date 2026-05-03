import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/about">마인드랩 소개</Link>
          <span className="divider">|</span>
          <Link to="/privacy">개인정보처리방침</Link>
          <span className="divider">|</span>
          <Link to="/terms">이용약관</Link>
          <span className="divider">|</span>
          <a href="mailto:yong8master@gmail.com">문의: yong8master@gmail.com</a>
        </div>
        <p className="copyright">© 2025 마인드랩. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 