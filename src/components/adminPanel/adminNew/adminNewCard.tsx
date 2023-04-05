import s from '../admin.module.scss'
import {useState} from 'react'
import gif from '../../../assets/loading.gif'
import { ICardStatic } from '../../../types/card'

interface PropsNewCard{
    loadedNew:boolean,
    addNewCard:(updateTask: ICardStatic) => void
}

const AdminNewCard:React.FC<PropsNewCard> = ({loadedNew,addNewCard}) =>{ 

    const [introCard,setIntroCard] = useState('')
    const [nameCard,setNameCard] = useState('')
    const [sizeTypeCard,setSizeTypeCard] = useState('')
    const [barcodeCard,setBarcodeCard] = useState(0)
    const [manufCard,setManufCard] = useState('')
    const [imgCard,setImgCard] = useState('')
    const [brandCard,setBrandCard] = useState('')
    const [costCard,setCostCard] =useState(0)
    const [sizeCard, setSizeCard] = useState('')
    const [typesCard,setTypesCard] = useState('')

    return(
        (
            <>
                {loadedNew?
                <>
                
            <h3 className={s.addNewH}> Добавить новый товар</h3>
            <div className={s.card}>
          
          <div className={s.first}>
          <div className={s.commonBlock}>
              <h3 className={s.commonHeader}>Название товара</h3>
              <input className={s.commonText} onChange={(e)=>{
                  setNameCard(e.target.value)
              }} value={nameCard}/>
          </div>
          <div className={s.commonBlock}>
              <h3 className={s.commonHeader}>Размер</h3>
              <input className={s.commonText} onChange={(e)=>{
                  setSizeCard(e.target.value)
              }} value={sizeCard}/>
          </div>
          <div className={s.commonBlock}>
              <h3 className={s.commonHeader}>Тип размера</h3>
              <select onChange={(e)=>{
                  setSizeTypeCard(e.target.value)
              }} value={sizeTypeCard}>
                  <option value="g">грамм</option>    
                  <option value="ml">миллилитр</option>   
              </select>
          </div>
          <div className={s.commonBlock}>
              <h3 className={s.commonHeader}>Штрихкод</h3>
              <input type='number' className={s.commonText} onChange={(e)=>{
                 setBarcodeCard(Number(e.target.value)) 
              }} value={barcodeCard}/>
          </div>
          <div className={s.commonBlock}>
              <h3 className={s.commonHeader}>Производитель</h3>
              <input className={s.commonText} onChange={(e)=>{
                  setManufCard(e.target.value)
              }} value={manufCard}/>
          </div>
          </div>
          <div className={s.second}>
          <div className={s.commonBlock}>
              <h3 className={s.commonHeader}>Бренд</h3>
              <input className={s.commonText} onChange={(e)=>{
                  setBrandCard(e.target.value)
              }} value={brandCard}/>
          </div>
          <div className={s.commonBlock}>
              <h3 className={s.commonHeader}>Цена</h3>
              <input className={s.commonText} onChange={(e)=>{
                  setCostCard(Number(e.target.value))
              }} value={costCard}/>
          </div>
          <div className={s.commonBlock}>
              <h3 className={s.commonHeader}>Тип</h3>
              <input className={s.commonText} onChange={(e)=>{
                  setTypesCard(e.target.value)
              }} value={typesCard}/>
          </div>
          <div className={s.commonBlock}>
              <h3 className={s.commonHeader}>Картинка товара</h3>
              <input className={s.commonText} onChange={(e)=>{
                  setImgCard(e.target.value)
              }} value={imgCard}/>
          </div>
          <div className={s.commonBlock}>
              <h3 className={s.commonHeader}>Описание</h3>
              <input className={s.commonText} onChange={(e)=>{
                  setIntroCard(e.target.value)
              }} value={introCard}/>
          </div>
          </div>
         
         <div className={s.btnContaier}>
         <button onClick={()=>{
            addNewCard({
                name: nameCard,
                size: sizeCard,
                sizeType: sizeTypeCard,
                barcode: barcodeCard,
                manuf: manufCard,
                brand: brandCard,
                cost: costCard,
                types: typesCard.split(','),
                img: imgCard,
                intro: introCard,
            })
         }} className={s.btn}>Добавить новый товар</button>
        
         </div>
      </div></>
                :<img src={gif} alt='loading'/>}
            </>
      
           
        )
    )
}

export default AdminNewCard