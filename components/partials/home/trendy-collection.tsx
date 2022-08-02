import { Tab, Tabs, TabPanel, TabList } from 'react-tabs'
import useTranslation from 'next-translate/useTranslation'

import OwlCarousel from '~/components/features/owl-carousel'
import ProductTwelve from '~/components/features/products/product-twelve'

import { catFilter } from '~/utils'
import { productSlider } from '~/utils/data'

function TrendyCollection(props): JSX.Element {
  const { products = [], loading } = props
  const { t, lang } = useTranslation('home')

  return (
    <Tabs defaultIndex={0} selectedTabClassName="show">
      <div className="bg-lighter trending-products trendy">
        <div className="heading heading-flex mb-3">
          <div className="heading-left">
            <h2 className="title">{t('trendingToday')}</h2>
          </div>

          <div className="heading-right">
            <TabList className="nav nav-pills justify-content-center">
              <Tab className="nav-item">
                <span className="nav-link">{t('all')}</span>
              </Tab>

              <Tab className="nav-item">
                <span className="nav-link">Clothes</span>
              </Tab>

              <Tab className="nav-item">
                <span className="nav-link">Cooking</span>
              </Tab>

              <Tab className="nav-item">
                <span className="nav-link">Electronics</span>
              </Tab>

              <Tab className="nav-item">
                <span className="nav-link">Furniture</span>
              </Tab>
            </TabList>
          </div>
        </div>
        <div className="tab-content tab-content-carousel">
          <TabPanel>
            {loading ? (
              <OwlCarousel
                adClass="owl-simple carousel-equal-height carousel-with-shadow"
                options={productSlider}
              >
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div className="skel-pro" key={index}></div>
                ))}
              </OwlCarousel>
            ) : (
              <OwlCarousel
                adClass="owl-simple carousel-equal-height carousel-with-shadow"
                options={productSlider}
              >
                {products.slice(0, 6).map((item, index) => (
                  <ProductTwelve product={item} key={index} />
                ))}
              </OwlCarousel>
            )}
          </TabPanel>
          <TabPanel>
            {loading ? (
              <OwlCarousel
                adClass="owl-simple carousel-equal-height carousel-with-shadow"
                options={productSlider}
              >
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div className="skel-pro" key={index}></div>
                ))}
              </OwlCarousel>
            ) : (
              <OwlCarousel
                adClass="owl-simple carousel-equal-height carousel-with-shadow"
                options={productSlider}
              >
                {catFilter(products, ['clothing']).map((item, index) => (
                  <ProductTwelve product={item} key={index} />
                ))}
              </OwlCarousel>
            )}
          </TabPanel>
          <TabPanel>
            {loading ? (
              <OwlCarousel
                adClass="owl-simple carousel-equal-height carousel-with-shadow"
                options={productSlider}
              >
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div className="skel-pro" key={index}></div>
                ))}
              </OwlCarousel>
            ) : (
              <OwlCarousel
                adClass="owl-simple carousel-equal-height carousel-with-shadow"
                options={productSlider}
              >
                {catFilter(products, ['cooking']).map((item, index) => (
                  <ProductTwelve product={item} key={index} />
                ))}
              </OwlCarousel>
            )}
          </TabPanel>
          <TabPanel>
            {loading ? (
              <OwlCarousel
                adClass="owl-simple carousel-equal-height carousel-with-shadow"
                options={productSlider}
              >
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div className="skel-pro" key={index}></div>
                ))}
              </OwlCarousel>
            ) : (
              <OwlCarousel
                adClass="owl-simple carousel-equal-height carousel-with-shadow"
                options={productSlider}
              >
                {catFilter(products, ['electronics']).map((item, index) => (
                  <ProductTwelve product={item} key={index} />
                ))}
              </OwlCarousel>
            )}
          </TabPanel>
          <TabPanel>
            {loading ? (
              <OwlCarousel
                adClass="owl-simple carousel-equal-height carousel-with-shadow"
                options={productSlider}
              >
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div className="skel-pro" key={index}></div>
                ))}
              </OwlCarousel>
            ) : (
              <OwlCarousel
                adClass="owl-simple carousel-equal-height carousel-with-shadow"
                options={productSlider}
              >
                {catFilter(products, ['furniture']).map((item, index) => (
                  <ProductTwelve product={item} key={index} />
                ))}
              </OwlCarousel>
            )}
          </TabPanel>
        </div>
      </div>
    </Tabs>
  )
}

export default TrendyCollection
