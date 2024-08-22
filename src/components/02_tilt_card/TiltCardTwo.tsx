import React from 'react'
import styles from './tilt.module.css'
import Image from 'next/image'
import { useState } from "react";


type myTiltProps = {
  source: string,
  stylesTilt?: any,
  handleMouseOver?: any
};


function TiltCardTwo({ source }: myTiltProps) {


  const [index, setIndex] = useState(1)

  const increaseZIndex = () => {
    setIndex(100); 
  };
  const decreaseZIndex = () => {
    setIndex(1); 
  };


  const stylesTilt = {
    zIndex: index
  }

  const tiltClassList = `${styles.container}`

  return (
    <div className={tiltClassList} style={stylesTilt} onMouseOver={increaseZIndex} onMouseOut={decreaseZIndex}>
      <div className={styles.tilt_box_wrap}>

        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <div className={styles.tilt_box}>
          <Image src={source} alt='' fill />
        </div>
      </div>
    </div>
  )
}

export default TiltCardTwo