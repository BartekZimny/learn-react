import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import FAQ from '../FAQ/FAQ';
import {BrowserRouter, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import styles from './App.scss';
import {AnimatedSwitch} from 'react-router-transition';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={FAQ} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;