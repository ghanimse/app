import { Link } from 'react-router-dom'
import style from './header.module.scss'


export default function Header() {
    
    return (
        <header>
            <div className={style.container}>
                <h2>TAPIM</h2>
                <nav>
                    <ul>
                        <li><a className={`${style.categories} ${style.active}`} href="#home">Home</a></li>
                        <li><a className={style.categories} href="#services">Services</a></li>
                        <li><a className={style.categories} href="#about">About</a></li>
                        <li><a className={style.categories} href="#help">Help</a></li>
                        <li><a className={style.categories} href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <span className={style.signin}><Link to='/signin'>Sign In</Link></span>
            </div>
        </header>
    )
}