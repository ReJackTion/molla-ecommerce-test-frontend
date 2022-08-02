import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import ALink from '~/components/features/alink'
import useTranslation from 'next-translate/useTranslation'

function Login(): JSX.Element {
  const { t, lang } = useTranslation('login')

  return (
    <div className="main">
      <nav className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <ALink href="/">Home</ALink>
            </li>
            <li className="breadcrumb-item">
              <ALink href="#">Pages</ALink>
            </li>
            <li className="breadcrumb-item active">Login</li>
          </ol>
        </div>
      </nav>

      <div
        className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
        style={{ backgroundImage: `url(images/backgrounds/login-bg.jpg)` }}
      >
        <div className="container">
          <div className="form-box">
            <div className="form-tab">
              <Tabs selectedTabClassName="show" defaultIndex={0}>
                <TabList className="nav nav-pills nav-fill">
                  <Tab className="nav-item">
                    <span className="nav-link">{t('signIn')}</span>
                  </Tab>

                  <Tab className="nav-item">
                    <span className="nav-link">{t('register')}</span>
                  </Tab>
                </TabList>

                <div className="tab-content">
                  <TabPanel style={{ paddingTop: '2rem' }}>
                    <div>
                      <form action="#">
                        <div className="form-group">
                          <label htmlFor="singin-email-2">
                            {t('userNameOrEmail')} *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="singin-email-2"
                            name="singin-email"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="singin-password-2">
                            {t('password')} *
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="singin-password-2"
                            name="singin-password"
                            required
                          />
                        </div>

                        <div className="form-footer">
                          <button
                            type="submit"
                            className="btn btn-outline-primary-2"
                          >
                            <span>{t('login')}</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>

                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="signin-remember-2"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="signin-remember-2"
                            >
                              {t('rememberMe')}
                            </label>
                          </div>

                          <ALink href="/pages/login" className="forgot-link">
                            {t('forgotPassword')}
                          </ALink>
                        </div>
                      </form>
                      <div className="form-choice">
                        <p className="text-center">{t('orSignInWith')}</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <ALink
                              href="/pages/login"
                              className="btn btn-login btn-g"
                            >
                              <i className="icon-google"></i>
                              {t('loginWithGoogle')}
                            </ALink>
                          </div>
                          <div className="col-sm-6">
                            <ALink
                              href="/pages/login"
                              className="btn btn-login btn-f"
                            >
                              <i className="icon-facebook-f"></i>
                              {t('loginWithFacebook')}
                            </ALink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <form action="#">
                      <div className="form-group">
                        <label htmlFor="register-email-2">
                          {t('userEmail')} *
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="register-email-2"
                          name="register-email"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="register-password-2">
                          {t('password')} *
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="register-password-2"
                          name="register-password"
                          required
                        />
                      </div>

                      <div className="form-footer">
                        <button
                          type="submit"
                          className="btn btn-outline-primary-2"
                        >
                          <span>{t('signUp')}</span>
                          <i className="icon-long-arrow-right"></i>
                        </button>

                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="register-policy-2"
                            required
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="register-policy-2"
                          >
                            {t('agree')}&nbsp;
                            <ALink href="/pages/login/">{t('policy')}</ALink> *
                          </label>
                        </div>
                      </div>
                    </form>
                    <div className="form-choice">
                      <p className="text-center">{t('orSignInWith')}</p>
                      <div className="row">
                        <div className="col-sm-6">
                          <ALink
                            href="/pages/login"
                            className="btn btn-login btn-g"
                          >
                            <i className="icon-google"></i>
                            {t('loginWithGoogle')}
                          </ALink>
                        </div>
                        <div className="col-sm-6">
                          <ALink
                            href="/pages/login"
                            className="btn btn-login  btn-f"
                          >
                            <i className="icon-facebook-f"></i>
                            {t('loginWithFacebook')}
                          </ALink>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
