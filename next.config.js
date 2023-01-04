module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })
    return config
  },
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'aounrizvi.com'
    ],
  },
}
