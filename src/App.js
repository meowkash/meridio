import React from 'react';
import './App.css';
import Card from './components/CardComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import UserAvatar from './components/UserAvatarComponent';

function App() {
  return (
    <React.Fragment>
      <Navbar dark>
        <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Card title="People" defaultMessage="No people found nearby" cardHeight="100px"/>
      <Card title="Files" defaultMessage="Files you send or receive will be shown here" cardHeight="300px"/>
      <UserAvatar userName="Aakash" userIcon="1" />
      <UserAvatar userName="Arthas" userIcon="1" />
      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    </React.Fragment>
    
  );
}

export default App;
