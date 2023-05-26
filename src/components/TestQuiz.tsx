import React from 'react';

export default function TestQuiz() {
  interface MainQuestion {}

  return (
    <>
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
            <p className="sub-question">어떤 식물을 가장 키워보고 싶나요?</p>
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
    </>
  );
}
