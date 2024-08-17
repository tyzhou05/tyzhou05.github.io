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
      <h1>Research 👨🏻‍💻</h1>
      <p> 
        I'm broadly interested in human-computer interaction, including topics in design, visualization, and AR/VR. 
      </p>
      <p>
        For the past year, I've been working at the <a href = "https://makeabilitylab.cs.washington.edu">Makeability Lab</a>, 
        where I'm developing a holographic running assistant with the Apple Vision Pro mentored by <a href = "https://jaewook-lee.com/">Jaewook Lee</a>.
        This summer, I'm also collaborating with <a href = "https://chrisfudesign.com">Chris Fu</a>.
      </p>

      <p>
        My first research experiences were in high school, where I was lucky enough to do data analysis for lab-engineered
        muscle cells in a <a href = "https://med.stanford.edu/huanglab.html">tissue engineering lab</a> at 
        Stanford Med.
      </p>

      <div>
        <a href = "https://scholar.google.com/citations?user=S4zK_nsAAAAJ&hl=en">[Google Scholar]</a>
      </div>
    </div>
    <p></p>
    <hr></hr>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Research
