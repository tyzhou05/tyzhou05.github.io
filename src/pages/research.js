import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import css from "./index.css"
import * as styles from "../components/index.module.css"

const Research = () => (
  <Layout>
    <div className = "navbar">
        <a href='/'>Home</a>
        <a className="currentPage" href="/research">Research</a>
    </div>
    <div>
      <h1>To be updated 👨🏻‍💻</h1>
    </div>
    <p></p>
    <hr></hr>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Research
