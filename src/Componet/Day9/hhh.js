import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Singers(){
    return (
      <div style={{justifyContent:'center',alignItems:'center'}}>
        <h1>The singers are</h1>
        <h3>1.Singer1<br/>2.Singer2<br/>3.Singer3</h3>
      </div>
    );
}

function Hmmmm(){
    return (
      <div style={{justifyContent:'center',alignItems:'center'}}>
        <h1>Welcome</h1>
      </div>
    );
}

function AlbumD(){
    return (
      <div style={{justifyContent:'center',alignItems:'center'}}>
        <h1>The albums are</h1>
        <h3>1.Album1<br/>2.Album2<br/>3.Album3</h3>
      </div>
    );
}

const Navbar2222 = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link to='/hhh' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          </Typography>
          <Button color="inherit">
            <Link to='/aaa' style={{ textDecoration: 'none', color: 'white' }}>Album</Link>
          </Button>
          <Button color="inherit">
            <Link to='/sss' style={{ textDecoration: 'none', color: 'white' }}>Singer</Link>
          </Button>
        </Toolbar>
      </AppBar>
     
       <Routes>
        <Route exact path='/sss' element={<Singers/>}></Route>
         <Route exact path='/aaa' element={<AlbumD/>}></Route>
        <Route exact path='/hhh' element={<Hmmmm/>}></Route>
      </Routes>
    </div>
  );
};

export default Navbar2222;