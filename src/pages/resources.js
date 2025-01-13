// Step 1: Import React

import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const ResourcePage = () => {
    return (
      <Layout pageTitle="Home Page">
        <p>This is where all of the resources shall go.</p>
      </Layout>
    )
  }

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Handy Resources</title>

// Step 3: Export your component
export default ResourcePage