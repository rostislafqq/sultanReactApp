import s from './contacts.module.scss'
import { Link } from 'react-router-dom';
import point from '../../../assets/point.svg'
import email from '../../../assets/email.svg'

const Contacts =()=>{
    return(
        <div className={s.contactsContainer}>
        <div className={s.contactsInfo}>
            <div className={s.place}>
                <img src={point} alt="point" />
                <p className={s.first}>
                <span className={s.street}>г. Кокчетав, ул. Ж. Ташенова 129Б </span><br/>
                <span className={s.streetPlace}>(Рынок Восточный)</span>
                </p>
            </div>
            <div className={s.contacts}>
                <img src={email} alt="email" />
                <p><span className={s.email}>opt.sultan@mail.ru </span><br/>
                <span className={s.emailText}>На связи в любое время</span></p>
            </div>

        </div>
        <ul className={s.links}>
            <li className={s.li}><Link to="/" className=''>О компании</Link></li>
            <li className={s.li}><Link to="/" className=''>Доставка и оплата</Link></li>
            <li className={s.li}><Link to="/" className=''>Возврат</Link></li>
            <li className={s.li}><Link to="/" className=''>Контакты</Link></li>
        </ul>
        </div>
    )
}
export default Contacts