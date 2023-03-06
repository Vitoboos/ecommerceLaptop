import React, { Fragment } from 'react'
import Slider from '../../components/Slider/Slider'
import FourPanelGrid from '../../components/4PanelGrid/FourPanelGrid'
import BrandNav from '../../components/BrandNav/BrandNav'

export default function Frontpage() {
return (

<Fragment>

    {/* Brand Nav */}

    <BrandNav
        brand1 = 'ACER'
        brand2 = 'ALIENWARE'
        brand3 = 'ASUS'
        brand4 = 'DELL'
        brand5 = 'HP'
        brand6 = 'LENOVO'
        brand7 = 'MSI'

        icon1 = 'https://www.brandemia.org/wp-content/uploads/2011/04/acer1.jpg'
        icon2 = 'https://logos-world.net/wp-content/uploads/2020/05/Alienware-Logo.png'
        icon3 = 'https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png'
        icon4 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/2048px-Dell_logo_2016.svg.png'
        icon5 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HP_New_Logo_2D.svg/2048px-HP_New_Logo_2D.svg.png'
        icon6 = 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Branding_lenovo-logo_lenovologoposred_low_res.png'
        icon7 = 'https://upload.wikimedia.org/wikipedia/commons/1/13/Msi-Logo.jpg'
    />
    
    {/* // Gaming Slider  */}
    <Slider
        model1='Nitro 5 Gaming Laptop - AN515-45-R00V'
        id1 = {0}
        class1 = 'gaming'
        cpu1 = 'AMD Ryzen™ 5 5600H'
        gpu1 = 'NVIDIA® GeForce® GTX 1650'
        ram1 = '8 GB DDR4'
        display1 = '15.6" Full HD (1920 x 1080) 16:9 144 Hz'
        storage1 = '256 GB SSD'
        url1 = 'https://i.ytimg.com/vi/fmSmcSfC5fk/maxresdefault.jpg'

        model2='HP Victus 15z-fb000'
        id2 = {1}
        class2 = 'gaming'
        cpu2 = 'AMD Ryzen™ 5 5600H'
        gpu2 = 'NVIDIA® GeForce® GTX 1650'
        ram2 = '8 GB DDR4'
        display2 = '15.6" diagonal FHD (1920 x 1080)'
        storage2 = '256 GB SSD'
        url2 = 'https://i.ytimg.com/vi/oXoGniiqoD4/maxresdefault.jpg'

        model3='Lenovo IdeaPad Gaming 3'
        id3 = {2}
        class3 = 'gaming'
        cpu3 = 'AMD Ryzen™ 7 5800H'
        gpu3 = 'NVIDIA® GeForce® RTX™ 3050'
        ram3 = '8 GB DDR4'
        display3 = '15.6" FHD (1920 x 1080) 120 Hz'
        storage3 = '256 GB SSD'
        url3 = 'https://i.blogs.es/61d488/lenovod-ideapad-gaming-3/1366_2000.jpeg'
    />

    {/* // Gaming 4 Panel Grid */}

    <FourPanelGrid
        text = 'Trending'
        title1 = 'Predator Triton 300 PT315-53-70L0'
        title2 = 'ROG Zephyrus G15 GA503'
        title3 = 'Alienware 51m R2'
        title4 = 'MSI Katana GF76'

        id1 = {3}
        id2 = {4}
        id3 = {5}
        id4 = {6}

        class1 = 'gaming'
        class2 = 'gaming'
        class3 = 'gaming'
        class4 = 'gaming'

        price1 = '1049.99$'
        price2 = '1129.99$'
        price3 = '1399.99$'
        price4 = '1199.99$'

        url1 = 'https://images.acer.com/is/image/acer/Triton-300-PT315-53-Backliton-Black-01a-1'
        url2 = 'https://i.blogs.es/280903/ga503_rog_zephyrus_g15_moonlightwhite_01/original.jpeg'
        url3 = 'https://m.media-amazon.com/images/I/41c0UMkTrtS.jpg'
        url4 = 'https://www.lobaratosalecaro.com/wp-content/uploads/2022/06/MSI-Katana-GF76-12UE-058XES-opiniones-e1654767799722.jpg'

        cpu1 = 'Intel® Core™ i7-11800H'
        cpu2 = 'AMD R9-5900HS'
        cpu3 = 'Intel® Core™ i7-10700K'
        cpu4 = 'Intel® Core™ i7-12700H'

        gpu1 = 'NVIDIA® GeForce RTX 3070'
        gpu2 = 'NVIDIA® GeForce RTX 3060'
        gpu3 = 'NVIDIA® GeForce RTX 2070 Super'
        gpu4 = 'NVIDIA® GeForce RTX 3060'

        ram1 = '16 GB DDR4'
        ram2 = '16 GB DDR4'
        ram3 = '32 GB DDR4'
        ram4 = '16 GB DDR4'

        display1 = '15.6" (1920 x 1080) 144 Hz'
        display2 = '15.6" (2560 x 1440) 144 Hz'
        display3 = '17.3" (1920x1080) 144 Hz'
        display4 = '17.3" (1920x1080) 144 Hz'

        storage1 = '512 GB SSD'
        storage2 = '512 GB SSD'
        storage3 = '1 TB SSD'
        storage4 = '512 GB SSD'
    />

    {/* // Chromebooks Slider */}
    <Slider
        model1='Acer Chromebook Spin 714'
        id1 = {0}
        class1 = 'chromebooks'
        cpu1 = 'Intel® Core™ i5-1235U'
        gpu1 = 'Intel® Iris® Xe Graphics'
        ram1 = '16 GB DDR4'
        display1 = '14" WUXGA (1920 x 1200)'
        storage1 = '256 GB SSD'
        url1 = 'https://cdn.vox-cdn.com/thumbor/XTX6aB2w6QYm7Icz7iU0_D2ej7Y=/0x0:2040x1360/2000x1333/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23464328/bfarsace_160101_5219_0008.jpg'

        model2='IdeaPad Flex 5i Gen 7'
        id2 = {1}
        class2 = 'chromebooks'
        cpu2 = 'Intel® Core™ i7-1255U'
        gpu2 = 'Intel® Iris® Xe Graphics'
        ram2 = '16 GB DDR4'
        display2 = '14" WUXGA (1920 x 1200) 60Hz'
        storage2 = '512 GB SSD'
        url2 = 'https://www.91-cdn.com/hub/wp-content/uploads/2020/09/Lenovo-IdeaPad-Flex-5-feat-1200x900.jpg'

        model3='HP Chromebook x360'
        id3 = {2}
        class3 = 'chromebooks'
        cpu3 = 'Intel® Core™ Celeron N4020'
        gpu3 = 'Intel® UHD 600 Graphics'
        ram3 = '4 GB DDR4'
        display3 = '12.7" FHD (1366 x 768)'
        storage3 = '32 GB eMMC'
        url3 = 'https://www.techadvisor.com/wp-content/uploads/2022/06/hp_chromebook_x360_14c_main.jpg?quality=50&strip=all'
    />

    {/* // Chromebooks 4 Panel Grid */}
    <FourPanelGrid
        text = 'Trending'
        title1 = 'Samsung Galaxy Chromebook 2'
        title2 = 'Asus Chromebook Flip C536'
        title3 = 'Acer Chromebook 516 GE'
        title4 = 'Lenovo IdeaPad Duet 5'

        id1 = {3}
        id2 = {4}
        id3 = {5}
        id4 = {6}

        class1 = 'chromebooks'
        class2 = 'chromebooks'
        class3 = 'chromebooks'
        class4 = 'chromebooks'
        
        price1 = '699.99$'
        price2 = '379.99$'
        price3 = '649.99$'
        price4 = '409.99$'

        url1 = 'https://d1b5h9psu9yexj.cloudfront.net/45821/Samsung-Galaxy-Chromebook-2_20210714-210157_full.png'
        url2 = 'https://d1b5h9psu9yexj.cloudfront.net/48370/Asus-Chromebook-Flip-C536--C536EA-BI3T3-_20211119-221342_full.jpg'
        url3 = 'https://images.acer.com/is/image/acer/acer-chormebook-516-ge-cbg516-1h-backlit-on-color-wallpaper-chrome-ui-1-titanium-gray-01-1?$Product-Cards-XL$'
        url4 = 'https://p4-ofp.static.pub/fes/cms/2022/08/17/9xc3n5wtk6e90yuz1kbwmowbmsqxlo996774.png'

        cpu1 = 'Intel® Core™ i3-10110U'
        cpu2 = 'Intel® Core™ i3-1115G4'
        cpu3 = 'Intel® Core™ i7-1260P'
        cpu4 = 'Qualcomm Snapdragon 7 Gen. 2'

        gpu1 = 'Intel® Iris® Xe Graphics'
        gpu2 = 'Intel® Iris® Xe Graphics'
        gpu3 = 'Intel® Iris® Xe Graphics'
        gpu4 = 'Qualcomm Adreno 618'

        ram1 = '8 GB DDR4'
        ram2 = '8 GB DDR4'
        ram3 = '16 GB DDR4'
        ram4 = '8 GB DDR4'

        display1 = '13.3" (1920 x 1080)'
        display2 = '15.6" (1920 x 1080)'
        display3 = '16" (2560 x 1600) 120 Hz'
        display4 = '13.3" (1920x1080) 144 Hz'

        storage1 = '128 GB eMMC'
        storage2 = '128 GB SSD'
        storage3 = '256 GB SSD'
        storage4 = '256 GB eMMC'
    />
    {/* // Business Slider */}
    <Slider
        model1='Lenovo ThinkPad X1 Carbon Gen 10'
        id1 = {0}
        class1 = 'business'
        cpu1 = 'Intel® Core™ i7 vPro'
        gpu1 = 'Intel® Iris® Xe Graphics'
        ram1 = '32 GB DDR5'
        display1 = '14" Full HD (3840 x 2400)'
        storage1 = '2 TB SSD'
        url1 = 'https://wallpaperaccess.com/full/2484250.png'

        model2='Apple MacBook Pro 13'
        id2 = {1}
        class2 = 'business'
        cpu2 = 'Apple M2 Chip'
        gpu2 = 'Apple M2 Graphics'
        ram2 = '16 GB DDR4'
        display2 = '13.3" LED IPS (2560 x 1600)'
        storage2 = '512 GB SSD'
        url2 = 'https://media.gq-magazine.co.uk/photos/62b2f607b9eaa411050fd71d/master/pass/Macbook-pro-HP.jpg'

        model3='Lenovo ThinkPad P1 Gen 4'
        id3 = {2}
        class3 = 'business'
        cpu3 = 'Intel® Core™ i7-11800H '
        gpu3 = 'NVIDIA RTX™ A2000'
        ram3 = '16 GB DDR4'
        display3 = '16" WQXGA  (2560 x 1600)'
        storage3 = '1 TB SSD'
        url3 = 'https://images.hothardware.com/contentimages/newsitem/51959/content/4x3_1600x1200_highres-tp-p1-g-3.jpg'
    />
    {/* // Business 4 Panel Grid */}
    <FourPanelGrid
        text = 'Trending'
        title1 = 'Lenovo ThinkPad Z13'
        title2 = 'HP EliteBook 840 G9'
        title3 = 'Dell Latitude 5430'
        title4 = 'HP Spectre x360'

        id1 = {3}
        id2 = {4}
        id3 = {5}
        id4 = {6}

        class1 = 'business'
        class2 = 'business'
        class3 = 'business'
        class4 = 'business'

        price1 = '1299.99$'
        price2 = '749.99$'
        price3 = '689.99$'
        price4 = '749.99$'

        url1 = 'https://www.notebookcheck.org/fileadmin/_processed_/e/5/csm_ThinkPad_Z13_Black_01_9f035c50c1.png'
        url2 = 'https://phnx-tmp-upload.s3.us-west-2.amazonaws.com/l1WiWsMekCwgnWciu0ixq6wRKousaxkWB9dVBTkn.jpg'
        url3 = 'https://phnx-tmp-upload.s3.us-west-2.amazonaws.com/XsEAzecCXhfJCYfMRn1RFWovAX1kChyFFEmZzvHR.jpg'
        url4 = 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08184647.png'

        cpu1 = 'AMD Ryzen™ PRO 6000 U'
        cpu2 = 'Intel® Core i5-1135G7'
        cpu3 = 'Intel® Core i5-1235U'
        cpu4 = 'Intel® Core i7-1165G7'

        gpu1 = 'AMD RDNA™-2'
        gpu2 = 'Intel® Iris® Xe Graphics'
        gpu3 = 'Intel® Iris® Xe Graphics'
        gpu4 = 'Intel® Iris® Xe Graphics'

        ram1 = '32 GB DDR5'
        ram2 = '8 GB DDR5'
        ram3 = '8 GB DDR4'
        ram4 = '8 GB DDR4'

        display1 = '13.3" WQXGA  (2880 x 1800)'
        display2 = '14" 1080p (1920 x 1200)'
        display3 = '14" FHD 1080p (1920 x 1080)'
        display4 = '14" FHD (1920 x 1280)'

        storage1 = '1 TB SSD'
        storage2 = '512 GB SSD'
        storage3 = '256 GB SSD'
        storage4 = '256 GB SSD'
    />
</Fragment>



)}

