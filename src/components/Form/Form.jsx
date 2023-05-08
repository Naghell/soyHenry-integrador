import style from './Form.module.css';
import validate from './validation.js';
import { useState } from 'react';

const Form = ({login}) => {
    const [userData, setData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setData({
            ...userData,
            [event.target.name]: event.target.value
        })
        validate(userData, setErrors)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' placeholder='Ingresa tu mail' value={userData.email} onChange={handleChange}></input>
            { errors.email && <p>{errors.email}</p> }

            <label htmlFor='password'>Contraseña:</label>
            <input type='password' name='password' placeholder='Ingresa tu contraseña' value={userData.password} onChange={handleChange}></input>'
            { errors.password && <p>{errors.password}</p> }
            <button type='submit'>Enviar</button>
        </form>
    )
};

export default Form;