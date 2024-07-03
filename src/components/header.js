import * as React from "react"
import { Link } from "gatsby"
import uw from '../images/uw.png'

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <a href = "https://washington.edu">
    <img
      alt="UW Logo"
      height={25}
      style={{ margin: 0 }}
      src = {uw}
    />
    </a>
  </header>
)

export default Header
