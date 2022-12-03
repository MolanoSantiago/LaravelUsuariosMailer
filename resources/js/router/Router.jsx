import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../components/NotFound';
import EditUser from '../components/Usuarios/Edit';
import IndexUser from '../components/Usuarios/Index';
import NewUser from '../components/Usuarios/New';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={ <NotFound /> } />
        <Route path='/usuarios' element={ <IndexUser /> } />
        <Route path='/usuarios/nuevo' element={ <NewUser/> } />
        <Route path='/usuario/edit/:id' element={ <EditUser /> } />
      </Routes>
    </div>
  )
}

export default Router