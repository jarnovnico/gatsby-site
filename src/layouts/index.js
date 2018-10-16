import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import './reset.css'
import './grid.css'
import './buttons.css'
  
const Layout = ({ children, data }) => (
  <div>
    {/* Change the data in gatsby-config.js */}
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Videos' },
        { name: 'keywords', content: 'skateboarden, friends, Schagen' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div className="main-container">
      {/* 
        This is a specific Gatsby function 
        only in the layout page, this has 
        to be there for Gatsby to work
      */}
      {children()}
    </div>
    {/*<Footer></Footer>*/}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout


{/* 
  Object to set up the meta data 
  for the head of the site, change 
  the data in gatsby-config.js
*/}
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
