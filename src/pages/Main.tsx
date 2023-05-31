import React, { useState } from 'react';
import '../styles/main.scss';
import { Link } from 'react-router-dom';
import TextEl from '../components/TextEl';

export default function Main() {
  const hiddenEl = [
    'Dust',
    '미세먼지',
    'melancholy',
    '우울함',
    'Tired',
    '피로감',
    'CO2',
    '이산화탄소',
    'Smoke',
    '매연',
    'Global Warming',
    '지구온난화',
    'Abnormal Climate',
    '이상기후',
    'Humidity',
    '습기',
    'Formaldehyde',
    '포름알데히드',
    '마우스를 올려 나쁜 요소를 없애주세요',
    '',
    '',
    '',
    '',
    '',
  ];

  return (
    <>
      <section className="main-section-1">
        <div className="inner">
          <ul className="hidden-text">
            {hiddenEl.map((el: string) => (
              <TextEl el={el} />
            ))}
          </ul>
          <div className="text-box">
            <p>
              Plants are here to
              <br />
              Save our planet
            </p>
            <p className="brand-intro">
              우리의 녹색 행성, 더 싱그러워지도록 Plant.it이 함께합니다
              <br />더 다양한 브랜드 스토리가 궁금하다면 옆의 원을 클릭해보세요
            </p>
          </div>
          <div id="titleSectBtn" className="arrow">
            <div className="arrow-bottom"></div>
          </div>
          <Link to="story" className="brand-story">
            <img src="./image/brand_story.svg" alt="" />
          </Link>
        </div>
      </section>
      <section className="main-section-2">
        <div className="inner">
          <div className="title-second">
            <h3>View Our Plants</h3>
            <div>
              <p>어떤 종류의 식물을 찾고 있나요?</p>
              <Link to="category">
                <strong>더보기 +</strong>
              </Link>
            </div>
          </div>
          <div className="plant-category">
            <div className="box box1">
              <Link to="category?search=large">
                <p>
                  Large Pet Plant
                  <br />
                </p>
                <span>대형식물로 공간에 포인트를 줘볼까요?</span>
                <img src="./image/home_sect2_large.jpg" alt="" />
              </Link>
            </div>
            <div>
              <div className="box box2">
                <Link to="category?search=big" className="font-color--white">
                  <p>
                    Air Purifying <br />
                    Plant
                    <br />
                  </p>
                  <span>
                    미세먼지 제거에 탁월한 <br />
                    식물을 만나보세요
                  </span>
                  <div className="arrow-move">
                    <div className="arrow-right"></div>
                  </div>
                </Link>
              </div>
              <div className="mini-box">
                <div className="box box3">
                  <Link to="category?search=pet" className="font-color--white">
                    <p>
                      Safe For Pets <br />
                    </p>
                    <span>
                      {' '}
                      반려동물과 식물의 <br />
                      행복한 동거를 위하여!{' '}
                    </span>
                    <div className="arrow-move">
                      <div className="arrow-right"></div>
                    </div>
                  </Link>
                </div>
                <div className="box box4">
                  <Link to="category" className="font-color--white">
                    <p>For Interior</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div id="recomendSectBtn" className="arrow">
            <div className="arrow-bottom"></div>
          </div>
        </div>
      </section>
      <section className="main-section-3">
        <div className="inner">
          <div className="title-second">
            <div>
              <div>
                <h3>Plant.it Personality Test</h3>
                <p>
                  식물을 기르기 전, 재미로 보는 자가진단 테스트!
                  <br />
                  식물 유형 검사와 더불어 추천 식물까지 확인해보세요
                </p>
              </div>
              <Link to="test" className="btn btn--white">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>
              </Link>
            </div>
          </div>
          <ul className="character">
            <li className="earth">
              <img src="./image/earth.svg" alt="" />
            </li>
            <li className="rocket">
              <img src="./image/rocket.svg" alt="" />
            </li>
            <li className="star">
              <img src="./image/star.svg" alt="" />
            </li>
            <li className="satellite">
              <img src="./image/satellite.svg" alt="" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
