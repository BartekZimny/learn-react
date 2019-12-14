import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink';
import PropTypes from 'prop-types';
import Container from '../Container/Container';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  render() {
    const {title, subtitle, lists} = this.props;
    
    return (
      <main className={styles.component}>
        <Container>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          {lists.map(listData => (
            <ListLink key={listData.id} {...listData} />
          ))}
        </Container>
      </main>
    );
  }
}

export default Home;
