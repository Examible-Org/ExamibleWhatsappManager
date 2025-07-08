import React from 'react'
import { Outlet } from 'react-router-dom'

const MainHolder = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default MainHolder
