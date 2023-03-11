import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './contact.module.scss'

export default function Contact() {
    return (
        <div id='contact' className={style.container}>
            <div className={style.header}>
                <h3>contact</h3>
                <span className={style.para}>Let's Work Together</span>
            </div>
            <div className={style.main}>
                <div className={style.leftSide}>
                    <p className={style.address}>500 Terry francois St. San Francisco, CA 94158</p>
                    <p className={style.address}>500 Terry francois St. San Francisco, CA 94158</p>
                    <p className={style.email}><a href="mailto:info@mysite.com">info@mysite.com</a></p>
                    <p className={style.phone}>Tel: 06.XX.XX.XX.XX</p>
                    <span className={style.icon}><a href=""><FontAwesomeIcon icon={faFacebookF} /></a></span>
                    <span className={style.icon}><a href=""><FontAwesomeIcon icon={faInstagram} /></a></span>
                    <span className={style.icon}><a href=""><FontAwesomeIcon icon={faYoutube} /></a></span>
                </div>
                <div className={style.rightSide}>
                    <div className={`${style.item} ${style.flex}`}>
                        <span>
                            <label htmlFor="firstName">First Name</label>
                            <input id='firstName' type="text" />
                        </span>
                        <span>
                            <label className={style.lastName} htmlFor="lastName">Last Name</label>
                            <input id='lastName' type="text" />
                        </span>
                    </div>
                    <div className={style.item}>
                        <label htmlFor="email">Email*</label>
                        <input id='email' type="text" />
                    </div>
                    <div className={style.item}>
                        <label htmlFor="">Leave us a message</label>
                        <textarea name="" id="" cols={30} rows={10}></textarea>
                    </div>

                </div>
            </div>
        </div>
    )
}