import s from './formContacts.module.scss'

interface PropsFormContacts {
    setActive:React.Dispatch<React.SetStateAction<boolean>>
}

const FormContacts:React.FC<PropsFormContacts> =({setActive})=>{
    return(
        <div className={s.container}>
            <div className={s.commonCirHed}>
                <p className={s.circle}>1</p>
                <h3 className={s.circleSpan}>Контактные данные</h3>
            </div>
            <div className={s.commonForm}>
                <h3 className={s.commonHeader}>Имя*</h3>
                <input className={s.commonInput} type="text" placeholder='Введите ваше имя'/>
            </div>
            <div className={s.commonForm}>
                <h3 className={s.commonHeader}>Телефон*</h3>
                <input className={s.commonInput} type="tel" placeholder='Введите ваш телефон'/>
            </div>
            <div className={s.commonForm}>
                <h3 className={s.commonHeader}>E-mail*</h3>
                <input className={s.commonInput} type="email" placeholder='Введите ваш E-mail'/>
            </div>
            <div className={s.commonForm}>
                <h3 className={s.commonHeader}>Название организации</h3>
                <input className={s.commonInput} type="text" placeholder='Введите название организации'/>
            </div>
            <div className={s.commonCirHed}>
                <p className={s.circle}>2</p>
                <h3 className={s.circleSpan}>адрес доставки</h3>
            </div>
            <div className={s.commonForm}>
                <h3 className={s.commonHeader}>Город</h3>
                <input className={s.commonInput} type="text" placeholder='Выберите ваш город'/>
            </div>
            <div className={s.commonForm}>
                <h3 className={s.commonHeader}>Адрес</h3>
                <input className={s.commonInput} type="text" placeholder='Введите адрес доставки'/>
            </div>
            <button onClick={()=>{
                setActive(true)
            }} className={s.submit}>Подтверждение заказа   </button>
        </div>
    )
}

export default FormContacts