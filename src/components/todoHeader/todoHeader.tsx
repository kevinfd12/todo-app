import React from 'react';
import img1 from '../../assets/ForeGround-removebg-preview.png';
import img2 from '../../assets/Background.jpg';
import './todoHeader.scss';

export const TodoHeader = () => {
  return (
    <div className="todoHeader__wrapper">
      <img src={img1} className="todoHeader__Foreground" alt="Groceries"></img>
      <img src={img2} className="todoHeader__Midground" alt="Groceries"></img>
    </div>
  );
};
