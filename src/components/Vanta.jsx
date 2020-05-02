import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Vanta = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        THREE: THREE,
        mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x0388A6,
    backgroundColor: 0x011826
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div className="vanta" ref={myRef}>
  </div>
}

export default Vanta;