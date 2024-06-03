import React from 'react'
import './Input.css'
function Form({formValue,setFormValue,placeholderText,formSubmit,buttonText}) {
  return (
    <div className='form-container'>
        <form onSubmit={formSubmit} >
       <input 
       type="text"
       value={formValue}
       onChange={(e) => setFormValue(e.target.value)} 
       placeholder={placeholderText}
       className='input-field'
       />
       <button type='submit' className='submit-button'>{buttonText}</button>
       </form>
    </div>
  )
}

export default Form
