import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'

import ALink from '~/components/features/alink'
import LoginModal from '~/components/features/modals/login-modal'
import HeaderSearch from '~/components/partials/header/partials/header-search'
import WishlistMenu from '~/components/partials/header/partials/wishlist-menu'
import CartMenu from '~/components/partials/header/partials/cart-menu'
import CategoryMenu from '~/components/partials/header/partials/category-menu'
import MainMenu from '~/components/partials/header/partials/main-menu'
import StickyHeader from '~/components/features/sticky-header'
import CompareMenu from './partials/compare-menu'

function Header(): JSX.Element {
  const router = useRouter()
  const [containerClass, setContainerClass] = useState('container')

  function openMobileMenu() {
    document.querySelector('body').classList.add('mmenu-active')
  }

  useEffect(() => {
    setContainerClass(
      router.asPath.includes('fullwidth') ? 'container-fluid' : 'container'
    )
  }, [router.asPath])

  const { t, lang } = useTranslation('common')

  return (
    <header className="header header-14">
      <div className="header-top">
        <div className={containerClass}>
          <div className="header-left">
            <a href="tel:#">
              <i className="icon-phone"></i>
              {t('call')}: +0123 456 789
            </a>
          </div>

          <div className="header-right">
            <ul className="top-menu">
              <li>
                <ALink href="#">{t('links')}</ALink>
                <ul className="menus">
                  <li>
                    <div className="header-dropdown">
                      <ALink href="#">
                        <img
                          src="/images/icons/money-bill-wave.svg"
                          width={15}
                          height={15}
                        />
                        &nbsp;{t('currency')}
                      </ALink>
                      <div className="header-menu">
                        <ul>
                          <li>
                            <ALink href="#">Eur</ALink>
                          </li>
                          <li>
                            <ALink href="#">Usd</ALink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="header-dropdown">
                      <ALink href="#">
                        <img
                          src="/images/icons/globe.svg"
                          width={15}
                          height={15}
                        />
                        &nbsp;{t('language')}({lang})
                      </ALink>
                      <div className="header-menu header-menu-lang">
                        <ul>
                          <li>
                            <ALink href={`/${router.pathname}`} locale="en">
                              English
                            </ALink>
                          </li>
                          <li>
                            <ALink href={`/${router.pathname}`} locale="zh">
                              简体中文
                            </ALink>
                          </li>
                          <li>
                            <ALink href={`/${router.pathname}`} locale="ms">
                              Bahasa Melayu
                            </ALink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <LoginModal />
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="header-middle">
        <div className={containerClass}>
          <div className="row">
            <div className="col-auto col-lg-3 col-xl-3 col-xxl-2">
              <button className="mobile-menu-toggler" onClick={openMobileMenu}>
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars"></i>
              </button>

              <ALink href="/" className="logo">
                <img
                  src="images/logo.png"
                  alt="Molla Logo"
                  width={105}
                  height={27}
                />
              </ALink>
            </div>

            <div className="col col-lg-9 col-xl-9 col-xxl-10 header-middle-right">
              <div className="row">
                <div className="col-lg-8 col-xxl-4-5col d-none d-lg-block">
                  <HeaderSearch
                    apolloClient={undefined}
                    apolloState={undefined}
                  />
                </div>
                <div className="col-lg-4 col-xxl-5col d-flex justify-content-end align-items-center">
                  <div className="header-dropdown-link">
                    <CompareMenu />

                    <WishlistMenu />

                    <CartMenu />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StickyHeader>
        <div className="header-bottom sticky-header">
          <div className={containerClass}>
            <div className="row">
              <div className="col-auto col-lg-3 col-xl-3 col-xxl-2 header-left">
                <CategoryMenu />
              </div>
              <div className="col col-lg-6 col-xl-6 col-xxl-8 header-center">
                <MainMenu />
              </div>

              <div className="col col-lg-3 col-xl-3 col-xxl-2 header-right">
                <i className="la la-lightbulb-o"></i>
                <p>{t('clearance', { discount: '50%' })}</p>
              </div>
            </div>
          </div>
        </div>
      </StickyHeader>
    </header>
  )
}

export default Header
