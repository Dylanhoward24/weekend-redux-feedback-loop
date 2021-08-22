import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportedForm from '../SupportedForm/SupportedForm';
import CommentsForm from '../CommentsForm/CommentsForm';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route path="/" exact>
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
      </Router>
    </div>
  );
}

export default App;
