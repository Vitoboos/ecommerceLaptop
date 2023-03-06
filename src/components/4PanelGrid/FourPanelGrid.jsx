import React, { Fragment } from 'react'
import styles from './FourPanelGrid.module.css'
import ItemGrid from './ItemGrid/ItemGrid'
export default function FourPanelGrid(props) {

return (

    <Fragment>

        <div className={styles.wrapper}>

        <h1 className={styles.title}> {props.text} </h1>

        <ItemGrid id={props.id1} class={props.class1} title={props.title1} url={props.url1} cpu={props.cpu1} gpu={props.gpu1} ram={props.ram1} display={props.display1} storage={props.storage1} price={props.price1}/>
        <ItemGrid id={props.id2} class={props.class2} title={props.title2} url={props.url2} cpu={props.cpu2} gpu={props.gpu2} ram={props.ram2} display={props.display2} storage={props.storage2} price={props.price2}/>
        <ItemGrid id={props.id3} class={props.class3} title={props.title3} url={props.url3} cpu={props.cpu3} gpu={props.gpu3} ram={props.ram3} display={props.display3} storage={props.storage3} price={props.price3}/>
        <ItemGrid id={props.id4} class={props.class4} title={props.title4} url={props.url4} cpu={props.cpu4} gpu={props.gpu4} ram={props.ram4} display={props.display4} storage={props.storage4} price={props.price4}/>

        </div>

    </Fragment>

)}
