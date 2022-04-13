import React from 'react'

const styles = {
  container: "h-[576px] my-8 flex",
  cardGroup: ""
}

function About() {
  return (
    <section id="about" className={styles.container} >
      <div className={styles}>
        <span>Whats Netboks?</span>
        <h1>Why Join to Netbook Social Network?</h1>
        <p>
          Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.
        </p>
      </div>
      <div className={styles.cardGroup}></div>
    </section>
  )
}

export default About