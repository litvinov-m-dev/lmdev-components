import { ReactNode } from "react";

export type PropType<C> = C & { className?: never };

export type RenderFunction = (...args: any[]) => ReactNode | string;
