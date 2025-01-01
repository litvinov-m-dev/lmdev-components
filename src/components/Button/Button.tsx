import React from 'react';
import { ButtonProps } from './buttonTypes';

const Button = ({ styleType, ...htmlProps }: ButtonProps) => {
  return (
    <button {...htmlProps} />
  );
};

export default Button;
