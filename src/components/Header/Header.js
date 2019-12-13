import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';

class Header extends React.Component {
    render() {
        return (
            <header className={styles.component}>
                <Container>
                    <div className={styles.wrapper}>
                        <Link to='/' className={styles.logo}>
                            <Icon name='rocket' />
                        </Link>
                        <nav>
                            <NavLink exact to='/'>Home</NavLink>
                            <NavLink exact to='/info'>Info</NavLink>
                        </nav>
                    </div>
                </Container>
            </header>
        );
    }
}

export default Header;