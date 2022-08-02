import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'

import ALink from '~/components/features/alink'

function Footer(): JSX.Element {
  const router = useRouter()
  const [isBottomSticky, setIsBottomSticky] = useState(false)
  const [containerClass, setContainerClass] = useState('container')
  const { t, lang } = useTranslation('common')

  useEffect(() => {
    document.querySelector('.footer-middle').classList.remove('border-0')
    if (router.pathname == '/')
      document.querySelector('.footer-middle').classList.add('border-0')

    handleBottomSticky()
    setContainerClass(
      router.asPath.includes('fullwidth') ? 'container-fluid' : 'container'
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  useEffect(() => {
    window.addEventListener('resize', handleBottomSticky, { passive: true })
    return () => {
      window.removeEventListener('resize', handleBottomSticky)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleBottomSticky() {
    setIsBottomSticky(
      router.pathname.includes('product/default') && window.innerWidth > 991
    )
  }

  return (
    <footer className="footer footer-2">
      <div className="footer-middle">
        <div className={containerClass}>
          <div className="row">
            <div className="col-sm-12 col-xl-4">
              <div className="widget widget-about">
                <img
                  src="images/logo-footer.png"
                  className="footer-logo"
                  alt="Footer Logo"
                  width="105"
                  height="25"
                />
                <p>{t('MollaDescription')}</p>

                <div className="widget-about-info">
                  <div className="row">
                    <div className="col-sm-6 col-md-4">
                      <span className="widget-about-title">{t('callUs')}</span>
                      <ALink href="tel:123456789">+0123 456 789</ALink>
                    </div>
                    <div className="col-sm-6 col-md-8">
                      <span className="widget-about-title">
                        {t('paymentMethods')}
                      </span>
                      <figure className="footer-payments">
                        <img
                          src="images/payments.png"
                          alt="Payment methods"
                          width="272"
                          height="20"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-xl-2">
              <div className="widget">
                <h4 className="widget-title">{t('usefulLinks')}</h4>

                <ul className="widget-list">
                  <li>
                    <ALink href="/pages/about">{t('AboutMolla')}</ALink>
                  </li>
                  <li>
                    <ALink href="/pages/faq">{t('faq')}</ALink>
                  </li>
                  <li>
                    <ALink href="/pages/contact">{t('contactUs')}</ALink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-4 col-xl-2">
              <div className="widget">
                <h4 className="widget-title">{t('customerService')}</h4>

                <ul className="widget-list">
                  <li>
                    <ALink href="#">{t('paymentMethods')}</ALink>
                  </li>
                  <li>
                    <ALink href="#">Money-back guarantee!</ALink>
                  </li>
                  <li>
                    <ALink href="#">Returns</ALink>
                  </li>
                  <li>
                    <ALink href="#">Shipping</ALink>
                  </li>
                  <li>
                    <ALink href="#">Terms and conditions</ALink>
                  </li>
                  <li>
                    <ALink href="#">Privacy Policy</ALink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-4 col-xl-2">
              <div className="widget">
                <h4 className="widget-title">{t('myAccount')}</h4>

                <ul className="widget-list">
                  <li>
                    <ALink href="/pages/login">{t('login_signup')}</ALink>
                  </li>
                  <li>
                    <ALink href="/shop/cart">{t('viewCart')}</ALink>
                  </li>
                  <li>
                    <ALink href="/shop/wishlist">{t('myWishlist')}</ALink>
                  </li>
                  <li>
                    <ALink href="#">Track My Order</ALink>
                  </li>
                  <li>
                    <ALink href="#">Help</ALink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-xl-2">
              <div className="widget widget-newsletter">
                <h4 className="widget-title">{t('signUpToNewsletter')}</h4>

                <p>{t('newletterDescription')}</p>

                <form action="#">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder={t('newletterEmail')}
                      aria-label="Email Adress"
                      required
                    />
                    <div className="input-group-append">
                      <button className="btn btn-dark" type="submit">
                        <i className="icon-long-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className={containerClass}>
          <p className="footer-copyright">
            {t('copyright', { year: new Date().getFullYear() })}
            {/* Copyright © {new Date().getFullYear()} Molla Store. All Rights Reserved. */}
          </p>
          <ul className="footer-menu">
            <li>
              <ALink href="#">{t('termsOfUse')}</ALink>
            </li>
            <li>
              <ALink href="#">{t('privacyPolicy')}</ALink>
            </li>
          </ul>

          <div className="social-icons social-icons-color">
            <span className="social-label">{t('followUs')}</span>

            <ALink
              href="https://www.facebook.com/datum4u/"
              className="social-icon social-facebook"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <i className="icon-facebook-f"></i>
            </ALink>
            <ALink
              href="https://mobile.twitter.com/datumclearmind"
              className="social-icon social-twitter"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <i className="icon-twitter"></i>
            </ALink>
            {/* <ALink
              href="#"
              className="social-icon social-instagram"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <i className="icon-instagram"></i>
            </ALink> */}
            <ALink
              href="https://www.youtube.com/c/DatumClearMindSdnBhdKualaLumpur"
              className="social-icon social-youtube"
              rel="noopener noreferrer"
              title="Youtube"
            >
              <i className="icon-youtube"></i>
            </ALink>
            {/* <ALink
              href="#"
              className="social-icon social-pinterest"
              rel="noopener noreferrer"
              title="Pinterest"
            >
              <i className="icon-pinterest"></i>
            </ALink> */}
          </div>
        </div>
      </div>
      {isBottomSticky ? <div className="mb-10"></div> : ''}
    </footer>
  )
}

export default React.memo(Footer)
