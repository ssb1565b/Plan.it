import React from 'react';

export default function Header() {
  return (
    <>
      <header>
        <div className="inner">
          <div className="logo">
            <a href="./index.html">
              <img src="./image/header_logo.svg" alt="" />
            </a>
          </div>
          <div className="menu-bar">
            <ul className="menu-bar-menu menu-hidden">
              <li>
                <a href="story.html">스토리</a>
              </li>
              <li>
                <a href="search.html">식물 카테고리</a>
              </li>
              <li>
                <a href="test.html">자가진단</a>
              </li>
            </ul>
            <a href="#" className="menu-icon">
              <i className="fas fa-bars"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
