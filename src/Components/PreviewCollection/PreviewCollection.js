import React from 'react';
import './PreviewCollection.scss'
import CollectionItem from '../CollectionItem/CollectionItem'

const PreviewCollection = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((items, index) => index < 4) //shows only 4 items in a collection
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default PreviewCollection;