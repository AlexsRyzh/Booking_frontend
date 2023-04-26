import React from 'react'
import styles from './login_page.module.scss'
import Input from '../../components/Input/Input'
import CheckBox from '../../components/CheckBox/CheckBox'

const LoginPage = () => {
  return (
    <div className={styles['container']}>
      <h1 className={styles['message']}>Мы скучали!</h1>
      <h2 className={styles['message2']}>Войти, чтобы продолжить</h2>
      <form className={styles['form']}>
        <Input type={'text'} className={styles['input']} />
        <Input type={'password'} />
        <div className={styles['container_check_link']}>
          <div className={styles['cont_check']}>
            <CheckBox width={23} height={23} />
            <h1 className={styles['checkbox_label']}>Запомнить меня</h1>
          </div>
        </div>
        <button className={styles['btn']}>Вход</button>
      </form>

    </div>
  )
}

export default LoginPage