import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-ts-site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'https://norika-oh.com/graphql',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-X6HWHR5CBE',
          // 'GA-TRACKING_ID', // Google Analytics / GA
        ],
        // このプラグインのオプションに関するその他の設定があれば追加
        pluginConfig: {
          // Google Analyticsがページをロードする前にヒットを送信しないようにします
          respectDNT: true,
        },
      },
    },
  ],
};

export default config;
