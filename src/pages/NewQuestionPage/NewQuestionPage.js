import React from 'react';

function NewQuestionPage() {

  const goToHome = () => {
     // TODO: implementar go to home
     console.log('TODO: implementar go to home');
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    // TODO: implementar o handleChange do componente controlado de formulário
    console.log('TODO: implementar handleChange');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // TODO: implementar lógica de id => buscar a ultima id e somar 1
    console.log('TODO: implementar lógica de id => buscar a ultima id e somar 1');
    const id = 0;

    const newQuestion = {
      id,
      name: 'some name...',
      question: 'some question...',
      claps: 0,
    };

    // TODO: adicionar a nova questão na listagem de questões
    console.log('TODO: adicionar a nova questão na listagem de questões', newQuestion);

    goToHome();
  };

  return (
    <section className="question-section">
      <form onSubmit={ handleFormSubmit }>
        <label htmlFor="question">
          Digite a sua pergunta:
          <textarea
            value=''
            onChange={ handleChange }
            name="question"
            placeholder="Escreva aqui sua pergunta"
            id="question"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="user">
          Digite o seu nome:
          <input
            value=''
            onChange={ handleChange }
            type="text"
            name="name"
            placeholder="Escreva seu nome..."
            id="user"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default NewQuestionPage;
