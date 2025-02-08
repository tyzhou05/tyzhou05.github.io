
import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import css from "./index.css"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <div className = "navbar">
          <a className="currentPage" href='/'>Home</a>
          {/* <a href="/research">Research</a> */}
    </div>

    <div className = "banner">
        <StaticImage
            className = "banner"
            src="../images/flowers.jpeg"
            alt="banner"
            layout="fixed"
            width={800}
            height={200}
            quality={100}
            formats={["auto", "webp", "avif"]}
            placeholder="blurred"
          />
    </div>
    <div>
       {/* <div class = "header">
        <div>
            <StaticImage
              className = "pfp"
              src="../images/tony.jpg"
              alt="Tony Zhou"
              layout="fixed"
              width={128}
              height={128}
              quality={100}
              formats={["auto", "webp", "avif"]}
              placeholder="blurred"
            />
          </div>
        </div>  */}
      <h1>
        Hello! 👋🏻
      </h1>
    </div>

    <div>
      <p>
        I'm Tony, currently a second-year undergraduate studying <a href = "https://www.cs.washington.edu">computer science</a> at 
        the University of Washington, but originally from sunny San Jose, California. 
      </p>

      {/* <p>
        At UW, I used to build driverless software for our first-ever fully autonomous racecar with <a href = "https://www.uwformulamotorsports.com/">UW Formula Motorsports</a>, 
        and used to work part-time at the <a href = "https://www.washington.edu/ima/uwild/climb-with-rec/climbing-spaces/crags-climbing-center/">UW Crags Climbing Center</a> in the IMA. 
      </p> */}

      <p>
        Before UW, I previously sent a few experiments to the ISS, built a CubeSat, and played chess competitively, where I once thought I was going
        to be a national master or an aerospace engineer.
      </p>

      <p>
        In my free time, I like to explore coffee shops around Seattle 
        (currently very into bagels and iced lavender lattes) 
        and try new recipes. 
      </p>

      <p>
        I'm always down to chat. Feel free to reach out! 
      </p>

      <div>
        <a href = "mailto:tyzhou05@uw.edu">[Email]</a>  &nbsp; 
        <a href = "https://www.linkedin.com/in/tyzhou">[LinkedIn]</a> &ensp;
      </div>
    </div>

    <hr></hr>
  </Layout>
)


/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 *  export const Head = () => <Seo title="Home" />
 * 
 * <h3>
      Links: 
      </h3>
      <ul>
        <li>
          Email: <a href = "mailto:tyzhou05@uw.edu">tyzhou05@uw.edu</a> 
        </li>
        <li>
          GitHub: <a href = "https://www.github.com/tyzhou05">tyzhou05</a> 
        </li>
        <li>
          LinkedIn: <a href = "https://www.linkedin.com/in/tyzhou">tyzhou</a> 
        </li>
        <li>
          Publications: <a href = "https://scholar.google.com/citations?user=S4zK_nsAAAAJ&hl=en">Google Scholar</a>
        </li>
      </ul>
 */



export default IndexPage