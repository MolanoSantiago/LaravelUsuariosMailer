import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewUser = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [password, setPassword] = useState("")

    const crearUsuario = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('name', name)
    formData.append('email', email)
    formData.append('telefono', telefono)
    formData.append('password', password)

    await axios.post("/api/usuarios/nuevo", formData)
        .then(({data}) => {
            toast.fire({
                icon: "success",
                title: "Usuario creado correctamente"
            })
            navigate("/usuarios")
        })
        .catch(({response}) => {

        })
}

  return (
    <div className="container">
        <div className="usuarios_create">
            <div className="titlebar">
                <div className="titlebar_item">
                    <h1>Nuevo Usuario</h1>
                </div>
                <div className="titlebar_item">
                    <button className="btn" onClick={(event) => crearUsuario(event)}>
                        Guardar
                    </button>
                </div>
            </div>

            <div className="card_wrapper">
                <div className="wrapper_left">
                    <div className="card">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" placeholder='Santiago Molano' value={name} onChange={(event) => { setName(event.target.value) }} />

                        <hr className='hr'/>

                        <label htmlFor="email">Correo:</label>
                        <input type="email" placeholder='santiago.molano@gmail.com' value={email} onChange={(event) => { setEmail(event.target.value) }} />

                        <hr className='hr'/>

                        <label htmlFor="telefono">Telefono:</label>
                        <input type="number" placeholder='3243638746' value={telefono} onChange={(event) => { setTelefono(event.target.value) }} />

                        <hr className='hr'/>

                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" placeholder='' value={password} onChange={(event) => { setPassword(event.target.value) }} />

                        <hr className='hr'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewUser