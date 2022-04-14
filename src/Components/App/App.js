import React from 'react';


import './App.css';
import Main from '../Main/Main'
import Navigation from '../Navigation/Navigation'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
          <Navigation />
          <Main />
      </div>
    );
  }
}

export default App;
