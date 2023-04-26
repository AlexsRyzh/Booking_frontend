import React from 'react'
import { Outlet, useHref } from 'react-router-dom'
import styles from './auth_page.module.scss'
import img_back from '../../assets/regpage.png'
import AuthHeader from '../../components/AuthHeader/AuthHeader'

const AuthPage = () => {

  const href = useHref()

  return (
    <div className={styles['container']}>
      <div className={styles['content_container']}>
        <div className={styles['content']}>
          <AuthHeader href={href} />
          <Outlet />
        </div>
      </div>
      <div className={styles['img']} style={{
        background: `url(${img_back})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}></div>
    </div>
  )
}

export default AuthPage