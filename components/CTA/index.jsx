import Image from 'next/image'
import React from 'react'

import MobileMockup from 'assets/mobilemuckup.png'
import AppleLogo from 'assets/apple.png'
import GoogleplayLogo from 'assets/googleplay.png'


const styles = {
  container: "wrapper pb-0  bg-[#E5F0FD] flex justify-between items-center",
  textContainer: "w-[450px]",
  highlight: "font-medium capitalize",
  title: "text-[36px] text-darkBlue leading-10 my-4 font-bold",
  description: "text-gray-500",
  btnGroup: "flex gap-8 mt-4",
  btn: "bg-white flex items-center gap-2 px-4 py-2 rounded-lg",
  btnSubtitle: "text-gray-500 text-[12px] block capitalize",
  btnTitle: "capitalize font-medium"
}

function CTA() {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <mark className={styles.highlight}>get our application</mark>
        <h1 className={styles.title}>You Can Easily Find This App…!</h1>
        <p className={styles.description}>
          I say chap that’s suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant.
        </p>
        <div className={styles.btnGroup}>
          <button className={styles.btn}>
            <Image src={AppleLogo} alt="" width={32} height={32}/>
            <div>
              <span className={styles.btnSubtitle}>download on the</span>
              <span className={`text-darkBlue ${styles.btnTitle} `}>app store</span>
            </div>
          </button>
          <button className={`${styles.btn} bg-darkBlue text-white`}>
            <Image src={GoogleplayLogo} alt="" width={60} height={40}/>
            <div>
              <span className={styles.btnSubtitle}>download on the</span>
              <span className={`text-white ${styles.btnTitle} `}>play store</span>
            </div>
          </button>
        </div>
      </div>
      <div>
        <Image src={MobileMockup} alt="" width={500} height={400}/>
      </div>
    </section>
  )
}

export default CTA