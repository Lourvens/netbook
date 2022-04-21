import React from 'react'

function List({ title, items }) {
  const styles = {
    container: "",
    item: "capitalize py-3",
    title: "capitalize text-2xl mb-4"
  }
  return (
    <ul>
      <li className={styles.title}> {title} </li>
      {items.map((item, i) => <li key={i} className={styles.item}> {item} </li>)}
    </ul>
  )
}

export default List