import React from 'react'

const Button = ({buttonName, setFetchName, fetchName}) => 
   (
    <button       
         className={fetchName === buttonName ? 'selected': null}
         onClick={() => setFetchName(buttonName)}
    >
      {buttonName}
    </button>
  )


export default Button
