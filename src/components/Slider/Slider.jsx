import React, { Fragment } from 'react'
import Slide from './Slide/Slide'
import styles from './Slider.module.css'

import { useState } from 'react'

export default function Slider(props) {

    const [slide1, setSlide1] = useState(styles.active)
    const [slide2, setSlide2] = useState(styles.non)
    const [slide3, setSlide3] = useState(styles.non)

    const Carousel = [slide1, slide2, slide3]

    function Left(){

        for(var i = 0; i < Carousel.length; i++){
            if(Carousel[i] !== styles.non){

                console.log(Carousel[i])

                switch(Carousel[i]){

                    case slide1:
                        setSlide1(styles.non)
                        setSlide3(styles.active)
                        break;

                    case slide2:
                        setSlide2(styles.non)
                        setSlide1(styles.active)
                        break;

                    case slide3:
                        setSlide3(styles.non)
                        setSlide2(styles.active)
                        break;

                    default:
                        break;
                }
            }
        }
    }

    function Right(){

        for(var i = 0; i < Carousel.length; i++){
            if(Carousel[i] !== styles.non){
                switch(Carousel[i]){

                    case slide1:
                        setSlide1(styles.non)
                        setSlide2(styles.active)
                        break;

                    case slide2:
                        setSlide2(styles.non)
                        setSlide3(styles.active)
                        break;

                    case slide3:
                        setSlide3(styles.non)
                        setSlide1(styles.active)
                        break;
                    
                    default:
                        break;
                }
            }
        }
    }
    
return (

    <Fragment>

        <div className={styles.wrapper}>

            <div className={styles.leftBtn}>
                <button onClick={Left}> ← </button>
            </div>

            <div  className={styles.rightBtn}>
                <button onClick={Right}> → </button>
            </div>

            <Slide
                id={props.id1}
                class = {props.class1}
                state={slide1}
                model ={props.model1}
                cpu = {props.cpu1}  
                gpu = {props.gpu1}
                ram = {props.ram1}
                display = {props.display1}
                storage = {props.storage1}
                url = {props.url1}
            />

            <Slide
                id={props.id2}
                class = {props.class2}
                state={slide2}
                model ={props.model2}
                cpu = {props.cpu2}
                gpu = {props.gpu2}
                ram = {props.ram2}
                display = {props.display2}
                storage = {props.storage2}
                url = {props.url2}
            />

            <Slide 
                id={props.id3}
                class = {props.class3}
                state={slide3}
                model ={props.model3}
                cpu = {props.cpu3}
                gpu = {props.gpu3}
                ram = {props.ram3}
                display = {props.display3}
                storage = {props.storage3}
                url = {props.url3}
            />

        </div>

    </Fragment>

)}
