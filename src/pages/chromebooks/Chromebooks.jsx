import React from 'react'
import styles from './Chromebooks.module.css'
import Shop from '../../components/Shop/Shop'
import Filter from '../../components/Shop/Filter'

export default function Chromebooks() {
return (

    <div className={styles.wrapper}>
        <Filter/>
        <Shop type='chromebooks'/>
    </div>
    
)}
