import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import parse from 'html-react-parser'
import Header from './header'
import Footer from './footer'
// import { MenuProvider } from '../context/MenuContext'

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      {/* <MenuProvider> */}
      <Header isHomePage={isHomePage} title={title} />

      <div
        className="mx-auto max-w-5xl flex flex-col min-h-screen items-center justify-between p-6 lg:px-8"
        data-is-root-path={isHomePage}
      >
        {/* <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </header> */}

        <main className="flex-1">{children}</main>

        <Footer />
      </div>
      {/* </MenuProvider> */}
    </>
  )
}

export default Layout
