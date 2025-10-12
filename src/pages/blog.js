import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Navigation from "../components/Navigation"
import Seo from "../components/seo"

const Blog = () => {
  const articles = [
      {
        title: "My Favorite Espresso in Seattle",
        date: "Sept 24th, 2025",
        excerpt: "If I had a few hours to kill, where would I go?",
        slug: "/articles/coffee-seattle"
      },
      // {
      //   title: "Almost halfway through college...",
      //   date: "May 11th, 2025",
      //   excerpt: "Declaring a major, reflections on my first two years, and imposter syndrome",
      //   slug: "/articles/halfway-through-college"
      // }
  ];

  return (
    <Layout>
      <Navigation currentPage="blog" />
      
      <div>
        <h2 style={{ marginBottom: 'var(--space-5)' }}>
          Blog
        </h2>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 'var(--space-5)' 
        }}>
          {articles.map((article, index) => (
            <article key={index} style={{
              borderBottom: index < articles.length - 1 ? '1px solid #eee' : 'none',
              paddingBottom: index < articles.length - 1 ? 'var(--space-5)' : '0'
            }}>
              <Link 
                to={article.slug}
                style={{ 
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <h3 style={{ 
                  marginBottom: 'var(--space-2)',
                  color: 'var(--color-primary)'
                }}>
                  {article.title}
                </h3>
              </Link>
              
              <p style={{ 
                fontSize: 'var(--font-sm)', 
                color: '#666',
                marginBottom: 'var(--space-2)'
              }}>
                {article.date}
              </p>
              
              <p style={{ 
                marginBottom: 'var(--space-3)',
                color: '#555'
              }}>
                {article.excerpt}
              </p>
              
              <Link 
                to={article.slug}
                style={{ 
                  fontSize: 'var(--font-sm)',
                  fontWeight: '500'
                }}
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
        
        {articles.length === 0 && (
          <p style={{ 
            color: '#666',
            fontStyle: 'italic'
          }}>
            No articles yet. Check back soon!
          </p>
        )}
      </div>
      
      <hr style={{ marginTop: 'var(--space-6)' }} />
    </Layout>
  )
}

export const Head = () => <Seo title="Blog" />

export default Blog
