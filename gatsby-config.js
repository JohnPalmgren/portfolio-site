module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "portfolio-site",
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icons/favicon.png",
      },
    },
  ],
};
