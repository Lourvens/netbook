import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <About />
    </div>
  )
}
