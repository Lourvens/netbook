import Image from 'next/image'
import React from 'react'

function Card({ title, banner }) {
  const styles = {
    container: "w-[300px]",
    link: "transition-colors text-gray-500 hover:text-blue-500",
    imgBox: "rounded-2xl overflow-hidden",
    title: "text-lg text-darkBlue capitalize pb-2"
  }
  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <Image src={banner} alt="" objectFit="cover" layout='responsive' />
      </div>
      <div className="flex px-2 my-4 gap-4">
        <hr className="border-t-4 border-[#FFAF2E] w-16 mt-4"/>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <a href="#" className={styles.link}>continue reading</a>
        </div>
      </div>
    </div>
  )
}

export default Card