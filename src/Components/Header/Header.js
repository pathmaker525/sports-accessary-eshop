import React from 'react';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contacts'>
                    CONTACTS
                </Link>
                {
                    currentUser?
                    <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>
                    :
                    <Link className='option' to='/signin'> SIGN IN</Link>
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps)(Header);