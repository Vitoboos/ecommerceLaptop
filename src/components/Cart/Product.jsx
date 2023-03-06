import React from 'react'
import { Fragment, useContext, useState } from 'react'
import styles from './Product.module.css'
import { CartContent } from './CartContext'

export default function Product(props) {

const {id, model, modelBrand, image, cpu, cpuBrand, gpu, gpuBrand, display, displayInch, ram, ramType, storage, price} = props.data
var {quantity} = props.data
const items = useContext(CartContent)
var [buttonText, setDuplicate] = useState('Add to cart')


function addToCart(){

    setDuplicate('In cart')

    for(var i = 0; i < items.length; i++){
        console.log(id) 
        console.log(quantity)    
        // Handle duplicate products in cart

        if(id === items[i].id){ 
            return
        }
    }
    items.push(props.data)   
}

return (

    <Fragment>

    <div className={styles.productBox}>

        <div className={styles.bio}>
            <div className={styles.modelBox}>
                <h1 className={styles.nameBrand}> {modelBrand} </h1> 
                <h1 className={styles.name}> {model} </h1>
            </div>

            <img className={styles.image} src={image}/>
            <p className={styles.price}> {price} </p> 
            <button className={styles.addBtn} onClick={addToCart}> {buttonText} </button>


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
