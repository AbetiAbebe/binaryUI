import React from 'react'
import styles from '../../core-home.module.scss';
import {  Layout } from 'antd';

export const HomeFooter = () => {
    const {  Footer } = Layout;
  return (
    <div className={styles['footer']}>
        <p className={styles['footer-txt']}>Binarycosmo © 2022 Created by binarycosmo</p>
    </div>
  )
}


export default HomeFooter;
