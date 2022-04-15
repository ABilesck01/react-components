import React, { useEffect, useState } from 'react'

function Relogio() {
    
    const [dt, setDt] = useState(new Date().toLocaleString());

    useEffect(() => {
        let timer = setInterval(() => {
            setDt(new Date().toLocaleString());
        }, 1000);

        return () => clearInterval(timer);
    }, [])

    return (
      <h4>{dt}</h4>
    );
  }
  
  export default Relogio;