import React from "react";
import HomepageContainer from "../components/home/Homepage_container";
import NavbarContainer from "../components/navbar/navbar_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import CreateQuizFormContainer from "./quiz/create_quiz_form_container";
import QuizIndexContainer from "./quiz/quiz_index_container";
import QuizShowContainer from './quiz/quiz_show_container';

import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div className="app">
      <header>
          <NavbarContainer />
      </header>
    
    <Route exact path="/" component={HomepageContainer}/>

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <div className="quiz-index-page">
      <ProtectedRoute exact path="/home" component={CreateQuizFormContainer}/>
      <ProtectedRoute exact path="/home" component={QuizIndexContainer}/>
    </div>
    <ProtectedRoute exact path="/quizzes/:quizId" component={QuizShowContainer}/>
  </div>
);

export default App;