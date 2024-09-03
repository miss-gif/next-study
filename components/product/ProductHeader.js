import React from 'react';
import styles from './ProductHeader.module.css';
const ProductHeader = ({ title }) => {
	return <h1 className={styles.title}>{title}</h1>;
};

export default ProductHeader;
