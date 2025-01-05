import React from "react";
import { BreadcrumbsProps } from "./breadcrumbsTypes";

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <div>
      {breadcrumbs.map(({ title, url = '' }, index) => (
        <span>
          <a href={url}>{title}</a>
          {index != breadcrumbs.length - 1 && <span></span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
