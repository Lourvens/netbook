import React from 'react'
import Image from 'next/image'

import Logo from 'assets/logo.png'
import SearchIcon from 'assets/search.png'
import LandingImg from 'assets/landingdemo.png'

const styles = {
  autogrow: 'flex-grow',
  header: 'h-[746px] bg-gradient-to-br from-white to-blue-300 pt-8 mt-0 wrapper',
  logo: 'flex semibold text-2xl gap-2 cursor-pointer font-semibold mr-32 font-header',
  navWrapper: "flex items-center",
  linkContainer: "flex gap-8",
  linkItem: "capitalize cursor-pointer text-gray-500 hover:text-darkBlue",
  tools: "flex items-center gap-8",
  searchBox: "flex items-center w-full h-12 bg-white bg-transparent border-b border-gray-300",
  searchBoxInput: "w-full h-full p-2 outline-none bg-transparent",
  searchBoxIcon: "w-8 h-8",
  btnPrimary: "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg py-4 px-2 shadow-xl",
  btnSecondary: "w-48 bg-blue-200 text-blue-500 font-bold rounded-lg py-3",
  btnOutlined: "transition-colors text-blue-500 hover:bg-blue-100 border border-blue-500 rounded p-2",
  wrapper: "mt-16 flex items-center justify-between",
  brandTitle: 'text-[3em] text-darkBlue font-bold leading-[60px]',
  brandDescription: "text-lg text-gray-500",
  btnGroup: "flex gap-8",
  actionBtn: "flex-none w-auto py-4 px-5  capitalize font-semibold"
}

function Header() {
  const navlink = ["home", "community", "blog", "events"]
  return (
    <header className={styles.header} >
      <nav className={styles.navWrapper}>
        <div className={styles.logo}>
          <Image src={Logo} alt='logo'/>
          <h1>Netbook</h1>
        </div>
        <ul className={styles.linkContainer}>
          {navlink.map(nav => <li key={nav} className={styles.linkItem}>{nav}</li>)}
        </ul>
        <div className={styles.autogrow}></div>
        <div className={styles.tools}>
          <div className={styles.searchBox}>
            <Image src={SearchIcon} className={styles.searchBoxIcon} alt='search'/>
            <input type="text" placeholder="Search here..." className={styles.searchBoxInput}/>
          </div>
          <button className={styles.btnPrimary}>
            Log in
          </button>
        </div>
      </nav>
      <section className={styles.wrapper}>
        <div className='w-[515px] flex flex-col gap-8'>
          <button className={styles.btnSecondary}>Netbook community</button>
          <h1 className={styles.brandTitle}>Your solutions for community!</h1>
          <p className={styles.brandDescription}>
            More than 2 billion people in over countries use socibook to stay in touch with friends & family.
          </p>
          <div className={styles.btnGroup}>
            <button className={`${styles.btnPrimary} ${styles.actionBtn}`}>about more</button>
            <button className={`${styles.btnOutlined} ${styles.actionBtn}`}>invite friend</button>
          </div>
        </div>
        <div>
          <Image src={LandingImg} alt='landing'/>
        </div>
      </section>
    </header>
  )
}

export default Header