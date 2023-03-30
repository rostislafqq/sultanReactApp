import s from './footer.module.scss'
import logo from '../../assets/logoWhite.svg'
import arrow from '../../assets/arrowWhite.svg'
import download from '../../assets/download.svg'
import whats from '../../assets/whats.svg'
import tg from '../../assets/telegram.svg'
import visa from '../../assets/Visa.jpg'
import mc from '../../assets/masterCard.jpg'

const Footer =() =>{
    return(
        <footer className={s.footer}>
            <div className={s.company}>
                <img src={logo} alt="logo" />
                <p className={s.compIntro}>Компания «Султан» — снабжаем розничные магазины товарами 
"под ключ" в Кокчетаве и Акмолинской области</p>
                <p className={s.subText}>Подпишись на скидки и акции</p>
                <div className={s.subs}>
                    <input className={s.typeEM} type="text"  placeholder='Введите ваш E-mail'/>
                    <img  src={arrow} alt="arrow" />
                </div>
            </div>
            <div className={s.menu}>
                <h2 className={s.commonHeader}>Меню сайта:</h2>
                <p className={s.commonText}>О компании</p>
                <p className={s.commonText}>Доставка и оплата</p>
                <p className={s.commonText}>Возврат</p>
                <p className={s.commonText}>Контакты</p>
            </div>
            <div className={s.catigor}>
            <h2 className={s.commonHeader}>Категории:</h2>
                <p className={s.commonText}>Бытовая химия</p>
                <p className={s.commonText}>Косметика и гигиена</p>
                <p className={s.commonText}>Товары для дома</p>
                <p className={s.commonText}>Товары для детей и мам</p>
                <p className={s.commonText}>Посуда</p>
            </div>
            <div className={s.pricelist}>
                <h2 className={s.commonHeader}>Скачать прайс-лист:</h2>
                <button className={s.download}>Прайс-лист <img src={download} alt="down" /></button>
                <p className={s.contact}>Связь в мессенджерах:</p>
                <div className={s.social}>
                    <img className={s.whats} src={whats} alt="whatsapp" />
                    <img src={tg} alt='telegramm' />
                </div>
            </div>
            <div className={s.contactUs}>
                <h2 className={s.commonHeader}>Контакты:</h2>
                <p className={s.number}>+7 (777) 490-00-91</p>
                <p className={s.time}>время работы: 9:00-20:00</p>
                <p className={s.call}>Заказать звонок</p>
                <p className={s.email}>opt.sultan@mail.ru</p>
                <p className={s.common}>На связи в любое время</p>
                <div className={s.cards}>
                    <img className={s.visa} src={visa} alt="card" />
                    <img src={mc} alt="card" />
                </div>
            </div>
        </footer>
    )
}

export default Footer