import React from 'react'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import StarIcon from 'assets/start.svg'
import TrophyIcon from 'assets/trophy.svg'
import PeopleImg from 'assets/people.png'
import SocialImg from 'assets/social.png'

const styles = {
  container: "wrapper flex justify-between",
  card: "w-[300px] flex flex-col gap-5 px-8 py-4 rounded-xl",
  cardTitle: "flex items-center text-lg text-darkBlue gap-2 font-medium",
  cardInfo: "flex items-center justify-start -mx-4 text-gray-500",
  cardDescription: "text-sm text-gray-400",
  cardLink: "flex items-center capitalize text-[14px]",
  button: "flex items-center bg-blue-500 p-3 w-36 rounded-xl text-white font-medium transition-colors hover:bg-blue-900 shadow-xl"
}

function Achievement() {
  return (
    <section className={styles.container}>
      <div className={`${styles.card} shadow-lg`}>
        <h1 className={styles.cardTitle}>
          <Image src={StarIcon} alt="star icon"/>
          <span>4.8 rating</span>
        </h1>
        <div className={styles.cardInfo}>
          <Image src={PeopleImg} alt="people" />
          <h3><mark>+836k</mark> Members</h3>
        </div>
        <div className={styles.cardDescription}>
          More than 2 billion we people over countries use socibooks we to stay in touch with friends.
        </div>
        <a href="#" className={`${styles.cardLink} text-blue-500`}>
          join our community <AiOutlineArrowRight />
        </a>
      </div>

      <div className={`${styles.card} border`}>
        <h1 className={styles.cardTitle}>
          <Image src={TrophyIcon} alt="trophy icon"/>
          <span>Awwards</span>
        </h1>
        <div className={styles.cardInfo}>
          <Image src={SocialImg} alt="people"/>
          <h3>Best of <mark>2021</mark> on Github</h3>
        </div>
        <div className={styles.cardDescription}>
          More than 2 billion we people over countries use socibooks we to stay in touch with friends.
        </div>
        <a href="#" className={styles.cardLink}>
          go to awwards <AiOutlineArrowRight />
        </a>
      </div>

      <div className="w-[300px] flex flex-col gap-4">
        <mark>Our Achievement</mark>
        <h1 className="text-[32px] text-darkBlue font-bold leading-10">
          We are Connecting You The Digital Life.
        </h1>
        <div className={styles.cardDescription}>
        The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.
        </div>
        <button href="#" className={styles.button}>Discover me <AiOutlineArrowRight /></button>
      </div>
    </section>
  )
}

export default Achievement