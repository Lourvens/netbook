import { RadioGroup } from '@headlessui/react'
import React from 'react'
import Card from './card'
import user_details from './userDetails'


function Team() {
  const membersCategorie = ['Newst', 'Popular', 'active']
  const [ activeMember, setMember ] = React.useState(membersCategorie[2])
  const styles = {
    container: "wrapper",
    header: "w-[454px] text-center mx-auto",
    title: "capitalize font-bold text-[24px] text-darkBlue my-4",
    description: "text-gray-500",
    cardContainer: "flex flex-wrap  justify-center mt-20 gap-8",
    checkBox: "m-2 flex gap-4 mt-10 bg-[#F2F7FE] rounded-xl p-2",
    checkBoxItem: "flex-1 text-center p-2 rounded-xl transition-all",
    checkBoxActiveItem: "bg-blue-500 shadow-xl text-white"
  }
  const updateMember = (value) => setMember(value)
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <mark>valuable team</mark>
        <h1 className={styles.title}>our active members</h1>
        <p className={styles.description}>
          when an unknown printer took a galley of type and meeting fari scrambled it.
        </p>
        
        <RadioGroup className={styles.checkBox} value={activeMember} onChange={updateMember}>
          {membersCategorie.map(state =>
            <RadioGroup.Option value={state} key={state} as={React.Fragment}>
              {({ checked }) =>
                <div className={`${styles.checkBoxItem} ${checked ? styles.checkBoxActiveItem : ''}`}>
                  {state}
                </div>
              }
            </RadioGroup.Option>
          )}
        </RadioGroup>
      </div>

      <div className={styles.cardContainer}>
          {user_details.map((data, i) => <Card key={i} {...data} />)}
        </div>
    </section>
  )
}

export default Team