import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import FeelingForm from '../FeelingForm/FeelingForm';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      {/*
        // display the FeelingForm on page load
        // and on /feeling endpoint route
      */}
      <FeelingForm />

      <Router>
        <Route path="/feeling" exact>
          {/* source in the FeelingForm component */}
          <FeelingForm />
        </Route>
        <Route path="/understanding" exact>
          {/* source in the UnderstandingForm component */}
          <UnderstandingForm />
        </Route>
        <Route path="/supported" exact>
          {/* source in the SupportedForm component */}
          <SupportedForm />
        </Route>
        <Route path="/comments" exact>
          {/* source in the CommentsForm component */}
          <CommentsForm />
        </Route>
        <Route path="/review" exact>
          {/* source in the ReviewPage component */}
          <ReviewPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
