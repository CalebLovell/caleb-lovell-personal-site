import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Caleb Lovell</h1>
    <p>This is an auto-deploy test. Test test</p>
    <p>Now go build something great.</p>
    <div className='image__holder'>
      <img
        src="https://avatars0.githubusercontent.com/u/39709791?s=460&v=4"
        alt="My beautiful face should have been displayed here"
      />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
