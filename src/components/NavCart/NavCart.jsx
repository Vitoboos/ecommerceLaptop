import React, { Fragment } from 'react'
import styles from './NavCart.module.css'
import { Link } from 'react-router-dom'

export default function NavCart(props) {
return (

    <Fragment>

    <div className={styles.mainBox}>

    <ul className={styles.tabs}>

        <Link to='/home' className={styles.tab}> 
            <li> {props.tab1} </li>             
        </Link>

        <Link to='/gaming' className={styles.tab}> 
            <li> {props.tab2} </li>             
        </Link>

        <Link to='/chromebooks' className={styles.tab}> 
            <li> {props.tab3} </li>             
        </Link>

        <Link to='/business' className={styles.tab}> 
            <li> {props.tab4} </li>             
        </Link>

    </ul>

    <Link to='/cart' className={styles.cartSide}>
        <img className={styles.icon} src={props.icon} alt='Logo'/>
    </Link>

    </div>



    </Fragment>

)}
