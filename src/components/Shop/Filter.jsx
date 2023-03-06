import React from 'react'
import styles from './Filter.module.css'

export default function Filter() {

    function displayAll(){
        let shopItems = document.getElementById('products')

        for(var i = 0; i < shopItems.childElementCount; i++){
            let itemBox = shopItems.children[i]
            itemBox.className = styles.active
        }
    }

    function unfilter(){
        let shopItems = document.getElementById('products')

        for(var i = 0; i < shopItems.childElementCount; i++){
            let itemBox = shopItems.children[i]
            itemBox.className = styles.active
        }
    }

    function filterCPU(e){

        unfilter()

        let searchFor = e.target.innerText
        let shopItems = document.getElementById('products')

        for(var i = 0; i < shopItems.childElementCount; i++){

            let itemBox = shopItems.children[i]
            let cpuBox = itemBox.children[1].children[0].children[1]

            if(searchFor === 'OTHER'){
                if(cpuBox.innerHTML.includes('INTEL') === true || cpuBox.innerHTML.includes('AMD') === true){
                    itemBox.className = styles.hidden
                }
            }

            else if(cpuBox.innerHTML.includes(searchFor) !== true){
                itemBox.className = styles.hidden
            }
        }
    }

    function filterGPU(e){

        unfilter()

        let searchFor = e.target.innerText
        let shopItems = document.getElementById('products')

        for(var i = 0; i < shopItems.childElementCount; i++){

            let itemBox = shopItems.children[i]
            let gpuBox = itemBox.children[1].children[1].children[1]

            if(searchFor === 'OTHER'){
                if(gpuBox.innerHTML.includes('INTEL') === true || gpuBox.innerHTML.includes('AMD') === true || gpuBox.innerHTML.includes('NVIDIA')){
                    itemBox.className = styles.hidden
                }
            }

            else if(gpuBox.innerHTML.includes(searchFor) !== true){
                itemBox.className = styles.hidden
            }
        }
    }

    function filterRAM(e){

        unfilter()

        let searchFor = e.target.innerText
        let shopItems = document.getElementById('products')

        switch(searchFor){
            case '≤ 4 GB':
                searchFor = 4
                break
            case '8 GB':
                searchFor = 8
                break
            case '16 GB':
                searchFor = 16
                break
            case '≥ 32 GB':
                searchFor = 32
                break
            default: 
                break
        }

        for(var i = 0; i < shopItems.childElementCount; i++){

            let itemBox = shopItems.children[i]
            let ramBox = itemBox.children[1].children[3].children[0].innerHTML

            ramBox = ramBox.replace(/\D/g,'')

            if(searchFor === 32){
                if(ramBox < searchFor){
                    itemBox.className = styles.hidden
                }
            }

            else if(searchFor === 4){
                if(ramBox > searchFor){
                    itemBox.className = styles.hidden
                }
            }

            else if(ramBox !== searchFor){
                itemBox.className = styles.hidden
            }
        }
    }

    function filterStorage(e){

        unfilter()

        let searchFor = e.target.innerText
        let shopItems = document.getElementById('products')

        switch(searchFor){
            case '≤ 128 GB':
                searchFor = 128
                break
            case '256 GB':
                searchFor = 256
                break
            case '512 GB':
                searchFor = 512
                break
            case '> 512 GB':
                searchFor = 513
                break
            default: 
                break
        }

        for(var i = 0; i < shopItems.childElementCount; i++){

            let itemBox = shopItems.children[i]
            let ramBox = itemBox.children[1].children[4].children[0].innerHTML

            ramBox = ramBox.replace(/\D/g,'')

            if(searchFor === 128){
                if(ramBox > searchFor){
                    itemBox.className = styles.hidden
                }
            }

            else if(searchFor === 513){
                if(ramBox < searchFor){
                    itemBox.className = styles.hidden
                }
            }

            else if(ramBox !== searchFor){
                itemBox.className = styles.hidden
            }
        }
    }


return (

    <div className={styles.wrapper}>

        <ul className={styles.list}>
            <h1 className={styles.subtitle}> Filters </h1>
        </ul>

        <ul className={styles.list}>
            <h1 className={styles.subtitle}> CPU </h1>
            <li className={styles.tab} onClick={displayAll}> Show All </li>
            <li className={styles.tab} onClick={filterCPU}> INTEL </li>
            <li className={styles.tab} onClick={filterCPU}> AMD </li>
            <li className={styles.tab} onClick={filterCPU}> OTHER </li>
        </ul>

        <ul className={styles.list}>
            <h1 className={styles.subtitle}> GPU </h1>

            <li className={styles.tab} onClick={displayAll}> Show All </li>
            <li className={styles.tab} onClick={filterGPU}> NVIDIA </li>
            <li className={styles.tab} onClick={filterGPU}> INTEL </li>
            <li className={styles.tab} onClick={filterGPU}> AMD </li>
            <li className={styles.tab} onClick={filterGPU}> OTHER </li>
        </ul>

        <ul className={styles.list}>
            <h1 className={styles.subtitle}> RAM </h1>

            <li className={styles.tab} onClick={displayAll}> Show All </li>
            <li className={styles.tab} onClick={filterRAM}> ≤ 4 GB </li>
            <li className={styles.tab} onClick={filterRAM}> 8 GB </li>
            <li className={styles.tab} onClick={filterRAM}> 16 GB </li>
            <li className={styles.tab} onClick={filterRAM}> ≥ 32 GB </li>

        </ul>

        <ul className={styles.list}>
            <h1 className={styles.subtitle}> STORAGE </h1>
            
            <li className={styles.tab} onClick={displayAll}> Show All </li>
            <li className={styles.tab} onClick={filterStorage}> ≤ 128 GB </li>
            <li className={styles.tab} onClick={filterStorage}> 256 GB </li>
            <li className={styles.tab} onClick={filterStorage}> 512 GB </li>
            <li className={styles.tab} onClick={filterStorage}> {'>'} 512 GB </li>
        </ul>

    </div>

)
}
