import React from 'react'
import Ripple from './Ripple/Ripple'
import styles from './ripple_button.module.scss'

const RippleButton = ({ colorRipple = '#fff', duration = 1500, className = '', opacity = 0.5, children, ...props }) => {
    return (
        <button className={styles.button + " " + className} {...props}>
            {children}
            <Ripple color={colorRipple} duration={duration} opacity={opacity} />
        </button>
    )
}

export default RippleButton