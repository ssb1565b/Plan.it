import React from 'react';

export default function Main() {
  return (
    <>
      <section className="main-section-1">
        <div className="inner">
          <ul className="hidden-text">
            <li>Dust</li>
            <li>미세먼지</li>
            <li>melancholy</li>
            <li>우울함</li>
            <li>Tired</li>
            <li>피로감</li>
            <li>CO2</li>
            <li>이산화탄소</li>
            <li>Smoke</li>
            <li>매연</li>
            <li>Global Warming</li>
            <li>지구온난화</li>
            <li>Abnormal Climate</li>
            <li>이상기후</li>
            <li>Humidity</li>
            <li>습기</li>
            <li>Formaldehyde</li>
            <li>포름알데히드</li>
            <li>마우스를 올려 나쁜 요소를 없애주세요</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
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
          <a href="story.html" className="brand-story">
            <img src="./image/brand_story.svg" alt="" />
          </a>
        </div>
      </section>
      <section className="main-section-2">
        <div className="inner">
          <div className="title-second">
            <h3>View Our Plants</h3>
            <div>
              <p>어떤 종류의 식물을 찾고 있나요?</p>
              <a href="search.html">
                <strong>더보기 +</strong>
              </a>
            </div>
          </div>
          <div className="plant-category">
            <div className="box box1">
              <a href="search.html">
                <p>
                  Large Pet Plant
                  <br />
                </p>
                <span>대형식물로 공간에 포인트를 줘볼까요?</span>
                <img src="./image/home_sect2_large.jpg" alt="" />
              </a>
            </div>
            <div>
              <div className="box box2">
                <a href="search.html" className="font-color--white">
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
                </a>
              </div>
              <div className="mini-box">
                <div className="box box3">
                  <a href="search.html" className="font-color--white">
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
                  </a>
                </div>
                <div className="box box4">
                  <a href="search.html" className="font-color--white">
                    <p>For Interior</p>
                  </a>
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
              <a href="test.html" className="btn btn--white">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>
              </a>
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
