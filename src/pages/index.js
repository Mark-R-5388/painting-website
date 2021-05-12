import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div className="Hero">
    <div className="HeroGroup">
      <h1>Hello There</h1>
      <p>Welcome to the new website!!</p>
      <Link to='/page-2/'>Go to page 2</Link>
    </div>
  </div>
);

export default IndexPage;
