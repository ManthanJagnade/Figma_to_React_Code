import React from 'react'

function ButtonHeader(prop) {
  return (
    <button 
    className='button-header'
    placeholder={prop.name}
    title={prop.name}
    >{prop.name}</button>
  )
}

export default ButtonHeader