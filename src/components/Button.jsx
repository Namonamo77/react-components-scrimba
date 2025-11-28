import clsx from 'clsx'

const VARIANT_CLASSES = {
  default: "default",
  green: "green",
  red: "red",
  yellow: "yellow",
  blue: "blue",
  indigo: "indigo",
  purple: "purple",
  pink: "pink",
}

function Button({children, variant, className, shape, ...rest  }) {

  let variantBtn = VARIANT_CLASSES[variant] || variant || ""
  //let variantBtn = variant && `${variant}`
  let shapeClass = shape || ""
  const allClasses = clsx(variantBtn, shapeClass, className, "btn")

  return (
    <button className={allClasses} {...rest}>{children}</button>
  )
}

export default Button