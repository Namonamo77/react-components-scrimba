import clsx from 'clsx'
import React from 'react'

const VARIANT_CLASSES = {
    multiLine: "multi-line", 
    singleLine: "single-line"
}

export default function TestimonialSign({signVariant, name, position, className, ...rest}) {
    const signVariantClasses = VARIANT_CLASSES[signVariant] || signVariant || ""
    const allClasses = clsx("testimonial-sign", signVariantClasses, className)

    if (signVariant === "multiLine") {

        return (
            <div className={allClasses} {...rest}>
                <p className='multi-line-name'>{name}</p>
                <p className='multi-line-position'>{position}</p>
            </div>
            )
    } else {
        return (
            <div className={allClasses} {...rest}>
                <p>{name} <span>/</span> <span className='single-line-position'>{position}</span></p>
            </div>
        )
    }
}
