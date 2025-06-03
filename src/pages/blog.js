import * as React from "react"
import { Link } from "gatsby"
import { useState } from "react"

import Layout from "../components/layout"
import Navigation from "../components/Navigation"
import Seo from "../components/seo"
import css from "./index.css"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { FaChevronDown } from 'react-icons/fa';

const Blog = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Layout>
      <Navigation currentPage="blog" />
      
      <div>
        <div className="blog">
          <div className="blog-entry-header" onClick={toggleExpand}>
            <h3>
              Almost halfway through college...
            </h3>
            <div className={`dropdown-icon ${isExpanded ? 'expanded' : ''}`}>
              <FaChevronDown size={12} />
            </div>
          </div>
          
          <div className="blog-date">
            <i>May 11th, 2025</i>
          </div>
          
          <div className={`blog-content ${isExpanded ? 'expanded' : ''}`}>
            <p>
              I am... almost a junior? That's crazy. Only a year ago, I was lucky enough to declare my major in CS <a href="https://www.cs.washington.edu/academics/undergraduate/admissions/current-uw/">via current student admission</a> for Spring 2024. 
              There are plenty of <a href="https://www.reddit.com/r/udub/comments/ffajy9/do_not_come_to_uw_if_you_want_to_do_cs_but_are/">doom-heavy posts </a> online about the process, but, perhaps due to some survivorship bias, I wanted to detail my thoughts and reflection on the experience.
            </p>
            <div className="image-with-footnote">
              <StaticImage
                src="../images/admit.jpg"
                alt="UW Admission"
                className="admit-image"
                width={600}
                quality={100}
                formats={["auto", "webp", "avif"]}
                placeholder="blurred"
                transformOptions={{
                  fit: "inside",
                  quality: 100
                }}
              />
              <p className="footnote">February 8th, 2024</p>
            </div>
            <h3>Background</h3>
            <p>
              I don't think I'm naturally very gifted. Coming from a competitive private high school in California, I was never near the top of my class.
              Although I had originally applied for Aeronautics & Astronautics, UW doesn't assign freshmen by major except for a few, and the 800 engineering undeclared freshmen all come in as undeclared to struggle through the calculus series together. I also realized the AeroAstro curriculum was very similar to Mechanical Engineering. 
            </p>
            <p>
              Suddenly I wasn't so sure I wanted to do. I talked with my parents about the obscene out-of-state cost, but they ultimately told me to prioritize my education. 
            </p>
            <p>
              The summer before college I worked as a barista at a very well-known coffee chain, and also got into climbing. With my newfound customer service skills and love for caffeine, a friend forwarded me an on-campus job at the UW Crags Climbing Center in the IMA on a whim and I got it.
            </p>
            <p>
              My plan was to (i) first try for CS, (ii) consider computing-adjacent majors like ACMS and Informatics, or (iii) declare either ECE or HCDE. I did some research in high school and liked it, so I started working with two undergrads under a PhD student in an accessibility lab on an AR/VR HCI project. 
            </p>
            <p>
              I also joined different clubs and found hobbies to keep myself busy. But looking back now, deep down I can tell I was pretty consistently stressed for months on end. I tried to stay proactive and managed to squeeze in all the CS application prerequisites into Fall Quarter.
            </p>

            <h3>The Application</h3>
            <p>At my application point, my activities were grouped into something like this:</p>
            <ol>
              <li>Undergraduate Researcher</li>
              <li>On-campus job at the IMA</li>
              <li>Barista at Starbucks</li>
              <li>Club Memberships</li>
              <li>Summer Internship</li>
            </ol>

            <p>
              My grades were not strong, so I worked on the essays for a few months. They were very personal and basically revolved around each section of my activities. 
              I talked about 1) asking hard questions in HCI research, 2) my plan for utilizing the CS department's resources, and 3) lessons learned from coffee and climbing. I also did write the additional essay on a more personal topic related to my family.
            </p>

            <h3>Reflection</h3>
            <p>
            I think if my application goes to show anything, it highlights that you don't have to be perfect. I also think leaning into the "interest changer" type of student they wanted to see helped a lot.
            </p>
            <div className="quote">
              <i>We use an evaluative, rather than a quantitative, process in our admission review. This means our decisions are based on more than simply which applicants have the highest grades. We do not tally up points; rather, we form an overall evaluation based on academic background and other factors, such as outside interests and activities, evidence of leadership and a sense of direction, and life experience. We do not expect all students to excel across the board, but achievement in relevant academic areas or evidence of overcoming hardships can strengthen an application.</i>
            </div>
            <p>
              What also helped was staying positive and knowing that I had other options and also recognizing that I didn't (and still don't) exactly know what I want to do.
            </p>
            <p>
              This past year I've felt a lot of self-doubt, imposter syndrome, and faced a lot of rejection. I've met lots of people here, but I still can't help but feel like I don't really belong; maybe it's because I'm not from Seattle or Bellevue, maybe it's a mix of a lot of things.
              I also dropped some things, and I think research might be taking up almost all of my time now. I still also don't have anything formal lined up for summer...
            </p>
            <p>
              Was I good enough for this? Do I really deserve to be here? Maybe only time will tell.
            </p>
          </div>
        </div>
      </div>
      <p></p>
      <hr></hr>
    </Layout>
  )
}

export const Head = () => <Seo title="Page two" />

export default Blog
