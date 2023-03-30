import { useSelector } from 'react-redux'
import s from './catalogHeader.module.scss'
import { RootState } from '../../../store/store'

interface PopUpProps {
    catigories:string[]
    setActiveCatigor:React.Dispatch<React.SetStateAction<string>>
    setOrder: React.Dispatch<React.SetStateAction<string>>,
    setChosenItem:React.Dispatch<React.SetStateAction<string>>
}

const PopUp:React.FC<PopUpProps> =({catigories,setActiveCatigor, setOrder,setChosenItem})=>{
    const active = useSelector((state:RootState)=>state.popUp.popUpActive)
    return(
        //popUpActive s.popUp
        <div className={active?s.popUpActive :s.popUp}>
            <ul>
                 {catigories.map((v,i)=> <li onClick={()=>{
                    setActiveCatigor(v)
                    if(v.includes('Название')){
                        setChosenItem('name')
                    }
                    else{
                        setChosenItem('cost')
                    }
                    if(v.includes('(возрастание)')){
                        setOrder('asc')
                    }
                    else{
                        setOrder('desc')
                    }
                    
                 }} key={i}>{v}</li> )}
            </ul>
        </div>
    )
}

export default PopUp