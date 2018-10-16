import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <span>
		<Link to="/index.js/">Go back to Home</Link>
	</span>
  </div>
)

export default NotFoundPage