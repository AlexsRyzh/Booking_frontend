import React from 'react'
import styles from './input.module.scss'

const Input = ({ value, onChange, label = "Почта",
    templateText = "alexsandr.ryzhkov03@gmail.com", type, className }) => {

    return (
        <div className={styles['container'] + " " + className}>
            <p className={styles['label']}>{label}</p>
            <div className={styles['input_container']}>
                <input type={type} className={styles['input']} placeholder={templateText} value={value} onChange={onChange} />
            </div>
        </div>
    )
}

export default Input