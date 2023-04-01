import s from './static.module.scss'
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import sq from '../../../assets/sq.svg'
import photo from '../../../assets/photo.png'
import download from '../../../assets/download.svg'
import search from '../../../assets/search.svg'
import lins from '../../../assets/linsBlack.svg'
import blackSQ from '../../../assets/blackSQ.svg'



const Static =()=>{
    
    return(
        <>
            <Link to='/sultanReactApp'><img className={s.logo} src={logo} alt="LOGO" /></Link>
            <Link to='/sultanReactApp/catalog' className={s.catalog}>Каталог <img src={sq} alt="sq" /></Link>
            <div className={s.search}><input type="text" placeholder='Поиск...'/> <img src={search} alt="search" /></div>
            <div className={s.contact}>
                <div className={s.contactInfo}>
                <p className={s.number}>+7 (777) 490-00-91</p>
                <p className={s.time}>время работы: 9:00-20:00</p>
                <Link to='/sultanReactApp/'>Заказать звонок</Link>
                </div>
                <img src={photo} alt="photoPers" />
            </div>
            <button className={s.priceBtn}>
            Прайс-лист
            <img className={s.down} src={download} alt="download" />
            </button>
            <div className={s.adapive}>

                <Link to='/sultanReactApp/catalog' className={s.sqContainer}>
                    <img src={blackSQ} alt="sq" />
                    <p className={s.adaptivCatalog}>Каталог</p>
                </Link>
                <div className={s.bord}></div>
                <div className={s.sqContainer}>
                    <img src={lins} alt="sq" />
                    <p className={s.adaptivCatalog}>Каталог</p>
                </div>
            </div>
        </>
    )
}
export default Static