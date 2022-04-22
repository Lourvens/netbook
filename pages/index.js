import Head from 'next/head'
import About from 'components/About'
import Achievement from 'components/Achievement'
import Feature from 'components/Feature'
import Header from 'components/Header'
import Team from 'components/Team'
import CTA from 'components/CTA'
import Blog from 'components/blog'
import Footer from 'components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Netbook | your solutions for community</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Netbook | Your solutions for community." />
        <meta name="description" content="More than 2 billion people in over countries use socibook to stay in touch with friends & family."/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://netbook-2gw831yh9-lourvens.vercel.app/" />
        <meta property="og:title" content="Netbook | Your solutions for community." />
        <meta property="og:description" content="More than 2 billion people in over countries use socibook to stay in touch with friends & family."/>
        <meta property="og:image" content="https://netbook-2gw831yh9-lourvens.vercel.app/presentation.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://netbook-2gw831yh9-lourvens.vercel.app/" />
        <meta property="twitter:title" content="Netbook | Your solutions for community." />
        <meta property="twitter:description" content="More than 2 billion people in over countries use socibook to stay in touch with friends & family." />
        <meta property="twitter:image" content="https://netbook-2gw831yh9-lourvens.vercel.app/presentation.png"></meta>

      </Head>
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
