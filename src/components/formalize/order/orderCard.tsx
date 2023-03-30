import s from './order.module.scss'
import bottle from '../../../assets/bottle.svg'
import box from '../../../assets/box.svg'

export interface PropsOrderCard {
    name:string,
    img:string,
    size:string,
    sizeType:string,
    cost:number,
    barcode?:number
}

const OrderCard:React.FC<PropsOrderCard> = ({name,img,size,sizeType,cost}) =>{

    return(<>
           <div className={s.card}>
                    <img src={img} alt="cardIMG" />
                    <div className={s.info}>
                        <div className={s.cardHeader}>
                            <img src={sizeType==='g'?box:bottle} alt="typeSize" />
                            <p className={s.size}>{size}</p>
                        </div>
                        <h3 className={s.cardName}>{name}</h3>
                        <p className={s.cost}>{cost} ₸</p>
                    </div>
                </div>
    </>
        
    )
}

export default OrderCard