import Image from 'next/image'
import React from 'react'
import Circle from './circle'

import cardImg1 from 'assets/marketingvideo.png'
import cardImg2 from 'assets/pexels-andres-ayrton-6578391.png'
import cardImg3 from 'assets/pexels-brett-sayles-2881232.png'

const styles = {
  container: "h-[576px] my-8 flex wrapper flex items-center justify-between",
  mark: "text-blue-500 text-[18px]",
  contentBox: "w-1/3 flex flex-col gap-4",
  title: "text-darkBlue text-[36px] font-bold leading-[40px]",
  description: "text-gray-500",
  cardGroup: "w-3/5",
  cardItem: "overflow-hidden rounded-lg cursor-pointer",
  cardImg: "transform transition-transform transform hover:scale-105 aspect-w-2"
}

function About() {
  return (
    <section id="about" className={styles.container} >
      <div className={styles.contentBox}>
        <span className={styles.mark}>Whats Netboks?</span>
        <h1 className={styles.title}>Why Join to Netbook Social Network?</h1>
        <p className={styles.description}>
          Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.
        </p>
        <div>
          <Circle>Groups</Circle>
          <Circle>Messages</Circle>
          <Circle>Share</Circle>
        </div>
      </div>
      <div className={"grid grid-cols-2 grid-rows-2 gap-4 items-center"}>
        <div className={`${styles.cardItem} row-span-2`}>
          <Image src={cardImg1} alt="" className={styles.cardImg} />
        </div>
        <div className={styles.cardItem}>
          <Image src={cardImg2} alt="" className={styles.cardImg} layout="responsive" objectFit="cover"/>
        </div>
        <div className={styles.cardItem}>
          <Image src={cardImg3} alt="" className={styles.cardImg} layout="responsive" objectFit="cover"/>
        </div>
      </div>
    </section>
  )
}

export default About