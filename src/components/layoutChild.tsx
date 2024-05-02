import React from 'react'
import Header from './header'
import Footer from './footer'
// import { MenuProvider } from '../context/MenuContext'

type LayoutChildProps = {
  isHomePage: boolean
  children: React.ReactNode
  title: string
}

const LayoutChild: React.FC<LayoutChildProps> = ({ isHomePage, children, title }) => {
  return (
    <>
      <Header isHomePage={isHomePage} title={title} />
      <div className="max-w-5xl mx-auto px-8">
        <main className="">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default LayoutChild
