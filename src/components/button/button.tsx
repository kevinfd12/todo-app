import React from 'react';
import './button.scss';

interface ButtonProps {
  value: string;
  onButtonClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  color?: string;
}

export function Button({ value, onButtonClick, color = '#D6CFC7' }: ButtonProps) {
  return (
    <>
      <div className="button" onClick={onButtonClick} style={{ backgroundColor: color }}>
        {value}
      </div>
    </>
  );
}
