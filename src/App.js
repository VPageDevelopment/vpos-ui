import React, { Component } from 'react';
import Login from './components/Login';
import Welcome from './components/Welcome';
import styled from 'styled-components';


const AppContainer = styled.section`
    width:100vw;
    height:100vh;
    display:flex;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
          <Welcome/>
          <Login/>
      </AppContainer>
    );
  }
}

export default App;
