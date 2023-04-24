import React, { useState, useEffect, useRef } from 'react'
import styles from './carousel.module.scss'
import useWindowSize from '../../hooks/useWindowSize'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper";
import "swiper/css/pagination";




const Carousel = ({ children, infinite, ...props }) => {
    const arr = new Array(5).keys()
    const pagination = {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };

    const { width } = useWindowSize()

    const swiperRef = useRef(null)
    const lines = new Array(4).fill(0)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        swiperRef.current.setTransition(500)
    }, [])

    return (
        <div className="App">
            <Swiper
                className="mySwiper"
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                loop={true}
                onSlideChange={() => {
                    setOffset(swiperRef.current.realIndex)
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                {
                    children.map((page, index) => (
                        <SwiperSlide className="slide" key={index}>
                            {page}
                        </SwiperSlide>
                    ))
                }
                <div className={styles['progress']} style={{
                    left: `${((width - 1440) / 2 > 0 ? (width - 1440) / 2 + 60 : 60)}px`
                }}>
                    {lines.map((value, index) => (
                        <div
                            className={styles['line'] + " " + ((offset === index) ? styles['active'] : "")}
                            onClick={() => {
                                setOffset(index)
                                swiperRef.current.slideTo(index)
                            }}
                            key={index}></div>
                    ))}
                </div>
            </Swiper>
        </div>
    )
}

export default Carousel