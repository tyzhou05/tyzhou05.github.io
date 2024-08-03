
import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"

/*
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]
*/

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  }
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.intro}>
      {
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />}
      <h1>
        Hello! <span>&#128075;</span>
      </h1>

      {/*}
      <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
      */}
    </div>


    <div className = {styles.IndexPage}>
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

      <h3>
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
    </div>

    <hr></hr>

    {/*
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}*/}
  </Layout>
)


/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 *  export const Head = () => <Seo title="Home" />
 * 
 */



export default IndexPage