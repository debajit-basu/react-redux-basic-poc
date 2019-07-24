import React,{Component} from 'react';
import './App.css';
import Layout from './component/Layout';
import Header from './component/Header';
import News from './component/News';
import Items from './component/Items';
import Login from './component/Login';
import Register from './component/Register';

import { BrowserRouter, Route } from 'react-router-dom';


import {connect} from 'react-redux';

class App extends Component {

  render() {
      console.log(this.props.login);
      return (

          <BrowserRouter>
              <Layout >
                  <div className="App">
                      <Header />
                      <div className="container mt-5 p-3">
                          <Route exact path='/news' component={News} />
                          <Route path='/items' component={Items} />
                          {/*<Route path='/login' component={Login} />
                          <Route path='/register' component={Register} />*/}
                          {
                              (this.props.globalVariableProp.loginModal) &&
                                  <Login />
                          }
                          {
                              (this.props.globalVariableProp.registerModal) &&
                                 <Register />
                          }
                      </div>
                  </div>
              </Layout>

          </BrowserRouter>
      );
  }
}

const mapStateToProps = state => {
    return {
        globalVariableProp: state.globalVariable,
        login: state.login

    }
}

export default connect(mapStateToProps)(App);
