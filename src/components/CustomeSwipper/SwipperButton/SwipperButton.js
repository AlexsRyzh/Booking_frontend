import React from 'react'
import styles from './swipper_button.module.scss'

const SwipperButton = ({ prev, next, className, onClick, ...props }) => {
    return (
        <button className={styles['container'] + " " + className} onClick={onClick} {...props}>
            <span className={"material-symbols-rounded" + " " + styles['arrow']}>
                {
                    prev &&
                    " arrow_back_ios"
                }
                {
                    next &&
                    "arrow_forward_ios"
                }
            </span>
        </button>
    )
}

export default SwipperButton