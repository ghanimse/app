import { Link } from 'react-router-dom'
import style from './header.module.scss'


export default function Header() {
    
    return (
        <header>
            <div className={style.container}>
                <h2>brand</h2>
                <nav>
                    <ul>
                        <li className={style.categories}>About Us</li>
                        <li className={style.categories}>Help</li>
                        <li className={style.categories}>Contact Us</li>
                        <li className={style.signin}><Link to='/signin'>Sign In</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}