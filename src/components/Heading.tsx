import React from 'react';
import styles from '../styles/home.module.css';

const Heading: React.FC = ({ children }) => (
   <span className={styles.gradientContainer}>
       <h2 className={styles.heading}>{children}</h2>
   </span> 
)

export default Heading;