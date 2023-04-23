import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import styles from './cutomer_swipper.module.scss'
import CountryCard from '../CountryCard/CountryCard';
import SwipperButton from './SwipperButton/SwipperButton'
import { Navigation } from 'swiper';


const CustomSwipper = () => {
    const arr = new Array(10).fill(1)

    const swiperRef = useRef();


    return (
        <div className={styles['container']}>
            <div className={styles['btn_container']}>
                <SwipperButton prev className={styles['btn']} onClick={() => swiperRef.current?.slidePrev()} />
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={40}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                pagination={{
                    clickable: true,
                }}

                className={styles['mySwiper']}
            >
                {
                    arr.map(() => (
                        <SwiperSlide>
                            <CountryCard />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className={styles['btn_container']}>
                <SwipperButton next className={styles['btn']} onClick={() => swiperRef.current?.slideNext()} />
            </div>
        </div>
    )
}

export default CustomSwipper