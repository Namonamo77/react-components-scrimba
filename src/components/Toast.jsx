import React from 'react'
import clsx from 'clsx'

const VARIANT_CLASSES = {
    success: "success",
    warning: "warning",
    info: "information",
    error: "error"
}

export default function Toast({children, variant, className, ...rest}) {
    const toastVariants = VARIANT_CLASSES[variant] || variant || ""
    const allClasses = clsx(toastVariants, "toast", className)

  return (
    <div className={allClasses} {...rest}>{children}</div>
  )
}
