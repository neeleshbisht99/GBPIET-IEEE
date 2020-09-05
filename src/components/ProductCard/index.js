import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
// import classes from './styles.module.css';
import Card from '../Card';
import ProductCardDescription from './ProductCardDescription';
import ProductCardGallery from './ProductCardGallery';
import PriceTag from './PriceTag';
// import styles from './styles.scss';
import './styles.scss';
class ProductCard extends React.Component {
  constructor(props) {
    super(props);
  }
  // let { container,cards,parent,singleCard, heading }=classes;

  render() {
    let {
      className,
      photos,
      price,
      personName,
      position,
      designation,
      buttonText,
      rating,
      url,
      ...other
    } = this.props;

    return (
      <Card
        // className={cx(
        //   styles['product-card'],
        //   className
        // )}
        className={cx(
          'product-card',
            className
          )}
      {...other}
      >
        <ProductCardGallery photos={photos} />
        {/* <PriceTag price={price} /> */}
        <ProductCardDescription
          productName={personName}
          position={position}
          designation={designation}
          buttonText={buttonText}
          rating={rating}
          url={url}
        />
      </Card>
    );
  }
}

ProductCard.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number,
  personName: PropTypes.string,
  position: PropTypes.string,
  designation: PropTypes.string,
  buttonText: PropTypes.string,
  url: PropTypes.string
};

export default ProductCard;
