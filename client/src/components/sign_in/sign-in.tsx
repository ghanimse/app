import style from './sign-in.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'


export default function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState(false)
    const navigateTo = useNavigate()

    useEffect(() => {
        let token = localStorage.getItem('Authorization')
        if (token) {
            token = `Bearer ${token}`
            const requestOptions = {
                method: 'post',
                headers: { 'Authorization': token }
            }

            fetch('/api/signin', requestOptions)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                
                if(res.redirect) 
                    navigateTo('/')
            })
        }
    }, [])

    function onSubmit(userData: any) {
        const [ username, password ] = Object.keys(userData).map(key => userData[key].trim())
        setErrorMessage(false)

        const requestOptions = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password})
        }
    
        fetch('/api/signin', requestOptions)
        .then(res => {
            const headers = res.headers
            let token = headers.get('Authorization')
            if(token){
                token = token.replace('Bearer ', '')
                localStorage.setItem('Authorization', token)
            }
            return res.json()
        })
        .then(isExist => {
            setErrorMessage(!isExist)
            if(isExist) navigateTo('/')
        })
    }

    return (
        <div className={style.container}>
            <Link to='/' className={style.exit}><FontAwesomeIcon icon={faRightFromBracket} /></Link>
            <div className={style.leftSide}>
                <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                    <h1>Sign In</h1>
                    <input {...register('username')} type='text' placeholder='username' />
                    <input {...register('password')} type='password' placeholder='password' />
                    <span className={style.forgotPass}>forgot password?</span>
                    {errorMessage && <p className={style.errorMessage}>Username Or/And Password</p>}
                    <input type='submit' value='Sign in' />
                </form>
            </div>
            <div className={style.rightSide}>
            </div>
        </div>
    )
}