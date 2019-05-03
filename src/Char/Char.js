import React from 'react'
import './Char.css'

const Char = props => {
  return <div
      className='Char'
      onClick={props.deleteChar}
    >
    {
      props.character
    }
  </div>
}

export default Char
