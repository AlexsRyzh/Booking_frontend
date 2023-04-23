import React from 'react'
import styles from './stars.module.scss'

const Stars = ({ number, className }) => {

    const stars = new Array(number).fill(
        <span className={"material-symbols-rounded" + " " + styles['star']}>
            star
        </span>
    )

    return (
        <div className={styles['container'] + " " + className}>
            {stars}
        </div>
    )
}

export default Stars