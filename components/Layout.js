import React from 'react'
import Hoc from './HOC'

function Layout({children}) {
  return (
    <>
      <Hoc />
      <main>{children}</main>
    </>
  )
}

export default Layout