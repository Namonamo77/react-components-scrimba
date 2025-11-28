import React from 'react'
import clsx from 'clsx'

const VARIANT_CLASSES = {
    blackPopup: "tooltip-black",
    indigoPopup: "tooltip-indigo",
    purplePopup: "tooltip-purple",
    greenPopup: "tooltip-green",
    greyPopup: "tooltip-grey",
    lilacPopup: "tooltip-lilac",
    pinkPopup: "tooltip-pink",
    lightGreenPopup: "tooltip-lightGreen"
}

export default function TooltipPopup({children, variant, className, ...rest}) {
    const popupVariants = VARIANT_CLASSES[variant] || variant || ""
    const allClasses = clsx(popupVariants, "tooltip")
  return (
    <div className={allClasses}{...rest}>{children}</div>
  )
}
