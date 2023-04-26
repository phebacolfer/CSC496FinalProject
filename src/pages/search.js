import * as React from 'react'
import Layout from './layout'
import SearchLayout from './search_layout'

const SearchPage = () => {
  return (
    <div>
    <Layout pageTitle="Search">
    </Layout>
    <SearchLayout>
    </SearchLayout>
    </div>
  )
}

export const Head = () => <title>Search</title>

export default SearchPage