import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// import styles from './styles.scss';
import './styles.scss';
class Card extends React.Component {
  constructor(props) {
    super(props);
  }
 

  render() {
    let {
      className,
      float,
      ...other
    } = this.props;
    return (
      <div
           className={cx('card',
           className,
           {'float':float}
           )}       
         // className={
        //   classnames(
        //     styles.card,
        //     { [`${styles.float}`]: float },
        //     className,
        //   )}
      { ...other }
      >
	      {this.props.children}
      </div>
    );
  }
}

Card.propTypes = {
  className: PropTypes.string
};

Card.defaultProps = {
  className: ''
};

export default Card;
