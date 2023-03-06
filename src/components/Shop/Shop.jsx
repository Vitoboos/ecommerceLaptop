import React from 'react'
import {GAMING, CHROMEBOOKS, BUSINESS} from '../../components/productsList/products'
import Product from '../Cart/Product'
import styles from './Shop.module.css'

export default function Shop(props) {

switch(props.type){

    case 'gaming':

    return (
        <div className={styles.shopItem} id='products'>
            {GAMING.map((product) => {
                return <Product data={product} key={product.id}/>;
            })}
        </div>
    )

    case 'chromebooks':

    return (
        <div className={styles.shopItem} id='products'>
            {CHROMEBOOKS.map((product) => {
                return <Product data={product} key={product.id}/>;
            })}
        </div>
    )

    case 'business':

    return (
        <div className={styles.shopItem} id='products'>
            {BUSINESS.map((product) => {
                return <Product data={product} key={product.id}/>;
            })}
        </div>
    )

}}


