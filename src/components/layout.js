/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 * 
 * <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header"
import NowPlaying from "./NowPlaying"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header siteTitle/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `min(66%, 1200px)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-3)`,
            fontSize: `var(--font-sm)`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span>Last updated June 2025.</span>
          <NowPlaying />
        </footer>
      </div>
    </>
  )
}

export default Layout
