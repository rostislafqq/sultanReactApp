import { useState } from 'react'
import { ICardStatic } from '../../../types/card'
import s from '../admin.module.scss'
import gif from '../../../assets/loading.gif'

interface AdminCardProps {
    updateCard:(updateTask: ICardStatic, id: any) => void,
    loadUpdate:boolean
}

const AdminCard:React.FC<ICardStatic &AdminCardProps> = ({updateCard,loadUpdate,id,types,intro,name,sizeType,barcode,manuf,img,brand,cost,size})=>{
    const [introCard,setIntroCard] = useState(intro)
    const [nameCard,setNameCard] = useState(name)
    const [sizeTypeCard,setSizeTypeCard] = useState(sizeType)
    const [barcodeCard,setBarcodeCard] = useState(barcode)
    const [manufCard,setManufCard] = useState(manuf)
    const [imgCard,setImgCard] = useState(img)
    const [brandCard,setBrandCard] = useState(brand)
    const [costCard,setCostCard] =useState(cost)
    const [sizeCard, setSizeCard] = useState(size)
    const [typesCard,setTypesCard] = useState(types.join(','))

    const [delited , setDelited] = useState(false)

    const deleteCard = () =>{
        if(id!==undefined)
        fetch(`https://62dfc3bd976ae7460bf328c3.mockapi.io/cards/${id+1}`, {
        method: 'DELETE',
        }).then(res => {
          if (res.ok) {
            setDelited(true)
            
            return res.json(); 
          }

        })
    }
    
    return(
        
        <>
        {loadUpdate? <div className={delited?s.none:s.card}>
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
                        updateCard({ name: nameCard,
                                    size: sizeCard,
                                    sizeType: sizeTypeCard,
                                    barcode: barcodeCard,
                                    manuf: manufCard,
                                    brand: brandCard,
                                    cost: costCard,
                                    types: typesCard.split(','),
                                    img: imgCard,
                                    intro: introCard,
                    }, id )}} className={s.btn}>обновить</button>
                    <button onClick={()=>{
                        deleteCard()
                    }} className={s.delit}>удалить</button>
                   </div>

                </div>:<img className={s.load} src={gif} alt='loading'/>}</>
       
    )
}

export default AdminCard




