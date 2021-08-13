import React from 'react';
//再リロード時の404エラー回避のためHashRouterを採用
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './App/Header/Header';
import Home from './App/Home/Home';
import About from './App/About/About';
import Works from './App/Works/Works';
import Youtube from './App/Youtube/Youtube';
import Contact from './App/Contact/Contact';
import Footer from './App/Footer/Footer';
import Portfolio from './App/Portfolio/Portfolio';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/works' component={Works} />
          <Route path='/youtube' component={Youtube} />
          <Route path='/contact' component={Contact} />
          <Route path='/portfolio' component={Portfolio} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
