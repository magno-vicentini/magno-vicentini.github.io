import React, { useState } from 'react'

export default function Hobbies(props) {
  const [showDesc, setShowDesc ] = useState(false)
  return (
    <div className='info-hover' >
          <img 
            src={props.imageInfo} 
            alt="magno perfil" 
            className='imgsHhobbies' 
            onMouseEnter={ () => setShowDesc(true)} 
            onMouseLeave={ () => setShowDesc(false)}
          />
          {
            (showDesc) ? <p className='desc-hobbie' data-aos="zoom-in">{props.descInfo}</p> : ''
          }
        </div>
  )
}
