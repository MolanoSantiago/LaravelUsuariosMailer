import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Edit from '../components/Usuarios/Edit';
import Index from '../components/Usuarios/Index';
import New from '../components/Usuarios/New';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={ <NotFound /> } />
        <Route path='/usuarios' element={ <Index /> } />
        <Route path='/usuarios/nuevo' element={ <New /> } />
        <Route path='/usuario/edit/:id' element={ <Edit /> } />
      </Routes>
    </div>
  )
}

export default Router