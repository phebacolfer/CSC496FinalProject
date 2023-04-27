import * as React from 'react'
import {
  container, text
} from './contact_layout.module.css'

const HomeLayout = ({ }) => {
  return (
    <div className={container}>
      <div className={text}>
        <main>
          <h4>Welcome to My Project!</h4>
          <p>This site was created to help you plan outings, hangouts, nights on the town, date nights, or anything else that might need an activity!</p>
          <p>Navigating and using this site is pretty simple; Select the Random tab to receive a random idea, the Search tab to search for ideas by title, the View All to see a list of all current ideas, or the Contact Me to learn more about who I am! At this stage in development, adding more ideas requires adding more Markdown files to the GatsbyJS project, but the ability to create and save your own ideas will hopefully be implemented soon!</p>
          </main>
      </div>
    </div>
  )
}

export default HomeLayout