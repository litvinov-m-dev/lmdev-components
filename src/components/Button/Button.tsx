import React, { useCallback } from 'react';
import { ButtonProps, ButtonType } from './buttonTypes';

const Button = ({ styleType, ...htmlProps }: ButtonProps) => {
  const buildBgColor = useCallback(() => {
    if (styleType === ButtonType.PRIMARY) {
      return 'bg-primary';
    }

    if (styleType === ButtonType.SECONDARY) {
      return 'bg-bg';
    }

    return 'bg-primary';
  }, [styleType]);

  return (
    <button
      {...htmlProps}
      className={`px-4 rounded ${buildBgColor()}`}
    />
  );
};

export default Button;
