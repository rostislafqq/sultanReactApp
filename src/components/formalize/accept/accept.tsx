import s from './accept.module.scss'
import x from '../../../assets/x.svg'
import accept from '../../../assets/accept.svg'
import { Link } from 'react-router-dom'

interface PropsAccept{
    acceptMe:()=>void,
    active:boolean
}

const Accept:React.FC<PropsAccept> = ({active,acceptMe}) =>{
    return(
        <div className={active?'':s.wrapper}>
            <div className={s.overlay}>
            <div className={s.container}>
            <Link to='/' ><img onClick={()=>{
                acceptMe()
            }} src={x} alt='x' className={s.mark}/></Link>
            <div className={s.intro}>
                <img className={s.accept} src={accept} alt="accept" />
                <h2 className={s.header}>Спасибо за заказ</h2>
                <p className={s.txt}>Наш менеджер свяжется с вами в ближайшее время</p>
            </div>
        </div>
        </div>
        </div>
        
       
    )
}

export default Accept