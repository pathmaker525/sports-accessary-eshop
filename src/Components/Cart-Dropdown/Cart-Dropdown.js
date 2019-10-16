import React from 'react';
import CustomButton from '../Custom-Button/Custom-Button';
import CartItem from '../Cart-Item/Cart-Item';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/Cart/Cart-selectors';
import './Cart-Dropdown.scss';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(elem => (
                        <CartItem key={elem.id} item={elem}/>
                    ))
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};


const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);