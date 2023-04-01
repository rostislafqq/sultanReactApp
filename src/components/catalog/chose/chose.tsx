import s from './chose.module.scss'

interface ChoseProps {
    choseItem:string,
    setChosen: React.Dispatch<React.SetStateAction<string>>
    chosen:string
}

const Chose:React.FC<ChoseProps> = ({chosen,setChosen,choseItem }) =>{
 
    return(
        <li onClick={()=>{
            setChosen(choseItem)
        }} className={chosen===choseItem?`${s.item} ${s.active}`:`${s.item} `}>
            {choseItem}
        </li>
    )
}

export default Chose