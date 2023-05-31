import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/test.scss';

export default function Test() {
  const cardImage = [];
  return (
    <>
      {/* <!-- 자가진단 페이지의 어떤유형일까 --> */}
      <section className="test">
        <div className="besy">{/* <!-- 여백 색 채우기용 --> */}</div>
        <div className="inner">
          <div className="category">
            <div className="gototest">
              <p>나는 어떻게 지구를 지킬 수 있을까?</p>
              <h2>유형 검사 테스트</h2>
              <Link to="#" className="btn btn--white">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>
              </Link>
            </div>
            <div className="card card-1">
              <img src="./image/earth.svg" alt="지구캐릭터" />
            </div>
            <div className="card card-2">
              <img src="./image/rocket.svg" alt="지구캐릭터" />
            </div>
            <div className="card card-3">
              <img src="./image/star.svg" alt="지구캐릭터" />
            </div>
            <div className="card card-4">
              <img src="./image/satellite.svg" alt="지구캐릭터" />
            </div>
            <div className="promotion hide">
              <div className="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="./image/star.svg" alt="별똥별" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./image/earth.svg" alt="지구" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./image/rocket.svg" alt="로켓" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./image/satellite.svg" alt="인공위성" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="question-mainbox hide" id="question-box">
            <div className="question1 box hide">
              <div className="question-box">
                <p className="main-question">Q1.</p>
                <p className="sub-question">당신의 키우기 실력은 어떠한가요?</p>
              </div>
              <div className="answer-box">
                <div className="first-answer">
                  <p className="answer">매번 식물을 죽이는 똥손이에요..</p>
                </div>
                <div className="second-answer">
                  <p className="answer">죽은 식물도 살릴 수 있는 금손이에요.</p>
                </div>
              </div>
            </div>
            <div className="question2 box hide">
              <div className="question-box">
                <p className="main-question">Q2.</p>
                <p className="sub-question">
                  어떤 식물을 가장 키워보고 싶나요?
                </p>
              </div>
              <div className="answer-box">
                <div className="first-answer">
                  <p className="answer">공기정화가 가능한 식물</p>
                </div>
                <div className="second-answer">
                  <p className="answer">반려식물에게 안전한 식물</p>
                </div>
                <div className="third-answer">
                  <p className="answer">공간을 가득 채울 대형 식물</p>
                </div>
                <div className="forth-answer">
                  <p className="answer">인테리어 포인트가 되어줄 예쁜 식물</p>
                </div>
              </div>
            </div>
            <div className="question3 box hide">
              <div className="question-box">
                <p className="main-question">Q3.</p>
                <p className="sub-question">가드닝 타입은 무엇인가요?</p>
              </div>
              <div className="answer-box">
                <div className="first-answer">
                  <p className="answer">난 바쁘니까 최소 1달에 한번씩 줄래요</p>
                </div>
                <div className="second-answer">
                  <p className="answer">최대 2주에 한번 씩은 줄 수 있어요</p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box hide" id="btn-box">
            <Link to="#" className="btn btn--white hide">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
              <div className="circle circle-4"></div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
