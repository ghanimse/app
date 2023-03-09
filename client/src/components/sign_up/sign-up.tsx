import style from './sign-up.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { regions } from 'morocco-cities'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
    const { register, getValues, handleSubmit, watch, formState: { errors } } = useForm()
    const [userValidation, setUserValidation] = useState({username: false, email: false, phone: false})
    const [isMatch, changeIsMatch] = useState(true)
     const navigateTo = useNavigate();
     
    useEffect(() => {
        const token = localStorage.getItem('Authorization')
        if (token) {
            const requestOptions = {
                method: 'post',
                headers: { 'Authorization': token }
            }

            fetch('/api/signin', requestOptions)
            .then(res => res.json())
            .then(res => {
                if(res.redirect) 
                    navigateTo('/')
            })
        }
    }, [])
    
    function onChange() {
        const isMatch = (getValues('Cpassword').length > 0 && getValues('password') !== getValues('Cpassword'))
        changeIsMatch(!isMatch)
    }
    
    function onSubmit(userData: any) {
        Object.keys(userData)
        .map(key => userData[key] = userData[key].trim())

        userData.phone = `+212${userData.phone.split(' ').join('').replace('+212', '')}`
        delete userData.Cpassword

        setUserValidation({username: false, email: false, phone: false})
        
        const requestOptions = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        } 
       
        fetch('/api/signup', requestOptions)
        .then(res => {
            let token = res.headers.get('Authorization') ?? ''
            token = token.replace('Bearer ', '')
            localStorage.setItem('Authorization', token)
            return res.json()
        })
        .then((res) => {
            setUserValidation(res)
            if(res?.isCreated) navigateTo('/')
        })
    }

    return (
        <div className={style.container}>
            <Link className={style.exit} to='/'><FontAwesomeIcon icon={faRightFromBracket} /></Link>
            <div className={style.form_container}>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.grid}>
                        <span>
                            <label htmlFor="firstName">First Name</label>
                            <input {...register('firstName', {required: true})} type='text' id='firstName' />
                            {errors.firstName && <p className={style.errorMessage}>first name is required</p>}
                        </span>
                        <span>
                            <label htmlFor="lastName">Last Name</label>
                            <input {...register('lastName', {required: true})} type='text' id='lastName' />
                            {errors.lastName && <p className={style.errorMessage}>last name is required</p>}
                        </span>
                        <span>
                            <label htmlFor="username">Username</label>
                            <input {...register('username', {required: true})} type='text' id='username' />
                            {errors.username && <p className={style.errorMessage}>username is required</p>}
                            {userValidation.username && <p  className={style.errorMessage}>this username is already use</p>}
                        </span>
                        <span>
                            <label htmlFor="email">Email</label>
                            <input {...register('email', {required: true})} type='text' id='email' />
                            {errors.email && <p className={style.errorMessage}>email is required</p>}
                            {userValidation.email && <p  className={style.errorMessage}>this email is already use</p>}
                        </span>
                        <span>
                            <label htmlFor="city">City</label>
                            <select {...register('city')} name="city" id="city">
                                {regions.map((region: any, index: number) => {
                                    return <optgroup key={index} label={region.name}>
                                        {region.cities_list.map((city: any, index: number) => 
                                            <option key={index}>{city}</option>
                                        )}
                                    </optgroup>
                                })}
                            </select>
                        </span>
                        <span>
                            <label htmlFor="phone">Number Phone</label>
                            <span className={style.phoneBox}>
                                <input {...register('phone', {required: true})} type='text' id='phone' />
                                <span className={style.phonePrefix}>+212</span>
                            </span>
                            {errors.phone && <p className={style.errorMessage}>phone number is required</p>}
                            {userValidation.phone && <p className={style.errorMessage}>this number phone is already use</p>}
                        </span>
                        <span onChange={onChange}>
                            <label htmlFor="password">Password</label>
                            <input {...register('password', {required: true, minLength: 8})} type='password' id='password' />
                            {errors.password?.type === 'minLength'  && <p className={style.errorMessage}>password is too short</p>}
                            {errors.password?.type === 'required' && <p className={style.errorMessage}>password is required</p>}
                        </span>
                        <span onChange={onChange}>
                            <label htmlFor="Cpassword">Confirm Password</label>
                            <input {...register('Cpassword', {required: true})} type='password' id='Cpassword' />
                            {errors.Cpassword && <p className={style.errorMessage}>this field is also required</p>}
                            {!isMatch && <p className={style.errorMessage}>passwords do not match</p>}
                        </span>
                    </div>
                    <p className={style.Pterms}>By signing up, you agree to our <span className={style.terms}>Terms of use</span> & <span className={style.terms}>Privacy Policy.</span></p>
                    <input type='submit' value='Sign Up' />
                </form>
            </div>
        </div>
    )

}