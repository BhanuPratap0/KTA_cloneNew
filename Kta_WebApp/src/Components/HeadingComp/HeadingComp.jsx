import React from 'react'
import './HeadingComp.scss'
const HeadingComp = ({heading, subHeading}) => {
  return (
    <div className='headingClass'>
        <p>{subHeading}</p>
        {heading}
    </div>
  )
}

export default HeadingComp
