import React from 'react'
import { Link } from 'gatsby'

const Footer: React.FC = () => {
  return (
    <>
      <footer className="">
        <p className="my-5 text-center text-sm">
          <Link to="privacy">Privacy Policy</Link>
        </p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress </a>
        by Norika Okawa
      </footer>
    </>
  )
}

export default Footer
