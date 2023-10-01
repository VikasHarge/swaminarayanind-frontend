'use client'

import classNames from "classnames";
import React, { FC, HTMLAttributes } from "react";

export interface StyledTextProps extends HTMLAttributes<HTMLDivElement> {
    label?: string,
}

const StyledText : FC<StyledTextProps> = ({label, children, className, ...props}) => {
  return (
    <h2
      className={classNames(className,
        " font-extrabold bg-gradient-to-r from-primary  to-primary-2 inline-block text-transparent bg-clip-text pb-2",
      )}
      {...props}
    >
      {label || children}
    </h2>
  );
};

export default StyledText;
