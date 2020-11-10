import React, { Fragment } from 'react';

const Cards = ({ type }) => { 
    const badge = 'badge badge-';
    return(
        <Fragment>
            <span className={`${badge}${type.name}`}>{type.name}</span>
        </Fragment>
    );
};

export default Cards;
