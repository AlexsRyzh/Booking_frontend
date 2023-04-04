import React, { useState } from 'react'
import styles from './carousel.module.scss'
import useWindowSize from '../../hooks/useWindowSize'
import slider_img from '../../assets/home_slider.png'

const Carousel = () => {

    const { width, height } = useWindowSize()
    const imgs = [slider_img, slider_img, slider_img, slider_img]

    const [number, setNumber] = useState(1)


    return (
        <div className={styles['container']}>
            <div className={styles['img_container']}>
                {
                    imgs.map((value, index) => (
                        <img
                            src={value}
                            key={index}
                            className={styles['slide_img']}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Carousel