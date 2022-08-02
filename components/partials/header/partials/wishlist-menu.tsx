import React from 'react'
import { connect } from 'react-redux'
import useTranslation from 'next-translate/useTranslation'

import ALink from '~/components/features/alink'

function WishlistMenu(props): JSX.Element {
  const { wishlist } = props
  const { t, lang } = useTranslation('common')

  return (
    <ALink href="/shop/wishlist" className="wishlist-link" title="Wishlist">
      <i className="icon-heart-o"></i>
      <span className="wishlist-count">{wishlist.length}</span>
      <span className="wishlist-txt">{t('wishlist')}</span>
    </ALink>
  )
}

function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data,
  }
}

export default connect(mapStateToProps, {})(WishlistMenu)
