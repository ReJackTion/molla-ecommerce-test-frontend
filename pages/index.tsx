import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Reveal } from 'react-awesome-reveal'
import StickyBox from 'react-sticky-box'
import useTranslation from 'next-translate/useTranslation'

import ALink from '~/components/features/alink'
import OwlCarousel from '~/components/features/owl-carousel'
import TrendyCollection from '~/components/partials/home/trendy-collection'
import ElectronicsCollection from '~/components/partials/home/electronics-collection'
import FurnitureCollection from '~/components/partials/home/furniture-collection'
import ClothingCollection from '~/components/partials/home/clothing-collection'
import CookingCollection from '~/components/partials/home/cooking-collection'
import BlogCollection from '~/components/partials/home/blog-collection'
import ProductFourteen from '~/components/features/products/product-fourteen'
import ProductThirteen from '~/components/features/products/product-thirteen'
import NewsletterModal from '~/components/features/modals/newsletter-modal'

import withApollo from '~/server/apollo'
import { GET_HOME_DATA } from '~/server/queries'
import { attrFilter, catFilter } from '~/utils'

import {
  homeData,
  introSlider,
  brandSlider,
  fadeInUpShorter,
  fadeInLeftShorter,
  fadeInUp,
  fadeInRightShorter,
} from '~/utils/data'

