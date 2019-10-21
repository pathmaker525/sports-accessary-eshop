import React, {Component} from 'react';
import {connect} from 'react-redux';
import MenuItem from './../Menu-Item/MenuItem';
import './Directory.scss';
import {selectDirectorySections} from '../../redux/Directory/directory-selectors';
import {createStructuredSelector} from 'reselect';

const Directory = ({sections}) => {

    return (
        <div className="directory-menu">
            {
                sections.map(({
                    id,
                    ...sections
                }) => {
                    return (<MenuItem key={id} {...sections}/>)
                })
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector(
    {sections: selectDirectorySections}
)

export default connect(mapStateToProps)(Directory);