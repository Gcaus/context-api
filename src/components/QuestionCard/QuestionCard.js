import React from 'react';

function QuestionCard({ question }) {
  function handleClickClap(questionId) {
    console.log(questionId);
    // TODO: increment claps in the question on the questionList inside of the global state
    console.log(`TODO: increment claps in the question 
    on the questionList inside of the global state`);
  }

  return (
    <section className="question-card">
      <header className="question-card-header">
        <img
          className="question-card-image"
          src="https://i.pinimg.com/564x/fe/43/dd/fe43dde6d650b6d31ab47a1e01714b65.jpg"
          alt=""
        />
        {question.name}
      </header>
      <p className="question-card-body">{question.question}</p>

      <p className="question-card-claps">
        <button
          className="button-no-shadow"
          type="button"
          onClick={ () => handleClickClap(question.id) }
        >
          <span
            role="img"
            aria-label="increase-claps"

          >
            👏
          </span>
        </button>
        {question.claps}
      </p>
    </section>
  );
}

export default QuestionCard;