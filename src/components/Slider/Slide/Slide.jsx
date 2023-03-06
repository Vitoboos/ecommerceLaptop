import React from 'react'
import styles from './Slide.module.css'
import { useContext, useState } from 'react'
import { GAMING, CHROMEBOOKS, BUSINESS } from '../../productsList/products'
import { CartContent } from '../../Cart/CartContext'

export default function Slide(props) {

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
                console.log(CHROMEBOOKS[props.id])
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
    
    <div className={`${styles.slide} ${props.state}`}>

        <img src={props.url} className={styles.image} alt=''/>

        <div className={styles.specs}>
            <h3 className={styles.item}> {props.model} </h3>
            <h3 className={styles.item}> {props.cpu} </h3>
            <h3 className={styles.item}> {props.gpu} </h3>
            <h3 className={styles.item}> {props.ram} </h3>
            <h3 className={styles.item}> {props.display} </h3>
            <h3 className={styles.item}> {props.storage} </h3>
            <button className={styles.addBtn} onClick={addToCart}> {buttonText} </button>
        </div>

</div>

)}
