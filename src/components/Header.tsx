import React from 'react';

export default function Header() {
  return (
    <>
      <header>
        <div className="inner">
          <div className="logo">
            <a href="#">로고</a>
          </div>
          <div className="menu-bar">
            <ul className="menu-bar-menu menu-hidden">
              <li>
                <a href="#">스토리</a>
              </li>
              <li>
                <a href="#">스토리</a>
              </li>
              <li>
                <a href="#">스토리</a>
              </li>
            </ul>
            <a href="#" className="munu-icon">
              메뉴 아이콘
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
