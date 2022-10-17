import React from 'react';
import QuestionList from '../../components/QuestionList/QuestionList';

function QuestionListPage() {
  
  const goToNewQuestion = () => {
    // TODO: Implementar go to new Question
    console.log('TODO: Implementar go to new Question');  
  };

  return (
    <section>
      <QuestionList />
      <button type="button" onClick={ goToNewQuestion }>
        Nova Pergunta
      </button>
    </section>
  );
}

export default QuestionListPage;
