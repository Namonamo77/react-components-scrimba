import React from 'react'

const VARIANT_CLASSES = {
    black: "#262626",
    indigo: "#1E40AF",
    purple: "#A9229B",
    green: "#47AA5D",
    white: "#f5f4f4",
    blue: "#E0E7FF",
    pink: "#FFF3FC",
    lightGreen: "#E7FFF3"
}

export default function TooltipArrow({arrowVariant, className, ...rest}) {

    const arrowVariants = VARIANT_CLASSES[arrowVariant] || arrowVariant || ""
  return (
    <svg className='arrow' width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7224 14.25L1.26899e-05 8.77599e-08L29.4449 2.66191e-06L14.7224 14.25Z" fill={arrowVariants}/>
    </svg>

  )
}
