import * as React from "react"
import { Link } from "gatsby"
import { MdEmail } from 'react-icons/md';
// import { FaLinkedin, FaGraduationCap, FaHome, FaBlog, FaCameraRetro} from 'react-icons/fa';
// Import the SVG files
import { ReactComponent as HomeSvg } from "../images/home.svg"
import { ReactComponent as BlogSvg } from "../images/blog.svg"

import Layout from "../components/layout"
import Navigation from "../components/Navigation"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import css from "./index.css"
import { StaticImage } from "gatsby-plugin-image"
import { FaSignature, FaBluesky, FaMapLocationDot, FaGithub } from "react-icons/fa6";
import {FaImages} from "react-icons/fa6";

const IndexPage = () => (
  <Layout>
    <Navigation currentPage="home" />
    
    <div className="main-container">
      <div className="profile-image">
        <StaticImage
          className="pfp-new"
          src="../images/pfpsmile.JPG"
          alt="Tony Zhou"
          layout="fixed"
          width={140}
          height={140}
          quality={100}
          formats={["auto", "webp", "avif"]}
          placeholder="blurred"
        />
        <div style={{ textAlign: 'right', marginTop: '8px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0px' }}>
          <a href="mailto:tyzhou05@uw.edu" aria-label="Email">
            Email
          </a>
          {/* <a href="https://scholar.google.com/citations?user=S4zK_nsAAAAJ&hl=en" aria-label="Google Scholar" target="_blank" rel="noopener noreferrer">
            Scholar
          </a> */}
          {/* <a href="https://github.com/tyzhou05" target="_blank">
            GitHub
          </a> */}
          <a href="https://tyzhou.bsky.social" aria-label="Bluesky" target="_blank">
            Bluesky
          </a>
          {/* <a href="https://www.google.com/maps/contrib/106532734994751777840/reviews" target="_blank">
            Exploring
          </a> */}
        </div>
      </div>
      
      <div className="content-area">
        <h2>
          hello! 
        </h2>
      </div>
    </div>

    <div>
      <p>
        I'm Tony, currently a junior studying computer science at the <a href = "https://cs.washington.edu">University of Washington</a>, but originally from sunny San Jose, California. 
      </p>

      <p>
        At UW, I've been interested in HCI+design. I'm primarily working as an undergrad researcher with <a href = "https://faculty.washington.edu/garyhs/">Gary Hsieh</a> (HCDE) and <a href = "https://homes.cs.washington.edu/~axz/">Amy Zhang</a> (CSE). 
        Over the summers I also collaborate with <a href = "https://dingzeyu.li/">Ding Li</a> (Adobe Research). 

        Research topics I'm thinking about mostly revolve around HCI, science communication, social media, and writing tools. 
        
        {/* I'm currently working through <a href = "https://books.google.com/books/about/Sketching_User_Experiences_Getting_the_D.html?id=2vfPxocmLh0C&source=kp_book_description">Sketching User Experiences</a> by Bill Buxton. */}
      </p>

      <p>
        I'm usually at a branch of the Seattle Public Library or exploring a new <a href="https://www.google.com/maps/contrib/106532734994751777840/review">coffee shop</a> when not on campus.
        
        When I used to have free time, I played chess competitively and worked at the Crags Climbing Center at the UW IMA.
{/*      
This quarter I've been doing my best to understand proper houseplant care: my monstera deliciosa is slowly taking over my window, yet my n'joy pothos has not grown since I bought it.    
        Recently I've been reviewing spots around Seattle <a href = "https://www.google.com/maps/contrib/106532734994751777840/photos/data=!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D">in my free time</a>. */}
      </p>

      <p>
        I am always happy to chat, feel free to reach out! :)
      </p>

      {/* <hr>
      </hr> */}

      <h3 class="research-projects">RESEARCH PROJECTS</h3>
        <p class = "publication">
          [CHI 2026] &nbsp; 
          PaperTok: Exploring the Use of Generative AI for Creating Short-Form Videos for Research Communication.
          <br></br>
          Meziah Ruby Cristobal*, Hyeonjeong Byeon*, Tze-Yu Chen*, Ruoxi Shang*, Donghoon Shin*, Ruican Zhong*, <b>Tony Zhou</b>*, Gary Hsieh. 
        </p>
        <p class = "publication">
          [CHI 2026] &nbsp; 
          Decoupling of Usefulness and Novelty: Evaluating the Impact of Generative AI on Design Outputs and Designers' Creative Thinking.
          <br></br>
          Yue Fu, <b>Tony Zhou</b>, Bin Han, Marx Wang, Yixin Chen, Zelia Gomes Da Costa Lai, Rock Yuren Pang, Katharina Reinecke, Jacob O.
          Wobbrock, Alexis Hiniker.
        </p>
        {/* <StaticImage
          className = "research-icon"
          src="../images/xxx.jpg"
          alt="icon"
          width={128}
          height={128}
          quality={100}
          formats={["auto", "webp", "avif"]}
          placeholder="blurred"
        /> */}
      {/* </div> */}
      

      {/* <hr></hr>

      <p>
        I was originally an undeclared engineering major and transferred into the CS department. I wrote a bit about that on my blog here.
      </p> */}
{/* 
      <div class = "thinking">
        Currently thinking about:
        <ol>
          <li>
            Communicating academic implications to short-form content
          </li>
          <li>
            Long-form content and personalized science communication
          </li>
          <li>
            end user feed curation for social media
          </li>
        </ol>
      </div> */}
    </div>

    <hr class="divider"></hr>
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
