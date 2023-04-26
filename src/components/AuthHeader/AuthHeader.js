import React from 'react'
import styles from './auth_header.module.scss'
import logo from '../../assets/earth.png'
import { NAME, LOGIN_ROUTER, REGISTER_ROUTER, HOME_ROUTER } from '../../constants/consts'
import { Link } from 'react-router-dom'
import RippleButton from '../RippleButton/RippleButton'

const AuthHeader = ({ href }) => {

    const colorLoginBtn = (href === LOGIN_ROUTER ? '#EF5774' : null)
    const colorRegistrBtn = (href === REGISTER_ROUTER ? '#EF5774' : null)

    return (
        <div className={styles['container']}>
            <Link to={HOME_ROUTER}>
                <RippleButton className={styles.button} opacity={0.2} duration={1000}>
                    <div className={styles['logo_container']}>
                        <img src={logo} className={styles['logo_img']} />
                        <h1 className={styles['log_text']}>{NAME}</h1>
                    </div>
                </RippleButton>
            </Link>
            <div className={styles['btn_container']}>
                <Link className={styles['btn']} style={{
                    color: colorLoginBtn
                }} to={LOGIN_ROUTER}>
                    Вход
                    <span className={styles['line']} style={{
                        background: colorLoginBtn
                    }}></span>
                </Link>
                <Link className={styles['btn']} style={{
                    color: colorRegistrBtn
                }} to={REGISTER_ROUTER}>
                    Регистрация
                    <span className={styles['line']} style={{
                        background: colorRegistrBtn
                    }}></span>
                </Link>
            </div>
        </div>
    )
}

export default AuthHeader