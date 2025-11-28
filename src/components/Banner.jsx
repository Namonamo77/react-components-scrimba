import React from 'react'
import clsx from 'clsx';

function Banner({children, className, variant, iconType, line, ...rest}) {
  const singleLine = line === "single" ? "single" : ""
  const allClasses = clsx("banner", variant, singleLine, className)

  return (
    <div className={allClasses} {...rest}>
        {children}
    </div>
  )
}

export default Banner