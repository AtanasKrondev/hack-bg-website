const path = require('path')

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/style/*.scss')],
    })
}

module.exports = {
  siteName: 'hack',
  siteDescription: 'Blockchain & DLT Solutions',
  plugins: [
    {
      use: '~/src/plugins/wp-source/',
      options: {
        baseUrl: 'https://hack.bg', // required - Replace me with your Wordpress URL
        typeName: 'WordPress', // GraphQL schema name (Optional)
        perPage: 100, // How many posts to load from server per request (Optional)
        concurrent: 10, // How many requests to run simultaneously (Optional)
        routes: {
          WordpressPage: node => {
            return new URL(node.link).pathname
          },
          post: '/:slug', //adds route for "post" post type (Optional)
          WordpressCategory: '/:slug', //adds route for "post" post type (Optional)
          post_tag: '/tag/:slug', // adds route for "post_tag" post type (Optional)
        },
        createPages: {
          approach: 'exclude', // include or exclude, default is include
          list: [], //an array of page slugs to include or exclude, ex. ['about', 'our-team'], default is an empty array
        },
      },
    },
  ],
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
}
