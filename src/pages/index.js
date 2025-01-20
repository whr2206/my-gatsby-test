// Step 1: Import React
import * as React from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import ArticleCard from '../components/twocolcard'

import { FaAlipay } from 'react-icons/fa6'

import {
  container,
  mainContent,
  articleContainer
} from './index.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
      <>

      <div className={container}>
        <Navbar />
          <div className={mainContent}>
            <Sidebar />
              <div className={articleContainer}>
                <ArticleCard
                  image={<FaAlipay size={48} />}
                  title="A Longer Article Title with Details"

                />
                  <ArticleCard
                  image={<FaAlipay size={48} />}
                  title="A Longer Article Title with Details"

                />
                  <ArticleCard
                  image={<FaAlipay size={48} />}
                  title="A Longer Article Title with Details"

                />
                 <ArticleCard
                  image={<FaAlipay size={48} />}
                  title="A Longer Article Title with Details"

                />
                 <ArticleCard
                  image={<FaAlipay size={48} />}
                  title="A Longer Article Title with Details"

                />
                 <ArticleCard
                  image={<FaAlipay size={48} />}
                  title="A Longer Article Title with Details"

                />
              </div>
          </div>
      </div>

      </>
  )
}

export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage