import { useSelector } from 'react-redux'
import Contacts from './contacts/contacts'
import Cart from './content/cart'
import Static from './content/static'
import s from './header.module.scss'
import { RootState } from '../../store/store'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { setBurger } from '../../store/Slices/burgerSlice'

const Header =()=>{
    const cost = useSelector((state:RootState)=> state.cart.totalCost)
    const count = useSelector((state:RootState)=>state.cart.totalCount)
    //burger логика
    const dispatch = useDispatch()
    const burgerActive = useSelector((state:RootState)=>state.burger.burgerActive)
    const toggleBurger = useCallback(()=>{
        dispatch(setBurger(!burgerActive))
    },[dispatch,burgerActive])

    return(
        <header className={s.container}>
            <Contacts />
            <div className={s.info}>
                <Static />
                <Cart toggleBurger={toggleBurger} cost={cost} count={count}/>
            </div>
        </header>
    )
}
export default Header