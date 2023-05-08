import errors from './Form.jsx';

const validate = (userData, setErrors) => {
    if (!(/\S+@\S+\.\S+/.test(userData.email) && userData.email.length > 0)) {
        setErrors({
            ...errors,
            email: 'El mail no es válido.'
        })
    } else if (!(/\S+@\S+\.\S+/.test(userData.email) && userData.email.length < 35)) {
        setErrors({
            ...errors,
            email: 'El mail tiene que tener menos de 35 caracteres.'
        })
    } else {
        setErrors({
            ...errors,
            email: ''
        })
    }

    if (!(/\d/.test(userData.password) && userData.password.length > 5 && userData.password.length <= 10)) {
        setErrors({
            ...errors,
            password: 'La contraseña debe tener al menos un número y tener una longitud entre 6 y 10 caracteres.'
        })
    } else {
        setErrors({
            ...errors,
            password: ''
        })
    }
}

export default validate;