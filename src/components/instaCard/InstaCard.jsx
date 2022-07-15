import React, { useState } from 'react';
import { palaroidCard } from '../../assets';
import './instaCard.css';
import {
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
} from '../../assets/images/images';

const data = [photo1, photo2, photo3, photo4, photo5, photo6];

const InstaCard = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prev) => prev + 1);
  };

  const decrement = () => {
    setValue((prev) => prev - 1);
  };

  return (
    <div className="container">
      <img src={palaroidCard} alt="palaroid" />
      <div className="image_container">
        <img src={data[value]} alt="pictures" />
      </div>
      <div className="control">
        <button
          disabled={value === 0 ? true : false}
          onClick={() => decrement()}
        >
          Decrement
        </button>
        <span>{value}</span>
        <button
          disabled={value === data.length - 1 ? true : false}
          onClick={() => increment()}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default InstaCard;
