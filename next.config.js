/**
 * @type {import('next').NextConfig}
 */

const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  reactStrictMode: true,
  // basePath:
  //   process.env.NODE_ENV === 'production'
  /////     ? `/react/molla/demo-${process.env.NEXT_PUBLIC_DEMO}`
  //     : '',
  trailingSlash: true,
  // env: {
  //   PUBLIC_URL: process.env.NODE_ENV === 'production' ? `/` : '/',
  //   APP_URL:
  //     process.env.NODE_ENV === 'production'
  /////       ? 'https://d-themes.com/react/molla/'
  //       : 'http://localhost/',
  // },
  env: {
    PUBLIC_URL: process.env.NODE_ENV === 'production' ? `/` : '/',
    APP_URL:
      process.env.NODE_ENV === 'production'
        ? 'https://molla-ecommerce-backend.herokuapp.com/'
        : 'http://localhost:4000',
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
})
