import React from 'react'
import details from './details'
import Card from './card'
const styles = {
  container: "wrapper",
	cardText: "w-[500px] mx-auto text-center",
	cardContainer: "mt-16 flex flex-wrap justify-center gap-8"
}

function Feature() {
  return (
	<section
	 className={styles.container}
	 style={{ background: `linear-gradient(to bottom,#FFFFFF, #F1F6FD,#F1F6FD,#F1F6FD,#FFFFFF`}}
	>
		<div className={styles.cardText}>
			<mark className="capitalize">our community</mark>
			<h1 className="text-[36px] font-bold mb-4">community main feature</h1>
			<p className="text-gray-400">The wise man therefore always holds in these matters to this principle of selection.</p>
		</div>
		<div className={styles.cardContainer}>
			{details.map((el, i) => <Card {...el} key={i} />)}
		</div>
	</section>
  )
}

export default Feature