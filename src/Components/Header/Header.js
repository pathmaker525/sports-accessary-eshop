import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg';

const Header = () => {
    return (
        <div className='header'>
            <Link classNmae='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contacts'>
                    CONTACTS
                </Link>
            </div>
        </div>
    );
};

export default Header;