import React from 'react'
import { Link } from 'react-router-dom'
import styles from './block_title.module.scss'

const BlockTitle = ({ title, titleLink = '', moreLink }) => {
  return (
    <div className={styles['container']}>
      <Link to={titleLink} className={styles['link_title']}>
        {title}
      </Link>
      <Link to={titleLink} className={styles['link_more']}>
        Посмотреть всё
      </Link>
    </div>
  )
}

export default BlockTitle