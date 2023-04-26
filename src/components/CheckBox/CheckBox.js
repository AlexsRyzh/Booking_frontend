import React, { useEffect } from 'react'
import { useState } from 'react'
import { CheckBoxContainer } from './CheckBoxComponent.styled'
import styles from './check_box.module.scss'


const CheckBox = (props) => {
    const [checked, setCheck] = useState(false)

    useEffect(() => {
        console.log(props.width);
    })

    return (
        <div className={styles['container']}>
            <label className={styles['custom-checkbox']}>
                <input type="checkbox" className={styles['hidden']} checked={checked} onChange={() => setCheck(!checked)} />
                <CheckBoxContainer boderSize={2} boderColor={'#F14868'} borderRadius={5} checked={checked} {...props}>
                    {checked &&
                        <span className={'material-symbols-rounded ' + styles['custome_icon']} style={{
                            fontSize: `${props.width}px`
                        }}>
                            done
                        </span>
                    }
                </CheckBoxContainer>
            </label>

        </div>
    )
}

export default CheckBox