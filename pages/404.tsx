import React from 'react'
import ALink from '~/components/features/alink'
import useTranslation from 'next-translate/useTranslation'

function ErrorPage(): JSX.Element {
  const { t, lang } = useTranslation('404')

  return (
    <div className="main">
      <nav className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <ALink href="/">{t('home')}</ALink>
            </li>
            <li className="breadcrumb-item">
              <ALink href="#">{t('pages')}</ALink>
            </li>
            <li className="breadcrumb-item active">404</li>
          </ol>
        </div>
      </nav>

      <div
        className="error-content text-center position-relative"
        style={{
          backgroundImage: `url(images/backgrounds/error-bg.jpg)`,
          marginBottom: '-1px',
        }}
      >
        <div className="container">
          <h1 className="error-title">Error 404</h1>

          <p>{t('sorry')}</p>
          <ALink href="/" className="btn btn-outline-primary-2 btn-minwidth-lg">
            <span>{t('backToHomepage')}</span>
            <i className="icon-long-arrow-right"></i>
          </ALink>
        </div>
      </div>
    </div>
  )
}

export default React.memo(ErrorPage)
