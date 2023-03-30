export interface ICardStatic{
    name:string,
    size:string,
    sizeType:string,
    barcode:number,
    manuf:string,
    brand:string,
    cost:number,
    img:string,
    intro:string,
    types:string[],
    id?:number
}

export interface IManuf{
    manuf:string,
    count:number,
    checked:boolean
}

export interface IFetchCards {
    chosenItem:string,
    order:string,
    paginationActive:number,
    manufParam:string,
    maxCost:number,
    minCost:number
}

export interface ISortCards {
    order:string,
    chosenItem:string,
}

export interface ISetCheck {
    manuf:string,
    check:boolean
}

export interface IOpenCard{
    name:string,
    size:string,
    sizeType:string,
    barcode:number,
    manuf:string,
    brand:string,
    cost:number,
    img:string,
    intro:string ,
    setIntroStatus:React.Dispatch<React.SetStateAction<boolean>>,
    introStatus:boolean,
    setSpeci:React.Dispatch<React.SetStateAction<boolean>>,
    speci:boolean,
}

export interface costParam {
    costMin:number,
    costMax:number
}