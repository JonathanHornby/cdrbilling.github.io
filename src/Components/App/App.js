import React from 'react';


import './App.css';
import Main from '../Main/Main'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
          <Navigation />
          <Header />
          <Main />
      </div>
    );
  }
}

export default App;
