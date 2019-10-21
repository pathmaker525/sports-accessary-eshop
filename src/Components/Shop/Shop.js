import React from 'react';
import CollectionsOverview from '../Collections-Overview/Collections-Overview';
import CollectionPage from '../Collection/Collection';
import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
}

export default ShopPage;