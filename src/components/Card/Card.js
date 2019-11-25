import React from "react";
import styles from "./Card.scss";
import PropTypes from "prop-types";

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired
  };

  render() {
    return (
      <section className={styles.component}>
        <h4 className={styles.title}>{this.props.title}</h4>
      </section>
    );
  }
}

export default Card;
