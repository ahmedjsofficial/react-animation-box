import React, { useEffect, useRef } from 'react'
import WebGLFluid from 'webgl-fluid';
import AnimateText from './AnimateText';

const Demo2 = () => {
    const canvasRef = useRef('canvas');
    
    useEffect(() => {
        WebGLFluid(canvasRef.current);
    },[])
  return (
    <>
        <div>
            <div className='canvas-css'><canvas ref={canvasRef}></canvas></div>
            <AnimateText />
        </div>
    </>
  )
}

export default Demo2