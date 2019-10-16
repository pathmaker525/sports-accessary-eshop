import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/Cart/Cart-selectors';
import CheckoutItem from '../Checkout-Item/Checkout-Item';
import './Checkout.scss';

const Checkout = ({ cartItems, total }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => (
                    <CheckoutItem key={item.id} cartItem={item}/>
                ))
            }
            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);