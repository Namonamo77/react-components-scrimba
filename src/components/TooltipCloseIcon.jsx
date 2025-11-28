import React from 'react'

const VARIANT_CLASSES = {
    closeBlack: "#C7C7C7",
    closeIndigo: "#7EA6F2",
    closePurple: "#F462E6",
    closeGreen: "#C1FFCF",
    closeWhite: "#6B7280",
    closeBlue: "#1C51B9",
    closePink: "#C7369E",
    closeLightGreen: "#41A557",
}

export default function TooltipCloseIcon({closeVariant, className, ...rest}) {

    const closeVariants = VARIANT_CLASSES[closeVariant] || closeVariant || ""

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_406_494)">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill={closeVariants}/>
        </g>
        <defs>
        <clipPath id="clip0_406_494">
        <rect width="20" height="20" rx="6" fill={closeVariants}/>
        </clipPath>
        </defs>
    </svg>

  )
}
