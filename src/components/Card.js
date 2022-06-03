import React from 'react';

const Card = ({country}) => {
    return (
      <li className="card">
          <img src={country.flags.svg} alt="drapeaux" />
        <div className="infos">
            <h2>{country.name.common}</h2>
            <h2>Capitale : {country.capital}</h2>
        </div>
      </li>
    );
};

export default Card;