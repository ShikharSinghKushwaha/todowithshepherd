import React from 'react'

function Button({buttonText,handleClick}) {
  return (
    <div>
      <button type='submit' onClick={handleClick} className='button delete'>{buttonText}</button>
    </div>
  )
}

export default Button
