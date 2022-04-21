import React from 'react'
import details from './blogDetails'
import Card from './card'

const styles = {
  container: "wrapper",
  mark: "capitalize",
  title: "text-[32px] font-bold capitalize text-darkBlue",
  cardContainer: "my-4 flex flex-wrap justify-between"
}

function Blog() {
  
  return (
    <section className={styles.container}>
      <div className="text-center">
        <mark className={styles.mark}>get our application</mark>
        <h1 className={styles.title}>latest news</h1>
      </div>
      <div className={styles.cardContainer}>
        {details.map((data, i) =>  <Card {...data} key={i} /> )}
      </div>
    </section>
  )
}

export default Blog