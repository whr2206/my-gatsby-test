// Step 1: Import React

import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const ProjectPage = () => {
    return (
      <Layout pageTitle="Home Page">
        <p>This is where the projects will go.</p>
      </Layout>
    )
  }

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Project Page</title>

// Step 3: Export your component
export default ProjectPage