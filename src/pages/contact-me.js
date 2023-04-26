import * as React from 'react'
import Layout from './layout'
import ContactLayout from './contact_layout'

const ContactPage = () => {
  return (
    <div>
    <Layout pageTitle="Contact Me">
    </Layout>
    <ContactLayout>
    </ContactLayout>
    </div>
  )
}

export const Head = () => <title>Contact</title>

export default ContactPage