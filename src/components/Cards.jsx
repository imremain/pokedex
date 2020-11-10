import React, { Fragment, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Badges from './Badges';

const Cards = ( { url } ) => {
    const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
    const png = '.png';
    const [ pokemon, setPokemon ] = useState({ types: [] });
    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => setPokemon(data));
    }, []);

    function zeroFill(number, width) {
        width -= number.toString().length;
        if(width > 0) {
            return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
        }
        return number + "";
    }

    return (
        <Fragment>
            <div className="col-lg-3">
            <div className="properties properties2 mb-30">
                <div className="properties__card">
                <div className="properties__img overlay1">
                    <a href="#">
                    <img src={`${imgURL}${pokemon.id}${png}`} alt={pokemon.name} />
                    </a>
                </div>
                <div className="properties__caption">
                    <h3 className="pokemon-name">
                    <a href="#">{pokemon.name || <Skeleton />}</a>
                    </h3>
                    <p>#{zeroFill(`${pokemon.id}`, 3) || <Skeleton />}
                    {pokemon.types.map(item =>
                        <Badges key={item.id} {...item} />
                    ) || <Skeleton />}
                    </p>
                    <a href="#" className='border-btn border-btn2'>
                    See Details
                    </a>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    );
};

export default Cards;
