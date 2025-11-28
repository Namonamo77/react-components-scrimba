import clsx from "clsx"

const VARIANT_CLASSES = {
    cardDefault: "card-default",
    cardHover: "card-hover"
}

export default function Card({children, className, variant, ...rest}) {
    let variantCard = VARIANT_CLASSES[variant] || variant || ""
    const allClasses = clsx("card", variantCard, className)
  return (
    <button className={allClasses} {...rest}>
        {children}
    </button>
  )
}

