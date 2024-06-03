import React, { useState } from 'react'

function Dropdown({handleDropdown}) {

   
  return (
    <div> 
        <select onChange={handleDropdown} className='option-container dropdown' >
            <option value="all" className='option'>All</option>
            <option value='completed' className='option'>Completed</option>
            <option value='incompleted' className='option'>Incompleted</option>
        </select>
      
    </div>
  )
}

export default Dropdown
