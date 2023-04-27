import * as React from 'react'
import Layout from './layout'
import IndexLayout from './index_layout'

const IndexPage = () => {
  return (
    <div>
    <Layout pageTitle="Welcome">
    </Layout>
    <IndexLayout>
    </IndexLayout>
    </div>
  )
}

export const Head = () => <title>Welcome</title>

export default IndexPage