
import { Button } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';


import Header from './components/Header';
import Home from"./components/Home";
import Login from"./components/login";
import Video from './components/Video';
import Footer from './components/Footer';
import Upload from './components/Upload';
import Sign from './components/Sign';
function App() {
  return<Router>
    <Header />
    <Routes>
      <Route path='/Home' element ={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/Video' element={<Video/>}/>
      <Route path='/Upload' element={<Upload/>}/>
      <Route path='/signup' element={<Sign/>}/>
    </Routes>
    <Footer/>
  </Router>

   
  
}

export default App;
