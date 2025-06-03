import React from 'react';
import { FaHome, FaSignature } from 'react-icons/fa';
import { FaImages } from 'react-icons/fa6';

const Navigation = ({ currentPage }) => {
  return (
    <div className="navbar">
      <a 
        className={currentPage === 'home' ? 'currentPage' : ''} 
        href='/'
      >
        <FaHome className="nav-icon" />
        Home
      </a>
      <a 
        className={currentPage === 'blog' ? 'currentPage' : ''} 
        href="/blog"
      >
        <FaSignature className="nav-icon" />
        Blog
      </a>
      <a 
        className={currentPage === 'pics' ? 'currentPage' : ''} 
        href="/pics"
      >
        <FaImages className="nav-icon" />
        Pics
      </a>
    </div>
  );
};

export default Navigation; 