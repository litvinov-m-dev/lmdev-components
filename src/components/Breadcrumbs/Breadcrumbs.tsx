import React from "react";
import { BreadcrumbsProps } from "./breadcrumbsTypes";

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return breadcrumbs.map(({ title }, index) => (
    <span>
      <span>{title}</span>
      {index != breadcrumbs.length - 1 && <span></span>}
    </span>
  ));
};

export default Breadcrumbs;
