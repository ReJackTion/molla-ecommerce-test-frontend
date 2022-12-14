import { LazyLoadImage } from 'react-lazy-load-image-component'

import OwlCarousel from '~/components/features/owl-carousel'
import ProductTwelve from '~/components/features/products/product-twelve'

import ALink from '~/components/features/alink'
import { productSlider1 } from '~/utils/data'

function ClothingCollection(props): JSX.Element {
  const { products = [], loading } = props

  return (
    <div className="row cat-banner-row clothing">
      <div className="col-xl-3 col-xxl-4">
        <div className="cat-banner row no-gutters">
          <div
            className="cat-banner-list col-sm-6 d-xl-none d-xxl-flex"
            style={{
              backgroundImage: `url(images/home/banners/banner-bg-3.jpg)`,
            }}
          >
            <div className="banner-list-content">
              <h2>
                <ALink href="/shop/sidebar/list">Clothing</ALink>
              </h2>

              <ul>
                <li>
                  <ALink href="/shop/sidebar/list">Best Sellers</ALink>
                </li>
                <li>
                  <ALink href="/shop/sidebar/list">Trending</ALink>
                </li>
                <li>
                  <ALink href="/shop/sidebar/list">Women</ALink>
                </li>
                <li>
                  <ALink href="/shop/sidebar/list">Man</ALink>
                </li>
                <li>
                  <ALink href="/shop/sidebar/list">Shoes</ALink>
                </li>
                <li>
                  <ALink href="/shop/sidebar/list">Accessories</ALink>
                </li>
                <li className="list-all-link">
                  <ALink href="/shop/sidebar/list">See All Departments</ALink>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-xl-12 col-xxl-6">
            <div className="banner banner-overlay">
              <ALink href="/shop/sidebar/list">
                <div className="lazy-overlay"></div>

                <LazyLoadImage
                  alt="Banner"
                  src="images/home/banners/banner-9.jpg"
                  threshold={200}
                  width={240}
                  height={400}
                  effect="blur"
                />
              </ALink>

              <div className="banner-content">
                <h4 className="banner-subtitle text-white">
                  <ALink href="/shop/sidebar/list">Best Deals</ALink>
                </h4>

                <h3 className="banner-title text-white">
                  <ALink href="/shop/sidebar/list">
                    Clearance
                    <br />
                    Outerwear
                    <br />
                    <span>Up To 70% Off</span>
                  </ALink>
                </h3>

                <ALink href="/shop/sidebar/3cols" className="banner-link">
                  Shop Now
                  <i className="icon-long-arrow-right"></i>
                </ALink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-9 col-xxl-8">
        {loading ? (
          <OwlCarousel
            adClass="owl-simple owl-full carousel-equal-height carousel-with-shadow"
            options={productSlider1}
          >
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div className="skel-pro" key={index}></div>
            ))}
          </OwlCarousel>
        ) : (
          <OwlCarousel
            adClass="owl-simple owl-full carousel-equal-height carousel-with-shadow"
            options={productSlider1}
          >
            {products.map((item, index) => (
              <ProductTwelve product={item} key={index} />
            ))}
          </OwlCarousel>
        )}
      </div>
    </div>
  )
}

export default ClothingCollection
