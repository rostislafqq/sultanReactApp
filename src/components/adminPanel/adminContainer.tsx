import { useSelector } from 'react-redux'
import s from './admin.module.scss'
import AdminCard from './adminCard/adminCard'
import { RootState } from '../../store/store'
import AdminNewCard from './adminNew/adminNewCard'
import {useCallback,useState} from 'react'
import { useDispatch } from 'react-redux'
import { fetchTotalCards } from '../../store/Slices/cardsSlice'
import { ICardStatic } from '../../types/card'

const AdminContainer = () =>{
    const cards = useSelector((state:RootState)=>state.cards.cardsTotal)
    const dispatch = useDispatch()

    //new card
    const [ loadedNew, setLoaderNew] = useState(true)
    const addNewCard = useCallback((updateTask:ICardStatic)=>{
        setLoaderNew(false)
        fetch('https://62dfc3bd976ae7460bf328c3.mockapi.io/cards', {
          method: 'POST',
          headers: {'content-type':'application/json'},
          // Send your data in the request body as JSON
          body: JSON.stringify(updateTask)
        }).then(res => {
          if (res.ok) {
            setLoaderNew(true)
            dispatch(fetchTotalCards())
              return res.json();
          }
          // handle error
        })
    },[])

    //update card 
    const [loadUpdate,setLoadUpdate] = useState(true)
    const updateCard = useCallback((updateTask:ICardStatic,id:any)=>{
        setLoadUpdate(false)
        if(id!==undefined){
            fetch(`https://62dfc3bd976ae7460bf328c3.mockapi.io/cards/${id+1}`, {
            method: 'PUT', 
            headers: {'content-type':'application/json'},
            body: JSON.stringify(updateTask)
    }).then(res => {
      if (res.ok) {
          setLoadUpdate(true)
          return res.json();
      }
    
    })}
    },[])

    return(
        <div className={s.container}>
            <h1 className={s.header}>Админ панель</h1>
            <div className={s.cardsWrapper}>
                {cards.map((v,i)=><AdminCard updateCard={updateCard} loadUpdate={loadUpdate} id={i} intro={v.intro} key={v.barcode} types={v.types} name={v.name} sizeType={v.sizeType} barcode={v.barcode} manuf={v.manuf} img={v.img} brand={v.brand} cost={v.cost}  size={v.size}/>)}
            </div>
            <AdminNewCard addNewCard={addNewCard} loadedNew={loadedNew}/>
        </div>
    )
}

export default AdminContainer