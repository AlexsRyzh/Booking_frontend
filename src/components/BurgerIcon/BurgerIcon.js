import React from 'react'
import styles from './burger.module.scss'

const Burger = ({ active, setActive }) => {

    return (
        <div className={styles['container']} onClick={(e) => setActive(!active)}>
            <span className={styles['line'] + " " + styles['transition'] + " " + (active ? styles['top_line'] : "")}></span>
            <span className={styles['line'] + " " + (active ? styles['hidden'] : "")}></span>
            <span className={styles['line'] + " " + styles['transition'] + " " + (active ? styles['bottom_line'] : "")}></span>
        </div>
    )
}

export default Burger