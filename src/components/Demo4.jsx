import React from 'react'
import '../styles/Demo4.css';
import AnimateText from './AnimateText';
import Spline from '@splinetool/react-spline';

const Demo4 = () => {
  return (
    <>
        <div className='bg-wrapper'>
            <div className='bg-gradient'>
                <div className='blob-1'></div>
                <div className='blob-2'></div>
                <div className='blob-3'></div>
                <div className='blob-4'></div>
            </div>
            <div className='text-glass'><AnimateText/></div>
            <div className='spline-css'>
                <Spline scene="https://prod.spline.design/ijAUZVw8qthoPKRM/scene.splinecode" />
            </div>
        </div>
    </>
  )
}

export default Demo4