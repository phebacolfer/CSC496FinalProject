import * as React from 'react'
import Layout from '../pages/layout'
// import WelcomeLayout from '../pages/welcome_layout'

const IndexPage = () => {
  return (
    <div>
    <Layout pageTitle="Welcome">
    </Layout>
    </div>
  )
}

export const Head = () => <title>Welcome</title>

export default IndexPage