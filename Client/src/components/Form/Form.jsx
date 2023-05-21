import style from './Form.module.css';
import validate from './validation.js';
import { useState } from 'react';

const Form = ({ login }) => {
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

    return (
        <div className={style.center}>
            <img src='/login-back.png' alt='Rick y Morty API' className={style.form__image}></img>
            <form onSubmit={handleSubmit}>
                <h1>Iniciar sesión</h1>
                <div>
                    <div>
                        {errors.email && <p>{errors.email}</p>}
                        <input type='email' name='email' placeholder='Ingresa tu correo' value={userData.email} onChange={handleChange}></input>
                        <label htmlFor='email'>Email</label>
                    </div>
                    <div>
                        {errors.password && <p>{errors.password}</p>}
                        <input type='password' name='password' placeholder='Ingresa tu clave' value={userData.password} onChange={handleChange}></input>
                        <label htmlFor='password'>Contraseña</label>
                    </div>
                    <button type='submit' disabled={errors.email || errors.password || !userData.email}>Enviar</button>
                </div>
            </form>
        </div>
    )
};

export default Form;