import React from 'react'
const Svg = () => {
    return (
        <svg width="0" height="0"> 
            <filter id="filter">
                <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="6" />
                <feDisplacementMap in="SourceGraphic" scale="100" />
            </filter>
        </svg>
    )
}
export default Svg