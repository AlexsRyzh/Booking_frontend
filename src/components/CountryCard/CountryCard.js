import React from 'react'
import styles from './country_card.module.scss'
import Stars from '../Stars/Stars'
import img from '../../assets/Отель1.jpg'
import { Link } from 'react-router-dom'

const CoutryCard = ({ imgSrc = img }) => {
    return (
        <div className={styles['container']}>
            <div className={styles['img_container']}>
                <Stars number={3} className={styles['star']} />
                <img src={imgSrc} className={styles['img']} />
                <div className={styles['price_container']}>
                    <span className={"material-symbols-rounded" + " " + styles['rub']}>
                        currency_ruble
                    </span>
                    <p className={styles['price']}>40000</p>
                </div>
            </div>
            <div className={styles['desc_container']}>
                <h1 className={styles['title']}>Тунис</h1>
                <p className={styles['desc']}>Cтрана, которая сочетает в себе древнюю историю и современную жизнь</p>
            </div>
            <Link className={styles['btn']}>Побробнее</Link>
        </div>
    )
}

export default CoutryCard