import React from 'react'
import { useSelector } from 'react-redux'

const GrandSonBox = () => {
  const count = useSelector((state)=>state.count);
  return (
    <div>
      This is GrandSon {count}
    </div>
  )
}

export default GrandSonBox
