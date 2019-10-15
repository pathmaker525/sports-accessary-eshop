import React from 'react';
import CustomButton from '../Custom-Button/Custom-Button';
import { connect } from 'react-redux';
import { addItem } from '../../redux/Cart/Cart-actions';
import './CollectionItem.scss';

const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl}`}}></div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)} > Add to cart </CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);