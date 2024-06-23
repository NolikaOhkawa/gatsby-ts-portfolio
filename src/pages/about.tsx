import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import SnsIcons from '../components/snsIcons';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Post {
  date: string;
  id: string;
  title: string;
}

const AboutPage = ({ data, location }: PageProps<GatsbyTypes.Query>) => {
  const posts = data.allWpPost.nodes;

  const [instaPosted, setInstaPosted] = useState([]);
  const [clickInstaUpdate, setClickInstaUpdate] = useState(false);
  const onClickUpdate = () => {
    setClickInstaUpdate(!clickInstaUpdate);
  };
  useEffect(() => {
    console.log('Updated instaPosted:', instaPosted);
  }, [instaPosted]); // この行を追加

  useEffect(() => {
    const user_name = 'happyyyylemon';
    const access_token =
      'EAAKtGwSi14QBOx4QI7yLWsy4hxOc4kTSflEnuMqXleVlMyhp7wDDX7sezmjU7bHPWRBbkgaq8lt7KH0jWYjA8yyCemvfCtT1MpXskXHKAUUyG0DaUsroWiCQZAMWvCp8sw11YmTBTAGb7Tvmo2qvLg8UOSsd7OaDr0z6VE5UBHgtR2EQeSUkuqfZBN7PBlitRgsknZBAkG2h4BQ';
    const user_id = '17841440903662656';
    const get_count = 5; //取得したい投稿数
    const version = 'v19.0';
    Axios.get(
      `https://graph.facebook.com/${version}/${user_id}?fields=business_discovery.username(${user_name}){id,followers_count,media_count,ig_id,media.limit(${get_count}){caption,media_url,like_count}}&access_token=${access_token}`
    ).then((res) => {
      setInstaPosted(res.data);
      console.log('res.data');
      console.log(instaPosted);
    });
  }, [clickInstaUpdate]);

  const language = useSelector((state: RootState) => state.language.language);

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
  ];

  const markdown = `
## Professional Background

- UI/UX Designer and Front-end Developer.

I've worked as a web designer for over 10 years in the Tech industry in Japan and US, responsible for branding, art direction, UI/UX design, and front-end development for websites and mobile apps.

My extensive experience and background in graphic design allow me to bridge the gap between design and development to create the most beautiful and highly functional websites and mobile apps.

I'm passionate about improving the lives of others through design and am continually looking to learn new things every day. Outside of design, I love reading books as well as audiobooks. I write book reviews on my blog and am currently working on an online book club app as my personal project.

Currently, I'm based in San Francisco, California, but originally hail from the tiny town of Yokohama, Japan. Resume available upon request.

[link](https://www.npmjs.com/package/react-markdown/v/8.0.6)
`;
  const profile =
    myIntroduction.find((p) => p.lang === language) || myIntroduction[0];

  return (
    <>
      <Layout location={{ pathname: '/about' }} title='About'>
        <Seo title='About' />
        <div className='aboutPage'>
          <h1 className='text-3xl font-semibold tracking-tight my-2'>
            {profile.name}
          </h1>
          <article className='leading-loose'>
            <Markdown remarkPlugins={[remarkGfm]}>
              {profile.description}
            </Markdown>
          </article>
        </div>
        <div>
          <h2 className='text-xl font-semibold tracking-tight my-2'>
            Instagram
          </h2>
          {instaPosted.business_discovery &&
            instaPosted.business_discovery.media &&
            instaPosted.business_discovery.media.data &&
            instaPosted.business_discovery.media.data.map((item, index) => (
              <>
                <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                  <div className='group relative'>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                      {/* <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"> */}
                      <img
                        key={index}
                        src={item.media_url}
                        alt={`Instagram image ${index + 1}`}
                        className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                      />
                    </div>
                    <div className='mt-4 flex justify-between'>
                      <div>
                        <h3 className='text-sm text-gray-700'>
                          <a href='#'>
                            <span
                              aria-hidden='true'
                              className='absolute inset-0'
                            ></span>
                            {item.caption}
                          </a>
                        </h3>
                        <p className='mt-1 text-sm text-gray-500'>Black</p>
                      </div>
                      <p className='text-sm font-medium text-gray-900'>$35</p>
                    </div>
                  </div>
                </div>
              </>
            ))}

          <button onClick={onClickUpdate}>更新</button>
        </div>

        <SnsIcons />
      </Layout>
    </>
  );
};

export default AboutPage;

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
`;
