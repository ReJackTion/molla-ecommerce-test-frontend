import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/client'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import useTranslation from 'next-translate/useTranslation'

import ALink from '~/components/features/alink'

import { GET_PRODUCTS } from '~/server/queries'
import withApollo from '~/server/apollo'
import { safeContent } from '~/utils'

function HeaderSearch(): JSX.Element {
  const router = useRouter()
  const [cat, setCat] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState([])
  const [searchProducts, { data }] = useLazyQuery(GET_PRODUCTS)
  const result = data && data.products.data
  const [timer, setTimer] = useState(null)
  const { t, lang } = useTranslation('productCategories')

  useEffect(() => {
    document.querySelector('body').addEventListener('click', closeSearchForm)

    return () => {
      document
        .querySelector('body')
        .removeEventListener('click', closeSearchForm)
    }
  }, [])

  useEffect(() => {
    if (result && searchTerm.length > 2)
      setProducts(
        result.reduce((acc, product) => {
          let max = 0
          let min = 999999
          product.variants.map((item) => {
            if (min > item.price) min = item.price
            if (max < item.price) max = item.price
          }, [])

          if (product.variants.length == 0) {
            min = product.sale_price ? product.sale_price : product.price
            max = product.price
          }

          return [
            ...acc,
            {
              ...product,
              minPrice: min,
              maxPrice: max,
            },
          ]
        }, [])
      )
  }, [result, searchTerm])

  useEffect(() => {
    if (searchTerm.length > 2) {
      if (timer) clearTimeout(timer)
      let timerId = setTimeout(() => {
        searchProducts({
          variables: {
            searchTerm: searchTerm,
            category: cat,
          },
        })
      }, 500)
      setTimer(timerId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, cat])

  useEffect(() => {
    document.querySelector('.header-search.show-results') &&
      document
        .querySelector('.header-search.show-results')
        .classList.remove('show-results')
  }, [router.pathname])

  function matchEmphasize(name) {
    let regExp = new RegExp(searchTerm, 'i')
    return name.replace(regExp, (match) => '<strong>' + match + '</strong>')
  }

  function closeSearchForm(e) {
    document.querySelector('.header .header-search').classList.remove('show')
  }

  function onCatSelect(e) {
    setCat(e.target.value)
  }

  function onSearchChange(e) {
    setSearchTerm(e.target.value)
  }

  function showSearchForm(e) {
    document.querySelector('.header .header-search').classList.add('show')
  }

  function onSubmitSearchForm(e) {
    e.preventDefault()
    router.push({
      pathname: '/shop/sidebar/list',
      query: {
        searchTerm: searchTerm,
        category: cat,
      },
    })
  }

  function goProductPage() {
    setSearchTerm('')
    setProducts([])
  }

  return (
    <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
      <button className="search-toggle">
        <i className="icon-search"></i>
      </button>

      <form
        action="#"
        method="get"
        onSubmit={onSubmitSearchForm}
        onClick={showSearchForm}
      >
        <div className="header-search-wrapper search-wrapper-wide">
          <div className="select-custom" onChange={(e) => onCatSelect(e)}>
            <select id="cat" name="cat">
              <option value={null}>{t('allCategories')}</option>
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="lighting">Lighting</option>
              <option value="decoration">Decoration</option>
              <option value="electronics">Electronics</option>
              <option value="armchairs-and-chaises">Armchairs & Chaises</option>
              <option value="beds">Beds</option>
              <option value="furniture">Furniture</option>
              <option value="coffee-and-tables">Coffee & Tables</option>
            </select>
          </div>
          <label htmlFor="q" className="sr-only">
            Search
          </label>
          <input
            type="text"
            onChange={onSearchChange}
            value={searchTerm}
            className="form-control"
            name="q"
            placeholder={t('seachProduct')}
            required
          />
          <button className="btn btn-primary" type="submit">
            <span className="sr-only">Search</span>
            <i className="icon-search"></i>
          </button>
        </div>
        <div className="live-search-list" onClick={goProductPage}>
          {products.length > 0 && searchTerm.length > 2 ? (
            <div className="autocomplete-suggestions">
              {searchTerm.length > 2 &&
                products.map((product, index) => (
                  <ALink
                    href={`/product/default/${product.slug}`}
                    className="autocomplete-suggestion"
                    key={`search-result-${index}`}
                  >
                    <LazyLoadImage
                      src={
                        process.env.NEXT_PUBLIC_ASSET_URI +
                        product.sm_pictures[0].url
                      }
                      width={40}
                      height={40}
                      alt="product"
                    />
                    <div
                      className="search-name"
                      dangerouslySetInnerHTML={safeContent(
                        matchEmphasize(product.name)
                      )}
                    ></div>
                    <span className="search-price">
                      {product.stock == 0 ? (
                        <div className="product-price mb-0">
                          <span className="out-price">
                            ${product.price.toFixed(2)}
                          </span>
                        </div>
                      ) : product.minPrice == product.maxPrice ? (
                        <div className="product-price mb-0">
                          ${product.minPrice.toFixed(2)}
                        </div>
                      ) : product.variants.length == 0 ? (
                        <div className="product-price mb-0">
                          <span className="new-price">
                            ${product.minPrice.toFixed(2)}
                          </span>
                          <span className="old-price">
                            ${product.maxPrice.toFixed(2)}
                          </span>
                        </div>
                      ) : (
                        <div className="product-price mb-0">
                          ${product.minPrice.toFixed(2)}&ndash;$
                          {product.maxPrice.toFixed(2)}
                        </div>
                      )}
                    </span>
                  </ALink>
                ))}
            </div>
          ) : (
            ''
          )}
        </div>
      </form>
    </div>
  )
}

export default withApollo({ ssr: typeof window === 'undefined' })(HeaderSearch)
