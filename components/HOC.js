import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';

function Hoc() {
  const [data, setData] = useState('')
    useEffect(() => {
      const localData = localStorage.getItem('authToken');
      setData(localData); 
    })
      if (data !== null) {
        return  <div><Navbar /></div>
      } else {
        return <div style={{display: 'none'}}><Navbar /></div>;
      }
}

export default Hoc