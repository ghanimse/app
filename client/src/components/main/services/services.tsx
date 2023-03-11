import { faCalculator, faCoins, faListCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './services.module.scss'


export default function Services() {
    return (
        <section id='services' className={style.services}>
            <div className={style.container}>
                <div className={style.header}>
                    <h2>Services</h2>
                    <p>Taking Your Business To The Next Level</p>
                </div>
                <ul className={style.categories}>
                    <li>
                        <span className={style.icon}><FontAwesomeIcon icon={faListCheck} /></span>
                        <span className={style.name}>Business Plan</span>
                        <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                    </li>
                    <li>
                        <span className={style.icon}><FontAwesomeIcon icon={faCalculator} /></span>
                        <span className={style.name}>Accounting Services</span>
                        <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                    </li>
                    <li>
                        <span className={style.icon}><FontAwesomeIcon icon={faCoins} /></span>
                        <span className={style.name}>Finance Optimization</span>
                        <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}