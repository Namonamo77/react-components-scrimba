
import React from 'react';
import clsx from "clsx"

const VARIANT_CLASSES = {
    picDesktop: "testimonial-photo-desktop",
    picMobile: "testimonial-photo-mobile",
}
export default function TestimonialPhoto({variant, src, alt}) {
    const photoVariant = VARIANT_CLASSES[variant] || variant || ""
    const allClasses = clsx(photoVariant)
  return (
    <div className={allClasses}>
        <img src={src} alt={alt} />
    </div> 
  )
}