function Home(): JSX.Element {
  const { data, loading, error } = useQuery(GET_HOME_DATA)
  const products = data && data.homeData.products
  const bestProducts = attrFilter(data && data.homeData.products, 'rated')
  const featuredProducts = attrFilter(
    data && data.homeData.products,
    'featured'
  )
  const dealProducts = attrFilter(data && data.homeData.products, 'until')
  const electronicsProducts = catFilter(data && data.homeData.products, [
    'electronics',
  ])
  const furnitureProducts = catFilter(data && data.homeData.products, [
    'furniture',
  ])
  const clothingProducts = catFilter(data && data.homeData.products, [
    'clothing',
  ])
  const cookingProducts = catFilter(data && data.homeData.products, ['cooking'])
  const posts = data && data.homeData.posts
  const { t, lang } = useTranslation('home')

  useEffect(() => {
    console.log('data from homedata: ', data)
    console.log('loading from homedata: ', loading)
    console.log('error from homedata: ', error)
  }, [data, error, loading])

  // if (error) {
  //   return <div></div>
  // }

  const toggleSidebar = () => {
    if (
      document.querySelector('body').classList.contains('sidebar-home-active')
    ) {
      document.querySelector('body').classList.remove('sidebar-home-active')
    } else {
      document.querySelector('body').classList.add('sidebar-home-active')
    }
  }

  const hideSidebar = () => {
    document.querySelector('body').classList.remove('sidebar-home-active')
  }

  const resizeHandler = () => {
    if (document.querySelector('.sidebar-fixed-toggler')) {
      if (window.innerWidth > 1199)
        document.querySelector('.sidebar-fixed-toggler').classList.add('d-none')
      else
        document
          .querySelector('.sidebar-fixed-toggler')
          .classList.remove('d-none')
    }
  }

  useEffect(() => {
    resizeHandler()
    window.addEventListener('resize', resizeHandler, {
      passive: true,
    })

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return error ? (
    <div className="main home-page skeleton-body">
      <div className="mb-lg-2"></div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-9 col-xxl-8 offset-lg-3 offset-xxl-2">
            <div className="intro-slider-container slider-container-ratio mb-2">
              <OwlCarousel
                adClass="owl-simple intro-slider owl-nav-inside"
                options={introSlider}
              >
                <div className="intro-slide">
                  <figure className="slide-image mb-0">
                    <img
                      alt="Slide"
                      src="images/home/sliders/slide-1.jpg"
                      width="1180"
                      height="500"
                    />
                  </figure>
                  <div className="intro-content">
                    <Reveal
                      keyframes={fadeInUpShorter}
                      delay={100}
                      duration={1000}
                    >
                      <h3 className="intro-subtitle">{t('newArrivals')}</h3>

                      <h1 className="intro-title text-white">
                        The New Way
                        <br />
                        To Buy Furniture
                      </h1>

                      <div className="intro-text text-white">
                        Spring Collections 2021
                      </div>
                      <ALink
                        href="/shop/sidebar/list"
                        className="btn btn-primary"
                      >
                        <span>{t('discoverNow')}</span>
                        <i className="icon-long-arrow-right"></i>
                      </ALink>
                    </Reveal>
                  </div>
                </div>
                <div className="intro-slide">
                  <figure className="slide-image mb-0">
                    <img
                      alt="Slide"
                      src="images/home/sliders/slide-2.jpg"
                      width="1180"
                      height="500"
                    />
                  </figure>
                  <div className="intro-content">
                    <Reveal
                      keyframes={fadeInUpShorter}
                      delay={100}
                      duration={1000}
                    >
                      <h3 className="intro-subtitle">{t('hottestDeals')}</h3>

                      <h1 className="intro-title">
                        <span>Wherever You Go</span>
                        <br />
                        DJI Mavic 2 Pro
                      </h1>

                      <div className="intro-price">
                        <sup>from</sup>
                        <span>
                          $1,948
                          <sup>.99</sup>
                        </span>
                      </div>
                      <ALink
                        href="/shop/sidebar/list"
                        className="btn btn-primary"
                      >
                        <span>{t('discoverNow')}</span>
                        <i className="icon-long-arrow-right"></i>
                      </ALink>
                    </Reveal>
                  </div>
                </div>
                <div className="intro-slide">
                  <figure className="slide-image mb-0">
                    <img
                      alt="Slide"
                      src="images/home/sliders/slide-3.jpg"
                      width="1180"
                      height="500"
                    />
                  </figure>
                  <div className="intro-content">
                    <Reveal
                      keyframes={fadeInUpShorter}
                      delay={100}
                      duration={1000}
                    >
                      <h3 className="intro-subtitle">
                        {t('limitedQuantities')}
                      </h3>

                      <h1 className="intro-title">
                        Refresh Your
                        <br />
                        Wardrobe
                      </h1>

                      <div className="intro-text">Summer Collection 2021</div>
                      <ALink
                        href="/shop/sidebar/list"
                        className="btn btn-primary"
                      >
                        <span>{t('discoverNow')}</span>
                        <i className="icon-long-arrow-right"></i>
                      </ALink>
                    </Reveal>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className="col-xl-3 col-xxl-2 d-none d-xxl-block">
            <div className="banner intro-banner banner-overlay banner-content-stretch">
              <ALink href="/shop/sidebar/3cols">
                <div className="lazy-overlay bg-transparent"></div>

                <LazyLoadImage
                  alt="Banner"
                  src="images/home/banners/banner-1.png"
                  threshold={200}
                  width="280"
                  height="500"
                  effect="blur"
                />
              </ALink>
              <div className="banner-content text-right">
                <div className="price text-center">
                  <sup className="text-white">from</sup>
                  <span className="text-white">
                    <strong>$199</strong>
                    <sup className="text-white">,99</sup>
                  </span>
                </div>
                <ALink href="/shop/sidebar/list" className="banner-link">
                  Discover Now
                  <i className="icon-long-arrow-right"></i>
                </ALink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-9 col-xxl-10">
            <div className="row">
              <div className="col-lg-12 col-xxl-4-5col">
                <div className="row">
                  <div className="col-md-6">
                    <Reveal
                      keyframes={fadeInUp}
                      delay={200}
                      duration={1000}
                      triggerOnce
                    >
                      <div className="banner banner-overlay">
                        <ALink href="/shop/sidebar/list">
                          <div className="lazy-overlay"></div>

                          <LazyLoadImage
                            alt="Banner"
                            src="images/home/banners/banner-2.jpg"
                            threshold={200}
                            width="580"
                            height={250}
                            effect="blur"
                          />
                        </ALink>

                        <div className="banner-content">
                          <h4 className="banner-subtitle text-white d-none d-sm-block">
                            <ALink href="/shop/sidebar/list">
                              {t('hottestDeals')}
                            </ALink>
                          </h4>

                          <h3 className="banner-title text-white">
                            <ALink href="/shop/sidebar/list">
                              Detox And Beautify
                              <br />
                              For Spring
                              <br />
                              <span>Up To 20% Off</span>
                            </ALink>
                          </h3>

                          <ALink
                            href="/shop/sidebar/3cols"
                            className="banner-link"
                          >
                            {t('shopNow')}
                            <i className="icon-long-arrow-right"></i>
                          </ALink>
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  <div className="col-md-6">
                    <Reveal
                      keyframes={fadeInUp}
                      delay={300}
                      duration={1000}
                      triggerOnce
                    >
                      <div className="banner banner-overlay">
                        <ALink href="/shop/sidebar/list">
                          <div className="lazy-overlay"></div>

                          <LazyLoadImage
                            alt="Banner"
                            src="images/home/banners/banner-3.png"
                            threshold={200}
                            width="580"
                            height={250}
                            effect="blur"
                          />
                        </ALink>

                        <div className="banner-content">
                          <h4 className="banner-subtitle text-white d-none d-sm-block">
                            <ALink href="/shop/sidebar/list">
                              {t('dealOfTheDay')}
                            </ALink>
                          </h4>

                          <h3 className="banner-title text-white">
                            <ALink href="/shop/sidebar/list">
                              Headphones
                              <br />
                              <span>Up To 30% Off</span>
                            </ALink>
                          </h3>

                          <ALink
                            href="/shop/sidebar/3cols"
                            className="banner-link"
                          >
                            {t('shopNow')}
                            <i className="icon-long-arrow-right"></i>
                          </ALink>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>

              <div className="col-12 col-xxl-5col d-none d-xxl-block">
                <Reveal
                  keyframes={fadeInUp}
                  delay={400}
                  duration={1000}
                  triggerOnce
                >
                  <div className="banner banner-overlay">
                    <ALink href="/shop/sidebar/list">
                      <div className="lazy-overlay"></div>

                      <LazyLoadImage
                        alt="Banner"
                        src="images/home/banners/banner-4.jpg"
                        threshold={200}
                        width="280"
                        height={250}
                        effect="blur"
                      />
                    </ALink>

                    <div className="banner-content">
                      <h4 className="banner-subtitle text-white">
                        <ALink href="/shop/sidebar/list">Clearance</ALink>
                      </h4>

                      <h3 className="banner-title text-white">
                        <ALink href="/shop/sidebar/list">
                          Seating and Tables Clearance
                        </ALink>
                      </h3>

                      <ALink href="/shop/sidebar/3cols" className="banner-link">
                        {t('shopNow')}
                        <i className="icon-long-arrow-right"></i>
                      </ALink>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="mb-1"></div>

            <Reveal keyframes={fadeInUp} delay={500} duration={500} triggerOnce>
              <OwlCarousel
                adClass="brands-slider brands-carousel brands-border"
                options={brandSlider}
              >
                {homeData.brands.map((brand, index) => {
                  return (
                    <ALink href="#" className="brand" key={index}>
                      <img
                        src={brand.image}
                        alt="brand"
                        width={brand.width}
                        height={brand.height}
                      />
                    </ALink>
                  )
                })}
              </OwlCarousel>
            </Reveal>

            <div className="mb-3"></div>

            <Reveal
              keyframes={fadeInRightShorter}
              delay={300}
              duration={1000}
              triggerOnce
            >
              <TrendyCollection products={products} loading={loading} />
            </Reveal>

            <div className="mb-5"></div>

            <Reveal
              keyframes={fadeInRightShorter}
              delay={300}
              duration={1000}
              triggerOnce
            >
              <ElectronicsCollection
                products={electronicsProducts}
                loading={loading}
              />
            </Reveal>

            <div className="mb-3"></div>

            <Reveal
              keyframes={fadeInRightShorter}
              delay={300}
              duration={1000}
              triggerOnce
            >
              <FurnitureCollection
                products={furnitureProducts}
                loading={loading}
              />
            </Reveal>

            <div className="mb-3"></div>

            <div className="row">
              <div className="col-md-6">
                <Reveal
                  keyframes={fadeInLeftShorter}
                  delay={200}
                  duration={1000}
                  triggerOnce
                >
                  <div className="banner home-banner banner-overlay">
                    <ALink href="/shop/sidebar/list">
                      <div className="lazy-overlay"></div>

                      <LazyLoadImage
                        alt="Banner"
                        src="images/home/banners/banner-7.jpg"
                        threshold={200}
                        width="730"
                        height="250"
                        effect="blur"
                      />
                    </ALink>

                    <div className="banner-content">
                      <h4 className="banner-subtitle text-white d-none d-sm-block">
                        <ALink href="/shop/sidebar/list">
                          {t('saleIsComing')}
                        </ALink>
                      </h4>

                      <h3 className="banner-title text-white">
                        <ALink href="/shop/sidebar/list">
                          Floral T-shirts and Vests
                          <br />
                          <span>Spring Sale</span>
                        </ALink>
                      </h3>

                      <ALink href="/shop/sidebar/3cols" className="banner-link">
                        {t('shopNow')}
                        <i className="icon-long-arrow-right"></i>
                      </ALink>
                    </div>
                  </div>
                </Reveal>
              </div>
              <div className="col-md-6">
                <Reveal
                  keyframes={fadeInRightShorter}
                  delay={200}
                  duration={1000}
                  triggerOnce
                >
                  <div className="banner home-banner banner-overlay">
                    <ALink href="/shop/sidebar/list">
                      <div className="lazy-overlay"></div>

                      <LazyLoadImage
                        alt="Banner"
                        src="images/home/banners/banner-8.jpg"
                        threshold={200}
                        width="730"
                        height={250}
                        effect="blur"
                      />
                    </ALink>

                    <div className="banner-content">
                      <h4 className="banner-subtitle text-white d-none d-sm-block">
                        <ALink href="/shop/sidebar/list">
                          {t('amazingValue')}
                        </ALink>
                      </h4>

                      <h3 className="banner-title text-white">
                        <ALink href="/shop/sidebar/list">
                          Upgrade and Save
                          <br />
                          <span>On The Latest Apple Devices</span>
                        </ALink>
                      </h3>

                      <ALink href="/shop/sidebar/3cols" className="banner-link">
                        {t('shopNow')}
                        <i className="icon-long-arrow-right"></i>
                      </ALink>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="mb-3"></div>

            <Reveal
              keyframes={fadeInRightShorter}
              delay={300}
              duration={1000}
              triggerOnce
            >
              <ClothingCollection
                products={clothingProducts}
                loading={loading}
              />
            </Reveal>

            <div className="mb-3"></div>

            <Reveal
              keyframes={fadeInRightShorter}
              delay={300}
              duration={1000}
              triggerOnce
            >
              <CookingCollection products={cookingProducts} loading={loading} />
            </Reveal>

            <div className="mb-3"></div>

            <div className="icon-boxes-container">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6 col-lg-3">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="icon-rocket"></i>
                      </span>
                      <div className="icon-box-content">
                        <h3 className="icon-box-title">{t('freeShipping')}</h3>

                        <p>{t('freeShippingDesc')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-3">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="icon-rotate-left"></i>
                      </span>

                      <div className="icon-box-content">
                        <h3 className="icon-box-title">{t('freeReturns')}</h3>

                        <p>{t('freeReturnsDesc')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-3">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="icon-info-circle"></i>
                      </span>

                      <div className="icon-box-content">
                        <h3 className="icon-box-title">{t('getOffer')}</h3>

                        <p>{t('getOfferDesc')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-3">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="icon-life-ring"></i>
                      </span>

                      <div className="icon-box-content">
                        <h3 className="icon-box-title">{t('weCare')}</h3>

                        <p>{t('weCareDesc')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5"></div>
          </div>

          <aside className="col-xl-3 col-xxl-2 order-xl-first">
            <button className="sidebar-fixed-toggler" onClick={toggleSidebar}>
              <i className="icon-cog"></i>
            </button>
            <div className="sidebar-filter-overlay" onClick={hideSidebar}></div>

            <StickyBox className="sticky-content" offsetTop={70}>
              <div className="sidebar sidebar-home">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="widget widget-banner">
                      <div className="banner banner-overlay">
                        <ALink href="/shop/sidebar/list">
                          <div className="lazy-overlay"></div>

                          <LazyLoadImage
                            alt="Banner"
                            src="images/home/banners/banner-11.jpg"
                            threshold={200}
                            width="280"
                            height={400}
                            effect="blur"
                          />
                        </ALink>

                        <div className="banner-content banner-content-top banner-content-right text-right">
                          <h3 className="banner-title text-white">
                            <ALink href="/shop/sidebar/list">
                              Maximum Comfort
                              <br />
                              <span>Sofas -20% Off</span>
                            </ALink>
                          </h3>

                          <ALink
                            href="/shop/sidebar/3cols"
                            className="banner-link"
                          >
                            {t('shopNow')}
                            <i className="icon-long-arrow-right"></i>
                          </ALink>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12 mb-2">
                    <div className="widget widget-products">
                      <h4 className="widget-title">
                        <span>{t('bestsellers')}</span>
                      </h4>
                      {loading ? (
                        <></>
                      ) : (
                        <div className="products">
                          {bestProducts.slice(0, 5).map((item, index) => (
                            <ProductThirteen
                              product={item}
                              key={'product' + index}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="widget widget-deals">
                      <h4 className="widget-title">
                        <span>{t('specialOffer')}</span>
                      </h4>

                      {loading ? (
                        <></>
                      ) : (
                        <div className="row">
                          <div className="col-xl-12">
                            {/* <ProductFourteen product={featuredProducts[0]} /> */}
                          </div>
                          <div className="col-xl-12">
                            {/* <ProductFourteen product={dealProducts[0]} /> */}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-12">
                    <div className="widget widget-banner">
                      <div className="banner banner-overlay">
                        <ALink href="/shop/sidebar/list">
                          <div className="lazy-overlay"></div>

                          <LazyLoadImage
                            alt="Banner"
                            src="images/home/banners/banner-12.jpg"
                            threshold={200}
                            width="280"
                            height={400}
                            effect="blur"
                          />
                        </ALink>

                        <div className="banner-content banner-content-top">
                          <h3 className="banner-title text-white">
                            <ALink href="/shop/sidebar/list">
                              Take Better Photos
                              <br />
                              <span>With</span> Canon EOS
                              <br />
                              <span>Up To 20% Off</span>
                            </ALink>
                          </h3>

                          <ALink
                            href="/shop/sidebar/3cols"
                            className="banner-link"
                          >
                            {t('shopNow')}
                            <i className="icon-long-arrow-right"></i>
                          </ALink>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12">
                    <BlogCollection posts={posts} loading={loading} />
                  </div>
                </div>
              </div>
            </StickyBox>
          </aside>
        </div>
      </div>

      <div
        className="cta cta-horizontal cta-horizontal-box bg-dark bg-image"
        style={{ backgroundImage: `url(images/home/bg-1.jpg)` }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-8 offset-xl-2">
              <div className="row align-items-center">
                <div className="col-lg-5 cta-txt">
                  <h3 className="cta-title text-primary">
                    {t('joinOurNewsletter')}
                  </h3>
                  <p className="cta-desc text-light">{t('subcribeMessage')}</p>
                </div>
                <div className="col-lg-7">
                  <form action="#">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder={t('enterEmail')}
                        aria-label="Email Adress"
                        required
                      />
                      <div className="input-group-append">
                        <button className="btn" type="submit">
                          {t('subscribe')}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewsletterModal />
    </div>
  ) : (
    <div>Error</div>
  )
}

export default withApollo({ ssr: typeof window == 'undefined' })(Home)
