import * as React from "react"
import { Link } from "gatsby"
import { MdEmail } from 'react-icons/md';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
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

const IndexPage = () => {
  const [btp1, setbtp1] = React.useState(false);
  const [btp2, setbtp2] = React.useState(false);

  return (
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

      <h3 class="research-projects">PROJECTS</h3>
        <p class = "publication">
          [CHI 2026] &nbsp; 
          PaperTok: Exploring the Use of Generative AI for Creating Short-Form Videos for Research Communication.
          <br></br>
          Meziah Ruby Cristobal*, Hyeonjeong Byeon*, Tze-Yu Chen*, Ruoxi Shang*, Donghoon Shin*, Ruican Zhong*, <b>Tony Zhou</b>*, Gary Hsieh. 
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '-10px',
          marginBottom: 'var(--space-4)',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          }}>
            <a href="#" style={{ fontWeight: '400' }}>[pdf]</a>
            {/* <a href="#" style={{ fontWeight: '400' }}>[html]</a>
            <a href="#" style={{ fontWeight: '400' }}>[arxiv]</a>
            <a href="#" style={{ fontWeight: '400' }}>[code]</a> */}
          </div>
          <button 
            onClick={() => setbtp1(!btp1)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-primary)',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              fontWeight: '500'
            }}
          >
            behind the scenes
            <FaChevronRight 
              style={{
                fontSize: '0.8em',
                transition: 'transform 0.2s ease',
                transform: btp1 ? 'rotate(90deg)' : 'rotate(0deg)'
              }}
            />
          </button>
        </div>
        {btp1 && (
          <div style={{
            background: '#2a2a2a',
            color: '#ffffff',
            padding: 'var(--space-5)',
            marginTop: 'var(--space-3)',
            marginBottom: 'var(--space-3)',
            borderRadius: '0px'
          }}>
            <p>
              I'm really proud of this project, so it deserves a longer reflection. This was an idea I had been broadly thinking about since starting to work with Gary fall 2024, because I remember the first thing I noticed was Donghoon's line of work focuses on prescriptivity (design cards) for practicioners (designers). 
              While Donghoon is very smart and it makes sense to go more specific, I wondered if there was a way to broaden the scope, even back to Gary's existing work on science communication.
              But as the only undergrad in a lab full of accomplished graduate students, I was always a little scared of trying to pitch my own ideas. Luckily, the opportunity sort of presented itself when we all wanted to work on a fun summer lab project.
            </p>
            <p>
              I thought long and hard about how people consume content nowadays.

              What do most people do in their free time? Watch short-form videos (read: addictive TikToks). While most people don't read academic papers in their free time, people love short-form videos that are designed to be engaging in all the best (and worst) ways possible.
              I also saw some recent video-related work (Papeos, PodReels) that I found inspirational. With that, I pitched my half baked idea:
            </p>
            <div style={{ 
              marginTop: 'var(--space-4)', 
              marginBottom: 'var(--space-4)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <StaticImage
                src="../images/papertoknote.jpg"
                alt="Notes from notes app about PaperTok idea"
                quality={100}
                formats={["auto", "webp", "avif"]}
                style={{
                  // border: '1px solid #ddd',
                  borderRadius: '0px'
                }}
              />
            </div>
            <p> 
              While my notes were very scrambled (there are like 5 different ideas in here), I think I did a better job clearly articulating it in person. It turns out my idea wasn't so crazy. We all opted for this one as the lab project.
              I could never have done it on my own so I'm grateful to my labmates and especially Meziah for taking the lead on this one.
              Through the submission process, I expected the standard R&R pushback, but I really didn't have any doubts about it ultimately getting in. 
              To be honest, I kind of didn't feel anything when it did, and even if it didn't, I probably still wouldn't have felt anything? Maybe it's good to sometimes be a bit detached from your work. (is this normal?)
            </p>
            <p>
              Looking back, the idea was pretty much there in my head and almost communicated through my notes. Although not something publishable or interesting research-wise yet.

              I learned that <i>good ideas don't ever happen in a vacuum especially when I'm only thinking alone</i>. Maybe my bad ideas might still lead to something along the way. 
            </p>
            <p>
              As a final note, crunch time for the deadline was painful but fun. I got some wonderful encouragement from Gary every day on quant analysis, redoing tukey HSD tests, and using my student JMP plan to its full extent. This is how he can publish so many papers each year:
            </p>
            <div style={{ 
              marginTop: 'var(--space-4)', 
              marginBottom: 'var(--space-4)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <StaticImage
                src="../images/gary-encouragement.jpg"
                alt=""
                quality={100}
                formats={["auto", "webp", "avif"]}
                style={{
                  // border: '1px solid #ddd',
                  borderRadius: '0px'
                }}
              />
            </div>
          </div>
        )}
        <p class = "publication">
          [CHI 2026] &nbsp; 
          Decoupling of Usefulness and Novelty: Evaluating the Impact of Generative AI on Design Outputs and Designers' Creative Thinking.
          <br></br>
          Yue (Chris) Fu, <b>Tony Zhou</b>, Bin Han, Marx Wang, Yixin Chen, Zelia Gomes Da Costa Lai, Rock Yuren Pang, Katharina Reinecke, Jacob O.
          Wobbrock, Alexis Hiniker.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '-10px',
          marginBottom: 'var(--space-4)',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          }}>
            <a href="#" style={{ fontWeight: '400' }}>[pdf]</a>
            {/* <a href="#" style={{ fontWeight: '400' }}>[html]</a>
            <a href="#" style={{ fontWeight: '400' }}>[arxiv]</a>
            <a href="#" style={{ fontWeight: '400' }}>[code]</a> */}
          </div>
          <button 
            onClick={() => setbtp2(!btp2)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-primary)',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              fontWeight: '500'
            }}
          >
            behind the scenes
            <FaChevronRight 
              style={{
                fontSize: '0.8em',
                transition: 'transform 0.2s ease',
                transform: btp2 ? 'rotate(90deg)' : 'rotate(0deg)'
              }}
            />
          </button>
        </div>
        {btp2 && (
          <div style={{
            background: '#2a2a2a',
            color: '#ffffff',
            padding: 'var(--space-5)',
            marginTop: 'var(--space-3)',
            marginBottom: 'var(--space-3)',
            borderRadius: '0px'
          }}>
            <p>
              During my freshman year, I had previously worked on an augmented reality project with a PhD student and a few other undergrads. It was a fun experience (and also was my main motivation for transferring into the CS department, but that's another story). 
              But I soon realized that Jae was the only person doing anything AR-related in the department, and that I should probably be exploring beyond just the CS department due to UW's interdisciplinary strengths in HCI.
            </p>  
              <p> So my goal summer 2024, while doing an internship back home, was to gain some publishable HCI research experience. I looked around at a bunch of lab websites and reached out to Chris after checking out some of his prior studies. I was also a bit nervous back then to directly contact professors; PhD students felt much more approachable.
              I'm glad Chris is super easy to work with and he is a busy bee: he had numerous projects in progress and I opted to work on this one since it sounded the most interesting to me at the time. The study and data collection was already done during the school year, so my work was a lot of data analysis+python scripting+qualitative coding. 
            </p>
            <p>
              Unfortunately we got soundly rejected from CHI 2025 and C&C 2025. What sucked was that reviewers really wanted to see a stronger output evaluation besides just clients, which was valid but discouraging.
              Chris had the great idea to add collaborators (Rock, Katharina) to evaluate on a crowdsourced platform, Labinthewild, to which I deployed the survey with a lot of help from Rock. 
              Though I did not lead this project, this nonetheless was my first time contributing to a paper and understanding the full submission cycle (three times!)
            </p>
          </div>
        )}
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
  );
};


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
