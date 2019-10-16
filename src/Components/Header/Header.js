import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../Cart-Icon/Cart-Icon';
import CartDropdown from '../Cart-Dropdown/Cart-Dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/Cart/Cart-selectors';
import { selectCurrentUser } from '../../redux/User/user-selector';
import { connect } from 'react-redux';

const Header = ({ currentUser, hidden }) => {
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
                <CartIcon />
            </div>
            {
                hidden? null : <CartDropdown />
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);