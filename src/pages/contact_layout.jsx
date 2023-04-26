import * as React from 'react'
import { Link } from 'gatsby'
import {
  container, text
} from './contact_layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const ContactLayout = ({ }) => {
  return (
    <div className={container}>
      <div className={text}>
        <main>
          <h4>GitHub</h4>
          <a href="https://github.com/phebacolfer">&emsp;https://github.com/phebacolfer</a>
          <h4>LinkedIn</h4>
          <a href="https://linkedin.com/in/phebacolfer">&emsp;https://linkedin.com/in/phebacolfer</a>
          <h4>Email</h4>
          <a href="mailto:phebajcolfer@gmail.com">&emsp;phebajcolfer@gmail.com</a>
          <h4>Phone Number</h4>
          <p>&emsp;859-447-4771</p>
          </main>
      </div>
    </div>
  )
}

export default ContactLayout