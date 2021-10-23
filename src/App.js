import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header';
import Home from './screens/home';
import Movies from './screens/movies';
import User from './screens/users';
import Search from './components/header/search';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/MoviesList/:page?" exact component={Movies} />
          <Route path="/Movies/:id" component={User} />
          <Route path="/Search/:page?" exact component= {Search}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
