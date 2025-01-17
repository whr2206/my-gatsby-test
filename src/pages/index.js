// Step 1: Import React
import * as React from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import ArticleCard from '../components/twocolcard'

import { FaAlipay } from 'react-icons/fa6'

// Step 2: Define your component
const IndexPage = () => {
  return (
      <>
      <Navbar />
      <Sidebar />
      <ArticleCard
        image={<FaAlipay size={64} />}
        title="Article Title"
        excerpt="This is a brief summary of the article."
      />
      </>
  )
}

export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage