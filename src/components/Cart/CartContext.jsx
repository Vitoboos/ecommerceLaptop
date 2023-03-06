import React, {useState} from "react"
import { GAMING, CHROMEBOOKS, BUSINESS } from "../productsList/products"

export const CartContent = React.createContext([])   

export function setQty(itemClass, id){
    switch (itemClass){

        case 'gaming':
            return(GAMING[id].quantity)
        
        case 'chromebook':
            return(CHROMEBOOKS[id-7].quantity)

        case 'business':
            return(BUSINESS[id-14].quantity)
    }
}

export function changeQty(itemClass, id, number){

    switch (itemClass){

        case 'gaming':
            GAMING[id].quantity += number
            console.log(GAMING[id].quantity)
            return(GAMING[id].quantity)
        
        case 'chromebook':
            CHROMEBOOKS[id-7].quantity += number
            return (CHROMEBOOKS[id-7].quantity)

        case 'business':
            BUSINESS[id-14].quantity += number
            return (BUSINESS[id-14].quantity)
    }
}

