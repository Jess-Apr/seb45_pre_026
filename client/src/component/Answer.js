import { useState } from 'react';
import '../css/answer.css';
import '../css/component.css';
import Vote from './Vote';

export default function Answer({ questionData }) {
  const [answer, setAnswer] = useState('');
  const [isAnswerEmpty, setIsAnswerEmpty] = useState(false);

  function handleAnswerChange(e) {
    if (e.target.value !== '') setIsAnswerEmpty(false);
    setAnswer(e.target.value);
  }

  function handleAnswerSubmit() {
    setIsAnswerEmpty(false);

    if (answer === '') setIsAnswerEmpty(true);
    console.log(questionData.answer.length);
  }

  return (
    <div className="answer__bg">
      {questionData.answer?.length > 1 ? (
        <div className="answer__title">
          {questionData.answer?.length} Answers
        </div>
      ) : questionData.answer?.length === 1 ? (
        <div className="answer__title">
          {questionData.answer?.length} Answer
        </div>
      ) : null}
      {questionData.answer
        ? questionData.answer.map((el) => (
            <div key={el.answerId} className="list answer__content-container">
              <div className="answer__content-wrap">
                <Vote voteNumber={el.vote} />
                <div className="answer__content">{el.content}</div>
              </div>
              <div className="answer__bottom">
                <div>{el.date}</div>
                <div>Answered by {el.user}</div>
              </div>
            </div>
          ))
        : null}
      <div className="answer__input-container">
        <div className="answer__input-title">Your Answer</div>
        <div className="answer__input-wrap">
          <textarea
            className={
              isAnswerEmpty
                ? 'input input-red answer__input'
                : 'input answer__input answer__input-gray'
            }
            onChange={handleAnswerChange}
          ></textarea>
          {isAnswerEmpty ? (
            <div className="answer__warning">Body is missing</div>
          ) : null}
        </div>
        <button
          className="button-dark answer__post-btn"
          onClick={handleAnswerSubmit}
        >
          Post Your Answer
        </button>
      </div>
    </div>
  );
}
