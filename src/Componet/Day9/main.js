import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';



import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Singers from './Singers';
import AlbumD from './albummm';
import Hmmmm from './hommmm';


const Navbar22 = () => {
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

export default Navbar22;
