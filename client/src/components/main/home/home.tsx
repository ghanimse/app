import style from './home.module.scss'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className={style.background}></div>
            <section id='home' className={style.home}>
                <div className={style.container}>
                    <h1>The Power
                        <br /> of Good Advice</h1>
                    <p>I'm a paragraph. Click here to add your <br /> own text and edit me.</p> 
                    <Link className={style.signup} to='/signup'>Sign Up</Link>
                </div> 
            </section>
        </>
    )
}