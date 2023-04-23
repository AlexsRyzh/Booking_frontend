import React, { useEffect, useRef, useState } from 'react'
import styles from './nav_bar.module.scss'
import logo from '../../assets/earth.png'
import { Link } from 'react-router-dom'
import { HOME_ROUTER } from '../../constants/consts'
import RippleButton from '../RippleButton/RippleButton'
import { Line } from './Line.styled'


import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Burger from '../BurgerIcon/BurgerIcon'


const NavBar = ({ navItems = ['Куда поехать', 'Жильё', 'Блог', 'Карта'] }) => {
    const [navItem, setNavItem] = useState(0)
    const [lineWidth, setLineWidth] = useState(0)
    const [lineXPosition, setLineXPosition] = useState(0)
    const [transition, setTransition] = useState(0)


    const navRef = useRef(null)
    const firstNavElemRef = useRef(null)

    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (firstNavElemRef != null) {
            setNavItem(0)
            setLineWidth(firstNavElemRef.current.offsetWidth)
            setLineXPosition(firstNavElemRef.current.offsetLeft)
            setTimeout(() => {
                setTransition(500)
            }, 0)
        }
    }, [])

    return (
        <div className={styles['container']}>
            <Link to={HOME_ROUTER}>
                <RippleButton className={styles.button} opacity={0.2} duration={1000}>
                    <div className={styles['logo_container']}>
                        <img src={logo} className={styles['logo_img']} alt='' />
                        <h1 className={styles['title']}>
                            Мир
                        </h1>
                    </div>
                </RippleButton>
            </Link>

            <div className={styles['nav']} ref={navRef}>
                {
                    navItems.map((value, index) => (
                        <Link className={styles['nav_item']} key={index} onClick={(e) => {
                            setNavItem(index)
                            setLineWidth(e.currentTarget.offsetWidth)
                            setLineXPosition(e.currentTarget.offsetLeft)
                        }} ref={index === 0 ? firstNavElemRef : null}>
                            {value}
                        </Link>
                    ))
                }
                <Line
                    width1={lineWidth}
                    position1={lineXPosition}
                    transition1={transition}
                />


                <Burger active={open} setActive={setOpen} />
            </div>

        </div>
    )
}

export default NavBar