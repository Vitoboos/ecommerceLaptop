import React, { Fragment }  from 'react'
import styles from './ItemGrid.module.css'
import { useContext, useState } from 'react'
import { GAMING, CHROMEBOOKS, BUSINESS } from '../../productsList/products'
import { CartContent } from '../../Cart/CartContext'

export default function ItemGrid(props) {

    const items = useContext(CartContent)
    var [buttonText, setDuplicate] = useState('Add to cart')

    function addToCart(){
        setDuplicate('In cart')
        for(var i = 0; i < items.length; i++){
            // Handle duplicate products in cart
            if(GAMING[props.id].id === items[i].id){    
                return
            }
        }
    
        switch(props.class){

            case 'gaming':
                items.push(GAMING[props.id])
                break

            case 'chromebooks':
                items.push(CHROMEBOOKS[props.id])
                break

            case 'business':
                items.push(BUSINESS[props.id])
                break
            
            default:
                break
        }
    }

return (
    
    <Fragment>
    
        <div className={styles.item}> 

            <h1 className={styles.title}> {props.title} </h1>
            <img src={props.url} alt='' className={styles.icon} />

            <ul className={styles.list}>
                <li> {props.cpu} </li>
                <li> {props.gpu} </li>
                <li> {props.ram} </li>
                <li> {props.display} </li>
                <li> {props.storage} </li>
                <li> {props.price} </li>
                <li> <button onClick={addToCart}> {buttonText} </button> </li>
            </ul>

        </div>

    </Fragment>



)}
