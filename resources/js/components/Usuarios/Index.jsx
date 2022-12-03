import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IndexUser = () => {
  
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([]);

  const nuevoUsuario = () => {
    navigate("/usuarios/nuevo")
  }
  
  useEffect(() => {
    getUsuarios()
  },[] )

  const getUsuarios = async () => {
    await axios.get("/api/usuarios")
        .then(({data}) => {
            setUsuarios(data.usuarios)
        })
  }

  const editarUsuario = (id) => {
    navigate("/usuario/edit/"+id);
  }

  const eliminarUsuario = async (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No se puede revertir el cambio.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    })
    .then((result) => {
      if(result.isConfirmed) {
        axios.get("api/usuario/delete/"+id)
          .then(() => {
            Swal.fire(
              '¡Eliminado!',
              'Usuario eliminado correctamente.',
              'success'
            )
            getUsuarios()
          })
          .catch(() => {
            
          })
      }
    })
  }

  return (
    <div className="container">
      <div className="user_list">
        <div className="titlebar">
          <div className="titlebar_item">
            <h1>Usuarios</h1>
          </div>
          <div className="titlebar_item">
            <div className="btn" onClick={() => nuevoUsuario()}>
              Nuevo usuario
            </div>
          </div>
        </div>
        <div className="table">
          <div className="list_header">
            <p>
              Nombre
            </p>
            <p>
              Correo
            </p>
            <p>
              Telefono
            </p>
            <p>
              
            </p>
          </div>
          {
            usuarios.length > 0 && (
              usuarios.map((item, key)=>(
                <div className="list_items" key={key}>
                  <p>{item.name}</p>
                  <p>{item.email}</p>
                  <p>{item.telefono}</p>
                  <div>
                    <button className='btn_icon success' onClick={() => editarUsuario(item.id)}>
                      <i className="fa-solid fa-user-pen"></i>
                    </button>
                    <button className='btn_icon danger' onClick={() => eliminarUsuario(item.id)}>
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default IndexUser