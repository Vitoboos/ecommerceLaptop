import React from 'react'
import styles from './Gaming.module.css'
import Shop from '../../components/Shop/Shop'
import Filter from '../../components/Shop/Filter'

export default function Gaming() {

return (
    
    <div className={styles.wrapper}>
        <Filter/>
        <Shop type='gaming'/>
    </div>

    
)}
