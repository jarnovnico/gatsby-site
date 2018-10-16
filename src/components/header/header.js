import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="header-wrapper">
      <h1 className="logo-home-button">
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <span>
        <Link to="/page-2/" className="small-text-link">Go to page 2</Link>
      </span>
    </div>
  </div>
)

export default Header
