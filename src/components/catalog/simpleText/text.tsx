import { useSelector } from 'react-redux'
import s from './text.module.scss'
import { RootState } from '../../../store/store'

const Text = () =>{
   //burger 
   const burgerActive = useSelector((state:RootState)=>state.burger.burgerActive)
    return(
        <p className={window.innerWidth<=650&&!burgerActive?s.none:s.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
        </p>
    )
}
export default Text