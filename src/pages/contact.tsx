import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = ({ data, location }: PageProps<GatsbyTypes.Query>) => {
  const language = useSelector((state: RootState) => state.language.language)
  return (
    <>
      <Layout location={{ pathname: '/about' }} title="About">
        <Seo title="About" />
        <h1>About Me</h1>
        <h2></h2>
        <article></article>
      </Layout>
    </>
  )
}

export default ContactPage
