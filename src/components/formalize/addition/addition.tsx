import s from './addition.module.scss'
import money from '../../../assets/money.svg'
import car from '../../../assets/car.svg'
import qw from '../../../assets/qw.svg'

const Addition =() =>{
    return(
        <div className={s.container}>
            <div className={s.commonCard}>
                <div className={s.commonCardHeader}>
                    <img className={s.commonIMG} src={money} alt="money" />
                    <h3 className={s.commonHeader}>Оплата</h3>
                </div>
                <p className={s.commonIntro}>Принимаем оплату наличными, по карте и через расчетный счет.</p>
            </div>
            <div className={s.commonCard}>
                <div className={s.commonCardHeader}>
                    <img className={s.commonIMG} src={car} alt="car" />
                    <h3 className={s.commonHeader}>Доставка</h3>
                </div>
                <p className={s.commonIntro}>Бесплатная доставка от 10 000 ₸<br/>
по области. Наша доставка работает ежедневно.</p>
            </div>
            <div className={s.commonCard}>
                <div className={s.commonCardHeader}>
                    <img className={s.commonIMG} src={qw} alt="qw" />
                    <h3 className={s.commonHeader}>возникли вопросы?</h3>
                </div>
                <p className={s.commonIntro}>Звоните: +7 777 490 00 91<br/>
Менеджер Вам ответит на все вопросы.</p>
            </div>
            <div className={s.commonHeaderCont}>
                <p className={s.commonHeaderText}>2</p>
                <h3 className={s.commonHeader}>адрес доставки</h3>
            </div>
            <div className={s.form}>
                <h3 className={s.formHeader}>Комментарий</h3>
                <textarea className={s.comment} placeholder='Введите ваш комментарий'/>
            </div>
        </div>
    )
}

export default Addition