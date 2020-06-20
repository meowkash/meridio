import React from 'react';
import './App.css';
import Card from './components/CardComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import UserAvatar from './components/UserAvatarComponent';
import NearbyUsersList from './components/NearbyUsersListComponent';

function App() {
  var dataUsr = [
    { name: "Aakash", icon: "1", id:0 },
    { name: "Arthas", icon: "1", id:1 }
  ];  
  return (
    <React.Fragment>
      <Navbar dark>
        <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <NearbyUsersList users={dataUsr} />
      {/* <Card title="Files" defaultMessage="Files you send or receive will be shown here" cardHeight="300px"/> */}
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
