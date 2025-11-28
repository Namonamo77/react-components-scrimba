import TestimonialIcon from "./TestimonialIcon"
import clsx from "clsx"

const VARIANT_CLASSES = {
  bluePicDesktop: "blue-pic-desktop",
  bluePicMobile: "blue-pic-Mobile",
  noPicDesktop: "no-pic-desktop",
  noPicMobile: "no-pic-mobile"
}

export default function Testimonials({children, variant, src, alt, className, ...rest}) {
  let variantTestimonials =  VARIANT_CLASSES[variant] || variant || ""
  const allClasses = clsx(variantTestimonials)

  return (
      <div className={allClasses} {...rest}>
          {children}
      </div>

    )
  
}
