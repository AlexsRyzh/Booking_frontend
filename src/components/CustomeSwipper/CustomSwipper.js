import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import styles from './cutomer_swipper.module.scss'
import CountryCard from '../CountryCard/CountryCard';
import SwipperButton from './SwipperButton/SwipperButton'
import { Navigation } from 'swiper';
import useWindowSize from '../../hooks/useWindowSize';

const CustomSwipper = () => {
    const arr = new Array(10).fill(1)

    const { width } = useWindowSize()
    const swiperRef = useRef();


    return (
        <div className={styles['container']}>
            {
                width > 1100 &&
                <div className={styles['btn_container']}>
                    <SwipperButton prev className={styles['btn']} onClick={() => swiperRef.current?.slidePrev()} />
                </div>
            }
            <Swiper
                slidesPerView={1}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    720: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1100: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1360: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                }}

                className={styles['mySwiper']}
            >
                {
                    arr.map(() => (
                        <SwiperSlide >
                            <CountryCard />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {
                width > 1100 &&
                <div className={styles['btn_container']}>
                    <SwipperButton next className={styles['btn']} onClick={() => swiperRef.current?.slideNext()} />
                </div>
            }

        </div>
    )
}

export default CustomSwipper