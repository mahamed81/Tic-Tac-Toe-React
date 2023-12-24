import React from 'react'
import { Box } from './Box'

export const BoxList = () => {

    let arr = [1,2,3,4,5,6,7,8,9]

    const list = arr.map((el)=>{
       {console.log()}
        <Box value ='x' onClick={null}/>
    })
  return (
    <div>
       {list}
    </div>
  )
}
