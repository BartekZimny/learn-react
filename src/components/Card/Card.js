import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
  };

  render() {
    const {title} = this.props;

    return (
      <section className={styles.component}>
        <p className={styles.title}>{title}</p>
      </section>
    );
  }
}

export default Card;
