import { RenderFunction } from "../../types";

export interface Breadcrumb {
  title: string;
  url?: string;
  icon?: string | RenderFunction;
}

export interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
};
