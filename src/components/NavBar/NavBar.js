import React from 'react'
import styles from './nav_bar.module.scss'
import logo from '../../assets/earth.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['logo_container']}>
                <img src={logo} className={styles['logo_img']} />
                <h1 className={styles['title']}>
                    Мир
                </h1>
            </div>
            <div className={styles['nav']}>
                <Link className={styles['nav_item']}>Куда поехать</Link>
                <Link className={styles['nav_item']}>Жильё</Link>
                <Link className={styles['nav_item']}>Блог</Link>
                <Link className={styles['nav_item']}>Карта</Link>
            </div>
        </div>
    )
}

export default NavBar