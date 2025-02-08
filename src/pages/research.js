import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import css from "./index.css"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Research = () => (
  <Layout>
    <div className = "navbar">
        <a href='/'>Home</a>
        <a className="currentPage" href="/research">Research</a>
    </div>
    <div>
      <h1>Research 👨🏻‍💻</h1>
      <p> 
        I'm interested in human-computer interaction (HCI), including topics in
        evidence-based design and social computing.
      </p>
      <p>
        I'm currently working with <a href = "https://donghoon.io">Donghoon Shin</a> and <a href = "https://faculty.uw.edu/garyhs">
        Prof. Gary Hsieh</a> on a project for implementation science and design.

        Recently I've also started working with <a href = "https://jaewonkim.me">JaeWon Kim</a> on a broadcast social media platform, 
        and <a href = "https://dingzeyu.li">Ding Li</a> on challenges in longitudinal co-creation.
     
        I also work with <a href = "https://chrisfudesign.com">Chris (Yue) Fu</a> investigating 
        mixed-initiative creativity for designers.
      </p>

      {/* <p>
        I'm always grateful for my first research experiences, where I did some data analysis for engineered
        muscle cells in a <a href = "https://med.stanford.edu/huanglab.html">tissue engineering lab</a> at 
        Stanford Med.
      </p> */}

      <h3>
        Under Review:
      </h3>

      <div class = "research">
        {/* <StaticImage
          className = "research-icon"
          src="../images/tony.jpg"
          alt="Creativity Icon"
          width={128}
          height={128}
          quality={100}
          formats={["auto", "webp", "avif"]}
          placeholder="blurred"
        /> */}
        <p class = "publication">
          [1] &nbsp; Yue Fu, Han Bin, <b>Tony Zhou</b>, Marx Wang, Yixin Chen, Zelia Gomes Da Costa Lai, Jacob O.
          Wobbrock, and Alexis Hiniker. 2024. <i>Creativity in the Age of AI: Evaluating the Impact of Generative 
            AI on Design Outputs and Designers’ Creative Thinking. </i>
        </p>
      </div>

      <div class = "research">
        {/* <p class = "publication">
          [Journal] &nbsp; Alex Ho Pang Chan, Ishita Jain, Beu P. Oropeza, <b>Tony Zhou</b>, Brandon Nelsen, Nicholas A.
          Geisse, and Ngan F. Huang. 2023. <i>Combinatorial Extracellular Matrix Cues with
          Mechanical Strain Induce Differential Effects on Myogenesis in Vitro. </i>Biomaterials Science,
          Vol. 11, no. 17, pp 5893–5907. <a href = "https://doi.org/10.1039/D3BM00448A">https://doi.org/10.1039/D3BM00448A</a>
        </p> */}
      </div>

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
