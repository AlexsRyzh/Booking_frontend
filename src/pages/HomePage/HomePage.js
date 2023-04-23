import React from 'react'
<<<<<<< HEAD
import styles from './home_page.module.scss'
import NavBar from '../../components/NavBar/NavBar'
import Carousel from '../../components/Carousel/Carousel'
import CarouselPage from '../../components/CarouselPage.js/CarouselPage'
import img_sl1 from '../../assets/home_slider.png'
import img_sl2 from '../../assets/slider_2.png'
import img_sl3 from '../../assets/image3.png'
import img_sl4 from '../../assets/image4.png'
import BlockTitle from '../../components/BlockTitle/BlockTitle'
import { Swiper, SwiperSlide } from "swiper/react";
import CustomSwipper from '../../components/CustomeSwipper/CustomSwipper'

export const HomePage = () => {
    return (
        <div className={styles['container']}>
            {/* <div className={styles['nav_container']}>
                <NavBar />
            </div> */}
            <Carousel infinite>
                <CarouselPage
                    img={img_sl1}
                    town="Гонконг"
                    price={123435}
                />
                <CarouselPage
                    img={img_sl2}
                    town="Гонконг"
                    price={123435}
                />
                <CarouselPage
                    img={img_sl3}
                    town="Гонконг"
                    price={123435}
                />
                <CarouselPage
                    img={img_sl4}
                    town="Гонконг"
                    price={123435}
                />
            </Carousel>
            <div className={styles['content']}>
                <BlockTitle
                    title={'Особые предложения'}
                />
                <CustomSwipper />
            </div>

        </div>

=======

export const HomePage = () => {
    return (
        <div>HomePage</div>
>>>>>>> 03ef4fb8c59c822f8a61cd0b6cbc5dfae1b7a9c4
    )
}
