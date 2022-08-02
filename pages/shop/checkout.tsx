import { useEffect } from 'react'
import { connect } from 'react-redux'
import SlideToggle from 'react-slide-toggle'
import useTranslation from 'next-translate/useTranslation'

import ALink from '~/components/features/alink'
import Accordion from '~/components/features/accordion/accordion'
import Card from '~/components/features/accordion/card'
import PageHeader from '~/components/features/page-header'

import { cartPriceTotal } from '~/utils/index'

function Checkout(props): JSX.Element {
  const { cartlist } = props
  const { t, lang } = useTranslation('checkout')

  useEffect(() => {
    document.querySelector('body').addEventListener('click', clearOpacity)

    return () => {
      document.querySelector('body').removeEventListener('click', clearOpacity)
    }
  }, [])

  function clearOpacity(): void {
    if (
      document.querySelector<HTMLInputElement>('#checkout-discount-input')
        .value == ''
    )
      document
        .querySelector('#checkout-discount-form label')
        .removeAttribute('style')
  }

  function addOpacity(e): void {
    e.currentTarget.parentNode
      .querySelector('label')
      .setAttribute('style', 'opacity: 0')
  }

  return (
    <div className="main">
      <PageHeader title={t('checkout')} subTitle={t('shop')} />
      <nav className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <ALink href="/">{t('home')}</ALink>
            </li>
            <li className="breadcrumb-item">
              <ALink href="/shop/sidebar/list">{t('shop')}</ALink>
            </li>
            <li className="breadcrumb-item active">{t('checkout')}</li>
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className="checkout">
          <div className="container">
            <div className="checkout-discount">
              <form action="#" id="checkout-discount-form">
                <input
                  type="text"
                  className="form-control"
                  required
                  id="checkout-discount-input"
                  onClick={addOpacity}
                />
                <label
                  htmlFor="checkout-discount-input"
                  className="text-truncate"
                >
                  {t('haveCoupon')}? <span>{t('enterCouponCode')}</span>
                </label>
              </form>
            </div>

            <form action="#">
              <div className="row">
                <div className="col-lg-9">
                  <h2 className="checkout-title">{t('billingDetails')}</h2>
                  <div className="row">
                    <div className="col-sm-6">
                      <label>{t('firstName')} *</label>
                      <input type="text" className="form-control" required />
                    </div>

                    <div className="col-sm-6">
                      <label>{t('lastName')} *</label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>

                  <label>
                    {t('companyName')} ({t('optional')})
                  </label>
                  <input type="text" className="form-control" />

                  <label>{t('country')} *</label>
                  <input type="text" className="form-control" required />

                  <label>{t('streetAddress')} *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t('streetAddressPlaceholder1')}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t('streetAddressPlaceholder2')}
                    required
                  />

                  <div className="row">
                    <div className="col-sm-6">
                      <label>{t('townCity')} *</label>
                      <input type="text" className="form-control" required />
                    </div>

                    <div className="col-sm-6">
                      <label>{t('stateCountry')} *</label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <label>{t('postcodeZip')} *</label>
                      <input type="text" className="form-control" required />
                    </div>

                    <div className="col-sm-6">
                      <label>{t('phone')} *</label>
                      <input type="tel" className="form-control" required />
                    </div>
                  </div>

                  <label>{t('email')} *</label>
                  <input type="email" className="form-control" required />

                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="checkout-create-acc"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checkout-create-acc"
                    >
                      {t('createAccount')}?
                    </label>
                  </div>

                  <SlideToggle duration={300} collapsed>
                    {({ onToggle, setCollapsibleElement }) => (
                      <div className="form-group">
                        <div className="custom-control custom-checkbox mt-0 address-box">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="different-shipping"
                            onChange={onToggle}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="different-shipping"
                          >
                            Ship to a different address?
                          </label>
                        </div>
                        <div
                          className="shipping-info"
                          ref={setCollapsibleElement}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>
                                  First name&nbsp;
                                  <abbr className="required" title="required">
                                    *
                                  </abbr>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <label>
                                  Last name&nbsp;
                                  <abbr className="required" title="required">
                                    *
                                  </abbr>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <label>Company name ({t('optional')})</label>
                            <input type="text" className="form-control" />
                          </div>

                          <div className="select-custom">
                            <label>
                              Country / Region&nbsp;
                              <span className="required">*</span>
                            </label>
                            <select name="orderby" className="form-control">
                              <option value="" defaultValue="selected">
                                Vanuatu
                              </option>
                              <option value="1">Brunei</option>
                              <option value="2">Bulgaria</option>
                              <option value="3">Burkina Faso</option>
                              <option value="4">Burundi</option>
                              <option value="5">Cameroon</option>
                            </select>
                          </div>

                          <div className="form-group mb-1 pb-2">
                            <label>
                              Street address&nbsp;
                              <abbr className="required" title="required">
                                *
                              </abbr>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="House number and street name"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Apartment, suite, unit, etc. (optional)"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>
                              Town / City&nbsp;
                              <abbr className="required" title="required">
                                *
                              </abbr>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="select-custom">
                            <label>
                              State / County&nbsp;
                              <abbr className="required" title="required">
                                *
                              </abbr>
                            </label>
                            <select name="orderby" className="form-control">
                              <option value="" defaultValue="selected">
                                NY
                              </option>
                              <option value="1">Brunei</option>
                              <option value="2">Bulgaria</option>
                              <option value="3">Burkina Faso</option>
                              <option value="4">Burundi</option>
                              <option value="5">Cameroon</option>
                            </select>
                          </div>

                          <div className="form-group">
                            <label>
                              Postcode / ZIP&nbsp;
                              <abbr className="required" title="required">
                                *
                              </abbr>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </SlideToggle>

                  <label>
                    {t('orderNotes')} ({t('optional')})
                  </label>
                  <textarea
                    className="form-control"
                    cols={30}
                    rows={4}
                    placeholder={t('notesPlaceholder')}
                  />
                </div>

                <aside className="col-lg-3">
                  <div className="summary">
                    <h3 className="summary-title">{t('yourOrder')}</h3>

                    <table className="table table-summary">
                      <thead>
                        <tr>
                          <th>{t('product')}</th>
                          <th>{t('total')}</th>
                        </tr>
                      </thead>

                      <tbody>
                        {cartlist.map((item, index) => (
                          <tr key={index}>
                            <td>
                              &nbsp;
                              <ALink href={`/product/default/${item.slug}`}>
                                {item.name}
                              </ALink>
                            </td>
                            <td>
                              $
                              {item.sum.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </td>
                          </tr>
                        ))}
                        <tr className="summary-subtotal">
                          <td>{t('subtotal')}:</td>
                          <td>
                            $
                            {cartPriceTotal(cartlist).toLocaleString(
                              undefined,
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Shipping:</td>
                          <td>Free Shipping</td>
                        </tr>
                        <tr className="summary-total">
                          <td>{t('total')}:</td>
                          <td>
                            $
                            {cartPriceTotal(cartlist).toLocaleString(
                              undefined,
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <Accordion type="checkout">
                      <Card title={t('bankTransfer')} expanded={true}>
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </Card>

                      <Card title={t('cheque')}>
                        Ipsum dolor sit amet, consectetuer adipiscing elit.
                        Donec odio. Quisque volutpat mattis eros. Nullam
                        malesuada erat ut turpis.
                      </Card>

                      <Card title={t('cod')}>
                        Quisque volutpat mattis eros. Lorem ipsum dolor sit
                        amet, consectetuer adipiscing elit. Donec odio. Quisque
                        volutpat mattis eros.
                      </Card>

                      <Card title={t('paypal')}>
                        <small className="float-right paypal-link">
                          What is PayPal?
                        </small>
                        Nullam malesuada erat ut turpis. Suspendisse urna nibh,
                        viverra non, semper suscipit, posuere a, pede. Donec nec
                        justo eget felis facilisis fermentum.
                      </Card>

                      <Card title={t('creditCard')}>
                        <img
                          src="images/payments-summary.png"
                          alt="payments cards"
                          className="mb-1"
                        />
                        Donec nec justo eget felis facilisis fermentum.Lorem
                        ipsum dolor sit amet, consectetuer adipiscing elit.
                        Donec odio. Quisque volutpat mattis eros. Lorem ipsum
                        dolor sit ame.
                      </Card>
                    </Accordion>

                    <button
                      type="submit"
                      className="btn btn-outline-primary-2 btn-order btn-block"
                    >
                      <span className="btn-text">{t('placeOrder')}</span>
                      <span className="btn-hover-text">{t('proceed')}</span>
                    </button>
                  </div>
                </aside>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  cartlist: state.cartlist.data,
})

export default connect(mapStateToProps)(Checkout)
