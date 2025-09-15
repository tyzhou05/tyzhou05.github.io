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
    
    <div className="main-container">
      <div className="profile-image">
        <StaticImage
          className="pfp-new"
          src="../images/newpfp.JPG"
          alt="Tony Zhou"
          layout="fixed"
          width={200}
          height={200}
          quality={100}
          formats={["auto", "webp", "avif"]}
          placeholder="blurred"
        />
        <div className="image-caption">
          he/him
        </div>
      </div>
      
      <div className="content-area">
        <h2>
          Hello! 👋🏻
        </h2>
      </div>
    </div>

    <div>
      <p>
        I'm Tony, currently a junior studying computer science at the <a href = "https://uw.edu">University of Washington</a>, but originally from sunny San Jose, California. 
      </p>

      <p>
        At UW, I've been primarily working as an undergrad researcher with <a href = "https://faculty.washington.edu/garyhs/">Gary Hsieh</a> (HCDE) and <a href = "https://homes.cs.washington.edu/~axz/">Amy Zhang</a> (CSE). 
        Over the summers I also collaborate with <a href = "https://dingzeyu.li/">Ding Li</a> (Adobe Research). 

        Research topics I'm thinking about mostly revolve around HCI, science communication, social media, and writing tools. 
        
        {/* I'm currently working through <a href = "https://books.google.com/books/about/Sketching_User_Experiences_Getting_the_D.html?id=2vfPxocmLh0C&source=kp_book_description">Sketching User Experiences</a> by Bill Buxton. */}
      </p>

      <p>
        In my free time this summer, I've been doing my best to understand proper houseplant care: my monstera deliciosa is slowly taking over my window, yet my n'joy pothos has not grown since I bought it.
        
        I love attempting my hand at traditional Italian pastas and I'm trying to perfect a <a href = "https://www.youtube.com/watch?v=lXEtC3Y9sqY">rigatoni carbonara</a>.
      </p>

      <p>
        Hoping to keep my personal site more up to date this year. I am always happy to chat, feel free to reach out! :)
      </p>

      {/* <hr></hr>

      <p>
        I was originally an undeclared engineering major and transferred into the CS department. I wrote a bit about that on my blog here.
      </p> */}

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
            <span>[email]</span>
          </a>
        </div>
        {/* <div className="contact-link">
          <a href="https://www.linkedin.com/in/tyzhou">
            <FaLinkedin  style={{ marginRight: '3px', fontSize: '1.2em', position: 'relative', top: '4px' }} />
            <span>[LinkedIn]</span>
          </a>
        </div> */}
        {/* <div className="contact-link">
          <a href="https://scholar.google.com/citations?user=S4zK_nsAAAAJ&hl=en">
            <FaGraduationCap  style={{ marginRight: '3px', fontSize: '1.2em', position: 'relative', top: '4px' }}/>
            <span>[Scholar]</span>
          </a>
        </div> */}
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
