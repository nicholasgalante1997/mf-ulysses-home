import React from 'react';
import styles from '../styles/home.module.css';

const Subheading: React.FC = ({ children }) => (
    <p className={styles.subheading}>{children}</p>
)

export default Subheading;