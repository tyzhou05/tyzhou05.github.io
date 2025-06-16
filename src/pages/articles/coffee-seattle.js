import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Navigation from "../../components/Navigation"
import Seo from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const CoffeeSeattle = () => {
  return (
    <Layout>
      <Navigation currentPage="blog" />
      
      <div>
        <Link to="/blog" style={{ 
          fontSize: 'var(--font-sm)', 
          marginBottom: 'var(--space-4)',
          display: 'inline-block'
        }}>
          ← Back to Blog
        </Link>
        
        <article>
          <header style={{ marginBottom: 'var(--space-4)' }}>
            <h1>My Favorite Espresso in Seattle</h1>
            <p style={{ 
              color: '#666', 
              fontSize: 'var(--font-sm)',
              marginTop: 'var(--space-2)'
            }}>
              June 4th, 2025
            </p>
          </header>
          
        <p> 
            Confession: I've developed a bad habit of caffeine dependence. I realized that after my fourth coffee one day (gulp). Maybe that's why I'm up at 12AM typing this up. I usually like to get out of the house
            early for different reasons, but that's another story. 
        </p>
        <p>
           Anyways, today I thought about what led to all of this: Seattle's abundance of great cafes. I think I'm generally not too picky. As long as there's free wifi, a quiet place to sit, and it's not too dark, I'm a happy camper! 
        </p>

        <h3>1. URL Coffee</h3>
        <p>
          I really really like URL. Never been much of a designerly person (hopefully that can change!) but even I can tell that the interior 
          is really well-put together. It's tall, airy, and the baristas are always super friendly. 
          Go-to order is a 12oz iced Walk to Work, their signature latte with sweet cream on top. 
        </p>
        
        <div style={{ 
          margin: 'var(--space-5) 0',
          textAlign: 'center'
        }}>
          <StaticImage
            src="../../images/url.jpg"
            alt="URL Coffee interior"
            width={600}
            quality={100}
            formats={["auto", "webp", "avif"]}
            placeholder="blurred"
            transformOptions={{
              fit: "inside",
              quality: 100
            }}
          />
          <p style={{ 
            fontSize: 'var(--font-sm)', 
            color: '#666',
            marginTop: 'var(--space-2)'
          }}>
            The airy interior and fellow Seattleites on laptops
          </p>
        </div>
        
        <p>
          Got a lot of work done on the table in the middle, and baristas will kindly bring your drink out to you after you get seated!
          Slight cons are that it's very far from where I live in U-District, it can get loud during the weekends, 
          and there's only one charger I know of that someone's usually using.
        </p>
        
        <h3>2. Realfine Coffee</h3>

        <p>
          I think my guilty pleasure might just be escaping to Cap Hill. Was even considering trying to live here, 
          but I realized it's probably not the best choice as a student. Especially since it's been so sunny recently, it's tempting... so walkable... but I should be responsible.
        </p>

        <div style={{ 
          margin: 'var(--space-5) 0',
          textAlign: 'center'
        }}>
          <StaticImage
            src="../../images/realfine.jpg"
            alt="Realfine Coffee interior"
            width={600}
            quality={100}
            formats={["auto", "webp", "avif"]}
            placeholder="blurred"
            transformOptions={{
              fit: "inside",
              quality: 100
            }}
          />
          <p style={{ 
            fontSize: 'var(--font-sm)', 
            color: '#666',
            marginTop: 'var(--space-2)'
          }}>
            I think I've sat at almost every seat in this picture! Image courtesy of Realfine's website.
          </p>
        </div>
        <p>
          Prices are pretty fair. Baristas are always friendly and it seems that lots of regulars are here! (alas, I wish they remembered my order too...)
        </p>

        <h3>3. Herkimer Coffee</h3>

        <p>
            Herkimer is a quiet institution all the way up the Ave, probably the closest thing worth walking up besides going directly to Roosevelt past Ku Sushi's 50% off deal and YGF Malatang. 
        </p>

        <p>
          Their pastries are good too, I believe they're from Macrina Bakery? Should check that out too.
        </p>

        <h3>Conclusion</h3>

        <p>
          I think the key that ties all of this together is Seattle's walkability and generally impressive public transportation. Coming from California, you basically need to have a car to get anywhere; public transportation is very sparse besides a few train lines and some cross-city buses. Where I grew up in San Jose, I'm not sure that I even knew about coffee besides Starbucks. Now, I'm enlightened! 
        </p>

        <h3>To try:</h3>

        <ul>
            <li>Monorail Espresso -- SLU (seems to have good selection of roasts but no seating)</li>
            <li>Caffe Vita -- Pioneer Square (been there once but was in a rush that day)</li>
        </ul>


        </article>
      </div>
      
      <hr style={{ marginTop: 'var(--space-6)' }} />
    </Layout>
  )
}

export const Head = () => <Seo title="Almost halfway through college..." />

export default CoffeeSeattle 