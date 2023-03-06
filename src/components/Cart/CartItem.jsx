import React from 'react'
import { Fragment, useContext, useState, useRef} from 'react'
import { CartContent } from './CartContext'
import { setQty } from './CartContext'
import { changeQty } from './CartContext'
import styles from './CartItem.module.css'


export default function CartItem(props) {

const items = useContext(CartContent)
const {id, model, modelBrand, image, cpu, cpuBrand, gpu, gpuBrand, display, displayInch, ram, ramType, storage, price, itemClass} = props.data
var [numberOfItem, updateNumber] = useState(setQty(itemClass, id-1))

function sustractItem(){
    if(numberOfItem === 0){
        return
    }
    updateNumber(numberOfItem -= 1)
    changeQty(itemClass, id, -1)
}

function sumItem(){
    updateNumber(numberOfItem += 1)
    changeQty(itemClass, id, 1)
    return
}

function removeItem(e){

    console.log(id)

    for(var i = 0; i < items.length; i++){
        if(id === items[i].id){
            changeQty(itemClass, id, -numberOfItem) 
            items.splice(i, 1)
        }
    }    

    console.log(items)

    e.target.parentElement.parentElement.remove()

}

return (

    <Fragment>

    <div className={styles.productBox}>

        <div className={styles.bio}>
            <div className={styles.modelBox}>
                <h1 className={`${styles.nameBrand}`}> {modelBrand} </h1> 
                <h1 className={styles.name}> {model} </h1>
            </div>

            <img className={styles.image} src={image}/>
            <p className={styles.price}> {price} </p> 
            <div className={styles.quantity}>
                <button onClick={sustractItem}> - </button>
                <input className={styles.qtyMeter} type="number" value={numberOfItem} readOnly/>
                <button onClick={sumItem}> + </button>
            </div>
            <button  className={styles.deleteSelf} onClick={removeItem}> Remove from Cart </button>
        </div>
        
        <div className={styles.specs}>
            <div className={styles.item}>
                <p> CPU: {cpu} </p>
                <p className={styles.secondary}> Brand: {cpuBrand} </p>
            </div>

            <div className={styles.item}>
                <p> GPU: {gpu} </p>
                <p className={styles.secondary}> Brand: {gpuBrand} </p>
            </div>

            <div className={styles.item}>
                <p> Display: {display} </p>
                <p className={styles.secondary}> Inches: {displayInch} </p>
            </div>

            <div className={styles.item}>
                <p> RAM: {ram} </p>
                <p className={styles.secondary}> Type: {ramType} </p>
            </div>

            <div className={styles.item}>
                <p> Storage: {storage} </p>
            </div>
        </div>

    </div>

    </Fragment>


)}
