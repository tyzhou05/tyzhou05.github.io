import * as React from "react"
import { Link } from "gatsby"
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGraduationCap, FaHome, FaBlog, FaCameraRetro } from 'react-icons/fa';
// Import the SVG files
import { ReactComponent as HomeSvg } from "../images/home.svg"
import { ReactComponent as BlogSvg } from "../images/blog.svg"

import Layout from "../components/layout"
import Navigation from "../components/Navigation"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import css from "./index.css"
import { StaticImage } from "gatsby-plugin-image"
import { FaSignature } from "react-icons/fa6";
import {FaImages} from "react-icons/fa6";

const IndexPage = () => (
  <Layout>
    <Navigation currentPage="home" />
    
    <div className = "banner">
        <StaticImage
            className = "banner"
            src="../images/flowers.jpeg"
            alt="banner"
            layout="constrained"
            width={1200}
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
      <h2>
        Hello! 👋🏻
      </h2>
    </div>

    <div>
      <p>
        I'm Tony (zh: 周语童), currently a sophomore studying computer science at the University of Washington, but originally from sunny San Jose, California. 
      </p>

      {/* <p>
        At UW, I used to build driverless software for our first-ever fully autonomous racecar with <a href = "https://www.uwformulamotorsports.com/">UW Formula Motorsports</a>, 
        and used to work part-time at the <a href = "https://www.washington.edu/ima/uwild/climb-with-rec/climbing-spaces/crags-climbing-center/">UW Crags Climbing Center</a> in the IMA. 
      </p> */}

      {/* <p>
        Before UW, I previously sent a few experiments to the ISS, built a CubeSat, and played chess competitively, where I once thought I was going
        to be a national master or an aerospace engineer.
      </p> */}

      <p>
        In my free time, I like to explore coffee shops around Seattle 
        (currently very into bagels and iced lavender lattes) 
        and try new recipes (tiramisu...). I also really enjoy climbing, chess, and photography. 
        But recently I almost passed out while I did a 5k so my goal this summer is to get better at running 😟🏃🏻‍♂️
      </p>

      <p>
        Trying to maintain my personal site better this year. I'm always happy to chat -- feel free to reach out! 
      </p>

      {/* <div class = "thinking">
        Currently thinking about:
        <ol>
          <li>
            Communicating academic implications to short-form content
          </li>
          <li>
            Long-form content and personalized science communication
          </li>
          <li>
            human-LLM collaboration on knowledge-intensive work.
          </li>
        </ol>
      </div> */}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px'}}>
        <div>
          <a href="mailto:tyzhou05@uw.edu">
            <MdEmail style={{ marginRight: '3px', fontSize: '1.2em', position: 'relative', top: '4px' }} />
            <span>[Email]</span>
          </a>
        </div>
        {/* <div className="contact-link">
          <a href="https://www.linkedin.com/in/tyzhou">
            <FaLinkedin  style={{ marginRight: '3px', fontSize: '1.2em', position: 'relative', top: '4px' }} />
            <span>[LinkedIn]</span>
          </a>
        </div> */}
        <div className="contact-link">
          <a href="https://scholar.google.com/citations?user=S4zK_nsAAAAJ&hl=en">
            <FaGraduationCap  style={{ marginRight: '3px', fontSize: '1.2em', position: 'relative', top: '4px' }}/>
            <span>[Scholar]</span>
          </a>
        </div>
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