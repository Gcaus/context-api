import react from 'react';
import QuestionCard from '../QuestionCard/QuestionCard';

function QuestionList() {
   // TODO: buscar as questões do context
   console.log('TODO: buscar as questões do estado global');
   const questions = [];

  return (
    <section>
      {questions.map((question, index) => (
        <QuestionCard key={ index } question={ question } />
      ))}
    </section>
  );
}

export default QuestionList;
