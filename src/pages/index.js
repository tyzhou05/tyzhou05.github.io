import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./index.css"

const IndexPage = () => {
  return (
  <Layout minimal>
    <div className="home-minimal">
      <section className="home-top">
        <div className="home-row">
          <div className="home-label">About</div>
          <div className="home-body">
            <p>Hi! I'm a senior studying computer science<br></br> at the University of Washington, <br></br>interested in HCI+design.</p>
            <p>I'm graduating June 2027 and <br></br>looking for <span class="highlight-yellow">a new grad SWE position.</span></p>
            {/* <p>Fun fact: I'm 100% Cantonese but 75% Hakka and 25% Dongbei. 
              <br></br>I listened to three dialects growing up and resulted in 
              <br></br>fluency in fourth grade level Mandarin.
            </p> */}
            {/* <p>I've also recently been training for a half marathon. <br></br>To keep myself sane, I've been listening to plenty of benee, HOAX, and Keane.</p> */}
            <p>Always happy to chat. Feel free to reach out :)</p>
          </div>
        </div>
        <div className="home-row">
          <div className="home-label">Contact</div>
          <div className="home-body">
            <a href="mailto:tyzhou05@gmail.com">tyzhou05@gmail.com</a>
          </div>
        </div>
      </section>

      <section className="home-bottom">
        <div className="home-col home-col-left">
          <div className="home-section-title">EXPERIENCE</div>
          <p><b>UW HCDE</b> &ensp;Undergraduate Researcher</p>
          <p><b>UW CSE</b> &ensp;Undergraduate Researcher</p>
        </div>


        <div className="home-col home-col-right">
          <div className="home-section-title">COURSEWORK</div>
          <ul className="home-course-list">
            <li><b>CSE 447</b> &ensp;Natural Language Processing</li>
            <li><b>CSE 442</b> &ensp;Data Visualization</li>
            <li><b>CSE 440</b> &ensp;Human-Computer Interaction</li>
            <li><b>CSE 421</b> &ensp;Algorithms</li>
            <li><b>CSE 332</b> &ensp;Data Structures & Parallelism</li>
            <li><b>CSE 331</b> &ensp;Software Design & Implementation</li>
            <li><b>HCDE 308</b> &ensp;Visual Communication Design</li>
          </ul>
        </div>
        
      </section>

      {/* <div className="home-signature">
        <StaticImage
          className="home-avatar"
          src="../images/pfpsmile.JPG"
          alt="Tony Zhou"
          layout="fixed"
          width={48}
          height={48}
          quality={100}
          formats={["auto", "webp", "avif"]}
          placeholder="blurred"
        />
        <div className="home-name">Tony Zhou</div>
      </div> */}

    </div>

    {/*
    <Navigation currentPage="home" />

    <div className="main-container">
      <div className="profile-image">
        <StaticImage
          className="pfp-new"
          src="../images/pfpsmile.JPG"
          alt="Tony Zhou"
          layout="fixed"
          width={100}
          height={100}
          quality={100}
          formats={["auto", "webp", "avif"]}
          placeholder="blurred"
        />
        <div style={{ textAlign: 'right', marginTop: '8px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0px', fontSize: '1em'}}>
          <a href="https://tyzhou.bsky.social" aria-label="Bluesky" target="_blank">
            Bluesky
          </a>
          <a href="mailto:tyzhou05@uw.edu" aria-label="Email">
            Email
          </a>
        </div>
      </div>

      <div className="content-area">
        <h2 style={{ fontSize: '2em', marginBottom: '-0.6rem', letterSpacing:'-1.2px'}}>
          hello!
        </h2>
      </div>
    </div>

    <div>
      <p>
        I'm a junior studying computer science at the <a href = "https://cs.washington.edu">University of Washington</a> interested in HCI+design.
        Originally from sunny San Jose, CA. When not on campus, I'm at a branch of the Seattle Public Library or <a href="https://www.google.com/maps/contrib/106532734994751777840/review">exploring something new</a>.
      </p>
      <p><span class="highlight-yellow">I'm graduating June 2027 and looking for new grad software engineer roles.</span> Always happy to chat, feel free to reach out! :)</p>

      <h3 class="h3-header">PROJECTS</h3>
        <p class = "publication">
          PaperTok: Exploring the Use of Generative AI for Creating Short-Form Videos for Research Communication.
          <br></br>
          Meziah Ruby Cristobal*, Hyeonjeong Byeon*, Tze-Yu Chen*, Ruoxi Shang*, Donghoon Shin*, Ruican Zhong*, <b>Tony Zhou</b>*, Gary Hsieh. <span class="conference">CHI 2026.</span>
        </p>
    </div>
    */}
  </Layout>
  );
};

export default IndexPage

export const Head = () => <Seo title="Home" />
