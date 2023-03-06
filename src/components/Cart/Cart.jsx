import React , {Fragment, useContext}  from 'react'
import CartItem from './CartItem'
import { CartContent } from './CartContext'
import styles from './Cart.module.css'

export default function Cart() {

    const items = useContext(CartContent)

    function Checkout(){
        alert('Thanks for buying!')
        window.location.reload()
    }


return (

    <Fragment>

        <h1 className={styles.title}> Your cart items </h1>

        <div>
            {items.map((product) => {
                return <CartItem data={product} key={product.id}/>;
            })}
        </div>

        <button className={styles.checkout} onClick={Checkout}> Checkout </button>

    </Fragment>

)}
