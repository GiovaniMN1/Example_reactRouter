import React from 'react';
import {BrowserRouter ,Route ,Routes} from "react-router-dom";
import Header from './componentes/Header';
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import Acerca from './componentes/Acerca';
import Post from './componentes/Post';
import Error404 from './componentes/Error404';


const App=()=>{
  return(
    
      <BrowserRouter>
      <div>
        <Header/>
        <div>
        <Routes>
          
          <Route path='*' element={
            //el * sirve cualquier rita que no haya encontradoq
            <Error404/>
          }/>
        <Route path='/' element={
         <Inicio/>
        }/>
        <Route path='/blog' element={
          <Blog/>
        }/>
        <Route path='/post/:id' element={
          <Post/>
        }/>
        <Route path='/acerca' element={
          <Acerca/>
        } />
        </Routes>
        </div>
        
      </div>
      </BrowserRouter>
      
    );
  
}

export default App;
