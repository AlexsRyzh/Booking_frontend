import React, { useEffect, useState } from 'react'
import styles from './carousel_page.module.scss'
import useWindowSize from '../../hooks/useWindowSize'

const CarouselPage = ({ img, town, price, links }) => {
    const { width } = useWindowSize()
    const [priceString, setPriceString] = useState("")

    useEffect(() => {
        const outrez = (price + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        setPriceString(outrez)
    }, [])



    return (
        <div
            className={styles['container']}
            style={{
                background: `url(${img}) no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: 'top center',
                minWidth: `${width}px`
            }}
        >
            <div className={styles['contant']}>
                <div className={styles['desc_container']}>
                    <h1 className={styles['title']}>{town}</h1>
                    <div className={styles['price_container']}>
                        <p className={styles['price_text']}>от</p>
                        <p className={styles['price']}>{priceString}</p>
                        <p className={styles['price_text']}>руб</p>
                    </div>
                </div>
                <button className={styles['button']}>Посмотреть</button>
            </div>
        </div>
    )
}

export default CarouselPage