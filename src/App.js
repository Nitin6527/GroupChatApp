import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/authentication/signin/signin';
import SignUp from './components/authentication/signup/signup';
import Home from './components/home/home';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
