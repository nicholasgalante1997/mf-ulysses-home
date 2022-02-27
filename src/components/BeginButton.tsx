import React from 'react';
import styles from '../styles/home.module.css';

interface BeginButtonProps {
    onClick: () => void;
}

const BeginButton: React.FC<BeginButtonProps> = ({ onClick }) => (
    <button onClick={onClick} className={styles.beginButton}>To The Origin</button>
);

export default BeginButton;
  