import { ButtonHTMLAttributes } from "react";
import { PropType } from "../../types";

export enum ButtonType {
  PRIMARY,
  SECONDARY,
};

export interface ButtonProps extends PropType<ButtonHTMLAttributes<HTMLButtonElement>> {
  styleType: ButtonType;
};
