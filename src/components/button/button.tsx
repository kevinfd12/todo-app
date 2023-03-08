import React from 'react';
import './button.scss';

interface ButtonProps {
  value: string;
  onButtonClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export function Button({ value, onButtonClick }: ButtonProps) {
  return (
    <>
      <div className="reuse_button" onClick={onButtonClick}>
        {value}
      </div>
    </>
  );
}
