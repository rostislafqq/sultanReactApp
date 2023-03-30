import CatalogHeader from "./catalogHeader/catalogHeader"
import ChoseContainer from "./chose/choseContainer"
import s from './catalogContainer.module.scss'
import SidebarContainer from "./sidebar/sidebarContainer"
import CatalogCardsContainer from "./catalogCards/catalogCardsContainer"

const Catalog = ()=>{
    return(
        <>
        <CatalogHeader />
        <ChoseContainer/>
        <div className={s.container}>
            <SidebarContainer/>
            <CatalogCardsContainer />
        </div>
        </>
    )
}
export default Catalog