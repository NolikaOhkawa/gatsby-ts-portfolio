import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { graphql, PageProps } from 'gatsby'
import LayoutChild from '../components/layoutChild'
import Seo from '../components/seo'
import Badge from '../components/badge'

type ProductPageProps = {
  location: string
}

const ProductPage: React.FC<ProductPageProps> = ({ location }) => {
  const language = useSelector((state: RootState) => state.language.language)
  return (
    <>
      <LayoutChild location={{ pathname: '/products' }} title="Products">
        <Seo title="Products" />

        <h1 className="text-3xl font-semibold tracking-tight my-2 mt-20">Products</h1>
        <h2 id="products#web" className="text-xl font-semibold my-10">
          Degital
        </h2>
        <div className="products_wrapper">
          <div id="cardHover">
            <img src="" alt="" />
            <div className="content__slate">
              <h3 className="">html & css Portfolio</h3>
              <p>
                <Badge badgeName="HTML" />
                <Badge badgeName="CSS" />
                <Badge badgeName="jQuery" />
              </p>
            </div>
          </div>
        </div>
        <h2 id="products#instagram" className="text-xl font-semibold my-10">
          Instagram
        </h2>

        <article></article>
      </LayoutChild>
    </>
  )
}

export default ProductPage
