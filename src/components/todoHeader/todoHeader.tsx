import React from 'react';
import img1 from '../../assets/ForeGround-removebg-preview.png';
import img2 from '../../assets/Background.jpg';
import img3 from '../../assets/CounterTop-removebg-preview.png';
import './todoHeader.scss';

export const TodoHeader = () => {
  return (
    <div className="todoHeader__wrapper">
      <img src={img1} className="todoHeader__Foreground" alt="Groceries1"></img>
      <img src={img2} className="todoHeader__Midground" alt="Groceries2"></img>
      <img src={img3} className="todoHeader__CounterTop" alt="Groceries3"></img>
    </div>
  );
};
