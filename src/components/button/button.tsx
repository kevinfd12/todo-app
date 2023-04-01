import React from 'react';
import './button.scss';

interface ButtonProps {
  value: string;
  onButtonClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export function Button({ value, onButtonClick }: ButtonProps) {
  return (
    <>
      <div className="btn btn-bottom-stripe btn-bottom-stripe--black" onClick={onButtonClick}>
        {value}
      </div>
    </>
  );
}
