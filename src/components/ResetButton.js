import React from 'react'

export default function ResetButton({handleReset}) {
  return (
    <div>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}
