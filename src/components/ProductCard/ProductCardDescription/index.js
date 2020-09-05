import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';
import './styles.scss';
const ProductCardDescription = ({
  productName,
  position,
  designation,
  buttonText,
  rating,
  url
}) => {
  const renderButton = () => {
    if (buttonText) {
      return (
        <div 
        // className={styles['row']}
        className={'row'}
        >
          <a 
          // className={styles['buy-button']} 
          className={'buy-button'}
          href={url}>
            {buttonText}
          </a>
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <div 
     className={'product-card-description-box'}
    >
      <div 
      className={'product-card-name'}
      >{productName}</div>
      <p
      className={'product-card-description'}
      >{designation}</p>
      {/* <br/> */}
      <p
      className={'product-card-description'}
      >{position}</p>
    </div>
  );
};

export default ProductCardDescription;
