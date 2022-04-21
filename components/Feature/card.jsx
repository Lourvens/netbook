import Image from 'next/image'
import React from 'react'

function Card({ title, description, Icon, colors }) {
  const styles = {
    container: "w-[522px] py-10 gap-4 flex items-start bg-white rounded-[24px] px-8 py-4",
    iconBox: `flex items-center justify-center w-[66px] h-[66px] rounded-[24px] shrink-0`,
    title: "text-[20px] font-bold text-darkBlue mb-2",
    description: "text-gray-500"
  }
  return (
    <div className={styles.container}>
      <div
        className={styles.iconBox}
        style={{ background: `linear-gradient(to bottom right, ${colors[0]}, ${colors[1]})` }}
      >
        <Image src={Icon} alt="" width={34}/>
      </div>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default Card