import React from 'react'
import styles from './BrandNav.module.css'

export default function BrandNav(props) {

    return (
    
    <div className={styles.brandSection}>

    <h1 className={styles.mainTitle}> Top brands </h1> 


    <div className={styles.brandBox}> 
        <h1 className={styles.name}> {props.brand1} </h1>
        <img className={styles.logo} src={props.icon1}/> 
    </div>

    <div className={styles.brandBox}> 
        <h1 className={styles.name}> {props.brand2}  </h1>
        <img className={styles.logo} src={props.icon2}/> 
    </div>

    <div className={styles.brandBox}> 
        <h1 className={styles.name}> {props.brand3}  </h1>
        <img className={styles.logo}  src={props.icon3}/> 
    </div>

    <div className={styles.brandBox}> 
        <h1 className={styles.name}> {props.brand4}  </h1>
        <img className={styles.logo}  src={props.icon4}/> 
    </div>

    <div className={styles.brandBox}> 
        <h1 className={styles.name}> {props.brand5}  </h1>
        <img className={styles.logo}  src={props.icon5}/> 
    </div>

    
    <div className={styles.brandBox}> 
        <h1 className={styles.name}> {props.brand6}  </h1>
        <img className={styles.logo}  src={props.icon6}/> 
    </div>

    
    <div className={styles.brandBox}> 
        <h1 className={styles.name}> {props.brand7}  </h1>
        <img className={styles.logo}  src={props.icon7}/> 
    </div>

</div>

)}
