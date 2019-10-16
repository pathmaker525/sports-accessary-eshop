import React from 'react';
import CustomButton from '../Custom-Button/Custom-Button';
import CartItem from '../Cart-Item/Cart-Item';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/Cart/Cart-selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/Cart/Cart-actions';
import { withRouter } from 'react-router-dom';
import './Cart-Dropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length? (
                    cartItems.map(elem => (
                        <CartItem key={elem.id} item={elem}/>
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
};


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));