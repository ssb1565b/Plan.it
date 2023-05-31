import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/_header.scss';

export default function Header() {
  const handleMenu = () => {
    console.log('click');
  };
  return (
    <>
      <header>
        <div className="inner">
          <div className="logo">
            <Link to="/">
              <img src="./image/header_logo.svg" alt="" />
            </Link>
          </div>
          <div className="menu-bar">
            <ul className="menu-bar-menu menu-hidden">
              <li>
                <Link to="/story">스토리</Link>
              </li>
              <li>
                <Link to="/category">식물카테고리</Link>
              </li>
              <li>
                <Link to="/test">자가진단</Link>
              </li>
            </ul>

            <a className="menu-icon" onClick={handleMenu}>
              <i className="fas fa-bars"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
