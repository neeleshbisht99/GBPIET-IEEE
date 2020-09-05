import React from 'react';

// import styles from './styles.scss';
import './styles.scss';
class PriceTag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      price
    } = this.props;

    return (
      <div
      //  className={styles['price-tag']}
       className={'price-tag'}
      >
	      {price}
      </div>
    );
  }
}

export default PriceTag;
