import React, { Component }  from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import {Switch ,Route, Redirect} from 'react-router-dom';
import Footer from './components/FooterComponent';
import {BrowserRouter} from 'react-router-dom'
import Main from './components/StaffListComponent';
import RenderEmployee from './components/StaffInfo';
function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route  path="staff/1" />
          <Redirect to="/home"/>
        </Switch>
        </BrowserRouter>
      <Footer />
       
        </div>
    </div>
  );
}

export default App;
