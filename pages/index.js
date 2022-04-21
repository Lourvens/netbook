import Head from 'next/head'
import About from 'components/About'
import Achievement from 'components/Achievement'
import Feature from 'components/Feature'
import Header from 'components/Header'
import Team from 'components/Team'
import CTA from 'components/CTA'
import Blog from 'components/blog'
import Footer from 'components/footer'

const styles = {
  container: ""
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <About />
      <Achievement />
      <Feature />
      <Team />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}
