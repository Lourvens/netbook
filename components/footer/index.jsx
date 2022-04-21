import Image from 'next/image'
import React from 'react'
import List from './list'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Logo from 'assets/logoname.png'

function Footer() {
  const styles = {
    container: "pt-10 bg-[#2B2B39] text-white",
    listBox: "wrapper flex justify-between py-4",
    registerBox: {
      wrapper: "w-[320px] flex flex-col gap-6",
      title: "text-2xl",
      form: "flex border rounded-lg overflow-hidden",
      input: "w-[230px] p-2 inline bg-transparent outline-none",
      btn: "flex-grow bg-white text-darkBlue rounded-l-lg hover:bg-gray-200 ",
    },
    infoBox: "bg-[#20202D] px-16 py-8 flex justify-between",
    socialBtn: "w-8 h-8 p-2 bg-white text-darkBlue rounded-full hover:bg-gray-300"
  }
  const items = {
    home: ['home', 'community', 'events', 'contact'],
    ressources: ['blog', 'news', 'guidelines', 'help center'],
    community: ['NewsFeed', 'profile', 'friends', 'forums'],
    mainLinks: ['members', 'activity', 'groups', 'private groups']
  }
  return (
    <section className={styles.container}>
      <div className={styles.listBox}>
        <List title="home" items={items.home} />
        <List title="ressources" items={items.ressources}/>
        <List title="community" items={items.community}/>
        <List title="main links" items={items.mainLinks}/>

        <div className={styles.registerBox.wrapper}>
          <h1 className={styles.registerBox.title}>
            Subscribe Cirkle Newsletter
          </h1>
          <p> Subscribe to be the first one to know about updates. Enter your email</p>
          <form className={styles.registerBox.form}>
            <input className={styles.registerBox.input} type="email" placeholder="Email address" />
            <button type="submit" className={styles.registerBox.btn}>subscribe</button>
          </form>
        </div>
      </div>
      <div className={styles.infoBox}>
        <span>Besnik Creative Agency.</span>
        <Image src={Logo} alt=""/>
        <div className="flex gap-4">
          <button className={styles.socialBtn}>
            <FaTwitter />
          </button>
          <button className={styles.socialBtn}>
            <FaInstagram />
          </button>
          <button className={styles.socialBtn}>
            <FaFacebookF />
          </button>
          <button className={styles.socialBtn}>
            <FaLinkedinIn />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Footer