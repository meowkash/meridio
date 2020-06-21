import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import NearbyUsersList from './components/NearbyUsersListComponent';
import FileList from './components/FileListComponent';
import UserAvatar from './components/UserAvatarComponent';

function App() {
  var dataUsr = [
    { name: "Aakash", icon: "1", id:0 },
    { name: "Arthas", icon: "1", id:1 }
  ];  
  var dataFiles = [
    { name: "FileOne", size: "1", id:0 },
    { name: "FileTwo", size: "4.7", id:1 },
  ]
  return (
    <React.Fragment>
      <Navbar dark>
        <div className="container">
            <div className="col-8">
                <NavbarBrand href="/">Meridio</NavbarBrand>
            </div>
            <div className="col-4">
                <UserAvatar userName="Illidan" userIcon="1"/>
            </div>
        </div>
      </Navbar>
      <NearbyUsersList users={dataUsr} />
      <FileList files={dataFiles} />
    </React.Fragment>
  );
}

export default App;
