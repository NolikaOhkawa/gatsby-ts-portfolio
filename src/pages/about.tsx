import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import SnsIcons from '../components/snsIcons'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Post {
  date: string
  id: string
  title: string
}

const AboutPage = ({ data, location }: PageProps<GatsbyTypes.Query>) => {
  const posts = data.allWpPost.nodes

  const language = useSelector((state: RootState) => state.language.language)

  const myIntroduction = [
    {
      lang: 'en',
      name: 'Norika Okawa',
      description: `
Front-End Developer

---

### 🌐 About Me

Aspiring front-end developer skilled in HTML, CSS, JavaScript, and React.

### 🚀 Projects

- **Portfolio Website:** Built with React. [Visit Site](#)

### 📞 Contact

- **Email:** test.sterone@example.com
- **LinkedIn:** [linkedin.com/in/testosterone](#)

      `,
    },
    {
      lang: 'ja',
      name: '大川哲加',
      description: `
フロントエンド開発者

---

### 🌐 自己紹介

HTML、CSS、JavaScript、Reactを得意とするフロントエンド開発者。

### 🚀 プロジェクト

- **ポートフォリオ：** Reactで構築。[サイトを見る](#)

### 📞 連絡先

- **メール:** test.sterone@example.com
- **LinkedIn:** [linkedin.com/in/testosterone](#)
      `,
    },
  ]

  const markdown = `
## Professional Background

- UI/UX Designer and Front-end Developer.

I've worked as a web designer for over 10 years in the Tech industry in Japan and US, responsible for branding, art direction, UI/UX design, and front-end development for websites and mobile apps.

My extensive experience and background in graphic design allow me to bridge the gap between design and development to create the most beautiful and highly functional websites and mobile apps.

I'm passionate about improving the lives of others through design and am continually looking to learn new things every day. Outside of design, I love reading books as well as audiobooks. I write book reviews on my blog and am currently working on an online book club app as my personal project.

Currently, I'm based in San Francisco, California, but originally hail from the tiny town of Yokohama, Japan. Resume available upon request.

[link](https://www.npmjs.com/package/react-markdown/v/8.0.6)
`
  const profile = myIntroduction.find(p => p.lang === language) || myIntroduction[0]

  return (
    <>
      <Layout location={{ pathname: '/about' }} title="About">
        <Seo title="About" />
        <div className="aboutPage">
          <h1 className="text-3xl font-semibold tracking-tight my-2">{profile.name}</h1>
          <article className="leading-loose">
            <Markdown remarkPlugins={[remarkGfm]}>{profile.description}</Markdown>
          </article>
        </div>
        <SnsIcons />
      </Layout>
    </>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query MyQuery {
    allWpPost(sort: { date: DESC }) {
      nodes {
        date(formatString: "MMMDD YYYY")
        id
        title
      }
    }
  }
`
