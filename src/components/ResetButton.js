import React from 'react'
import './ResetButton.css'

export default function ResetButton({handleReset}) {
  return (
        <button className='reset' onClick={handleReset}>Reset</button>

  )
}
