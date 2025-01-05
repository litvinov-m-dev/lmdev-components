import React, { useCallback } from 'react';
import { ButtonProps, ButtonMode } from './buttonTypes';

const Button = ({ mode = ButtonMode.PRIMARY , ...htmlProps }: ButtonProps) => {
  const buildBgColor = useCallback(() => {
    if (mode === ButtonMode.PRIMARY) {
      return 'bg-primary';
    }

    if (mode === ButtonMode.SECONDARY) {
      return 'bg-bg';
    }

    return 'bg-primary';
  }, [mode]);

  return (
    <button
      {...htmlProps}
      className={`px-4 rounded ${buildBgColor()}`}
    />
  );
};

export default Button;
