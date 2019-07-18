import React,{Component} from 'react';
import './App.css';
import Layout from './component/Layout';
import Header from './component/Header';
import News from './component/News';


import {connect} from 'react-redux';

class App extends Component {
  constructor(props){
      super(props);
  }


  render() {
      return (
          <div className="App" style={{background: 'white'}}>
              <Layout title="Layout">

                  <Header />
                  <div className="mt-3 container p-2">

                          <News />




                  </div>
              </Layout>
          </div>
      );
  }
}

export default connect()(App);
