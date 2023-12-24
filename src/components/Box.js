import React from 'react'
import './Box.css'
export const Box = ({value, onClick}) => {

    const style = value == 'x' ? 'box x' : 'box y';
        console.log(style)
        console.log(" Here " + onClick)
  return (
    
    <button className={style} onClick = {onclick}>{value}</button>
  )
}

