import React from 'react'
import styles from './registration_page.module.scss'
import Input from '../../components/Input/Input'
import CheckBox from '../../components/CheckBox/CheckBox'


const RegistrationPage = () => {
  return (
    <div className={styles['container']}>
      <h1 className={styles['message']}>Добро пожаловать!</h1>
      <h2 className={styles['message2']}>Зарегистрируйтесь, чтобы продолжить</h2>
      <form className={styles['form']}>
        <Input type={'text'} className={styles['input']} label='Логин' templateText='AlexsRyzhk' />
        <Input type={'password'} label='Пароль' templateText='Пароль' />
        <div className={styles['container_check_link']}>
          <div className={styles['cont_check']}>
            <CheckBox width={23} height={23} />
            <h1 className={styles['checkbox_label']}>Запомнить меня</h1>
          </div>
        </div>
        <button className={styles['btn']}>Зарегистрироваться</button>
      </form>
    </div>
  )
}

export default RegistrationPage