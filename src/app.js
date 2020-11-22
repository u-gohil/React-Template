import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import PageOne from './pages/TestOnePage';

const App = () => {
  return (
    <main>
      <Switch>
        <Route path='/' exact component={PageOne} />
      </Switch>
    </main>
  );
};

export default App;
