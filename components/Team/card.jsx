import React from 'react'
import AbstractSvg from 'assets/abstrack.svg'
import Image from 'next/image'

const styles = {
  container: "flex flex-col justify-center items-center shrink-0 w-[260px]",
  cover: "relative h-[170px] w-[260px] shrink-0",
  image: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  title: "text-darkBlue font-bold text-lg",
  alias: "text-gray-500"
}

function Card({ name, alias, photo }) {
  console.log(photo)
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <div  className={styles.image + ' z-10'}>
          <Image src={AbstractSvg} alt=""/>
        </div>
        <div  className={styles.image +" rounded-full w-28 h-28 overflow-hidden"}>
          <Image src={photo}  alt=""/>
        </div>
      </div>
      <h1 className={styles.title}>{name}</h1>
      <h3 className={styles.alias}>@{alias}</h3>
    </div>
  )
}

export default Card