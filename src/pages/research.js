import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Research = () => (
  <Layout>
    <div className = "navbar">
        <a href='/'>Home</a>
        <a className="currentPage" href="/research">Research</a>
    </div>
    <h1>To be updated 👨🏻‍💻</h1>
    <p></p>
    <hr></hr>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Research
