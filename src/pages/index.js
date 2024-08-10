
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
          <a href="/research">Research</a>
    </div>
    <div>
      <div class = "header">
        <div class = "pfp" >
            <StaticImage
              src="../images/tony.jpg"
              alt="Tony Zhou"
              layout="fixed"
              width={128}
              height={128}
              quality={100}
              formats={["auto", "webp", "avif"]}
              placeholder="blurred"
              imgStyle={{ 
                borderRadius: '80%', 
              }}
            />
          </div>
          <div class = "leftAlign">
              
          </div>
      </div>
      <h1>
        Hello! 👋🏻
      </h1>
    </div>

    <div>
      <p>
        I'm Tony, currently an undergraduate studying <a href = "https://www.cs.washington.edu">computer science</a> at 
        the University of Washington, but originally from sunny San Jose, California. 
        
        I'm broadly interested in human-computer interaction: can we use 
        multi-modal methods in augmented reality to enable futuristic technology? 
      </p>

      <p>
        At UW, I'm tackling questions like these at the <a href = "https://makeabilitylab.cs.washington.edu">Makeability Lab</a>, 
        where I'm developing a holographic running assistant with the Apple Vision Pro mentored by <a href = "https://jaewook-lee.com/">Jaewook Lee</a>. 
        
        I'm also building driverless software for our first-ever fully autonomous racecar with <a href = "https://www.uwformulamotorsports.com/">UW Formula Motorsports</a>, 
        and work part-time at the <a href = "https://www.washington.edu/ima/uwild/climb-with-rec/climbing-spaces/crags-climbing-center/">UW Crags Climbing Center</a> in the IMA. 
      </p>

      <p>
        Before UW, I previously sent a few experiments to the ISS, built a CubeSat, researched 
        computational biology, and played chess competitively, where I once thought I was going
        to be a national master, astronaut, or aerospace engineer.
      </p>

      <p>
        In my free time, I like to try new coffee shops in the U-District, climb plastic rocks at 
        Seattle Bouldering Project, cook pastas, curate my Spotify playlists, and collect bucket hats.
      </p>

      <p>
        I'm always down to chat. Feel free to reach out! 
      </p>

      <div>
        <a href = "mailto:tyzhou05@uw.edu">[Email]</a>  &ensp; 
        <a href = "https://www.github.com/tyzhou05">[GitHub]</a> &ensp;
        <a href = "https://scholar.google.com/citations?user=S4zK_nsAAAAJ&hl=en">[Google Scholar]</a>
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