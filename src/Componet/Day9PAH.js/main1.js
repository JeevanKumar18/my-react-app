import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';



import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HmmmmD from './homee';
import AboutD from './about';
import ContactD from './contact';



const Navbar222 = () => {
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
            <Link to='/aaa' style={{ textDecoration: 'none', color: 'white' }}>About</Link>
          </Button>
          <Button color="inherit">
            <Link to='/sss' style={{ textDecoration: 'none', color: 'white' }}>Contact</Link>
          </Button>
          
        </Toolbar>
      </AppBar>
     
       <Routes>
        <Route exact path='/hhh' element={<HmmmmD/>}></Route>
         <Route exact path='/aaa' element={<AboutD/>}></Route>
        <Route exact path='/sss' element={<ContactD/>}></Route>
        
     
      </Routes>
    </div>
  );
};

export default Navbar222;
