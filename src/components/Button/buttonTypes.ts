import { ButtonHTMLAttributes } from "react";
import { PropType } from "../../types";

export enum ButtonMode {
  PRIMARY,
  SECONDARY,
};

export interface ButtonProps extends PropType<ButtonHTMLAttributes<HTMLButtonElement>> {
  mode?: ButtonMode;
};
