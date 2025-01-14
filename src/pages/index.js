// Step 1: Import React
import * as React from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

// Step 2: Define your component
const IndexPage = () => {
  return (
      <><Navbar /><Sidebar /></>
  )
}

export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage