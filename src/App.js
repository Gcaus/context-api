import React from 'react';
import { Route, Switch } from 'react-router-dom';
import QuestionListPage from './pages/QuestionListPage/QuestionListPage';
import NewQuestionPage from './pages/NewQuestionPage/NewQuestionPage';
import './App.css';

function App() {
  const goToHome = () => {
    // TODO: Implementar go to home
    console.log('TODO: Implementar go to home');
    // como acessar o history com componente funcional?
  };

  return (
    <main className="App">
      <header className="main-header">
        <button onClick={ goToHome } type="button" className="button-no-shadow">
          <h3>Trybe Questions</h3>
        </button>
      </header>
      <section className="main-section">
        <Switch>
          <Route path="/new-question" component={ NewQuestionPage } />
          <Route path="/" component={ QuestionListPage } />
        </Switch>
      </section>
    </main>
  );
}

export default App;
