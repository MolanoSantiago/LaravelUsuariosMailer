import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditUser = () => {

    const navigate = useNavigate();

    const {id} = useParams()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        getUsuario()
    }, [])

    const getUsuario = async () => {
        await axios.get(`/api/usuario/edit/${id}`)
            .then(({data}) =>{
                const {name, email, telefono, password} = data.usuario
                setName(name)
                setEmail(email)
                setTelefono(telefono)
                setPassword(password)
            })
            .catch(({response:{data}}) => {

            })
    }

    const editarUsuario = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('name', name)
        formData.append('email', email)
        formData.append('telefono', telefono)
        formData.append('password', password)

        await axios.post(`/api/usuario/edit/${id}`, formData)
            .then(({data}) => {
                toast.fire({
                    icon: "success",
                    title: "Se ha editado correctamente"
                })
                navigate("/usuarios")
            })
            .catch(({response}) => {

            })
    }

  return (
    <div className="container">
        <div className="usuario_edit">
        <div className="titlebar">
                <div className="titlebar_item">
                    <h1>Editar Usuario</h1>
                </div>
                <div className="titlebar_item">
                    <button className="btn" onClick={(event)=>editarUsuario(event)}>
                        Guardar
                    </button>
                </div>
            </div>

            <div className="card_wrapper">
                <div className="wrapper_left">
                    <div className="card">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" value={name} onChange={(event)=> {setName(event.target.value)}} />

                        <hr className='hr'/>

                        <label htmlFor="email">Correo:</label>
                        <input type="email" value={email} onChange={(event)=> {setEmail(event.target.value)}} />

                        <hr className='hr'/>

                        <label htmlFor="telefono">Telefono:</label>
                        <input type="number" value={telefono} onChange={(event)=> {setTelefono(event.target.value)}} />

                        <hr className='hr'/>

                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" value={password} onChange={(event)=> {setPassword(event.target.value)}} />

                        <hr className='hr'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditUser