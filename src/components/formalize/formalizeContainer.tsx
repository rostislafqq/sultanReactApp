import Addition from "./addition/addition"
import FormContacts from "./formContacts/formContacts"
import Order from "./order/order"
import s from './formalizeContainer.module.scss'
import FormHeader from "./formHeader/formHeader"
import Accept from "./accept/accept"
import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { deliteAllCart, setTotalCost } from "../../store/Slices/cartSlice"

const FormalizeContainer =() =>{
    //модалка
    const dispatch = useDispatch()
    const [active,setActive] = useState(false)
    const acceptMe = useCallback(()=>{
        setActive(false)
        dispatch(deliteAllCart())
        dispatch(setTotalCost())
    },[dispatch,active])

    return (
        <>
        <FormHeader />
        <div className={s.container}>
            <FormContacts setActive={setActive}/>
            <Addition />
            <Order />
            <button onClick={()=>{
                setActive(true)
            }} className={s.accept}>
                Подтверждение заказа
            </button>
            <Accept acceptMe={acceptMe} active={active} />
        </div>
        </>
    )
}

export default FormalizeContainer