import React from 'react'
import Shop from '../../components/Shop/Shop'
import Filter from '../../components/Shop/Filter'
import styles from './Business.module.css'

export default function Business() {
return (

    <div className={styles.wrapper}>
        <Filter/>
        <Shop type='business'/>
    </div>

)}
