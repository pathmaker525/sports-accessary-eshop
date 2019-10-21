import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import  CollectionPreview from '../Collection-Preview/Collection-Preview';
import { selectCollectionsForPreview } from '../../redux/Shop/shop-selectors';
import './Collections-Overview.scss';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({
                    id,
                    ...otherCollectionProps
                }) => (<CollectionPreview key={id} {...otherCollectionProps}/>))
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);