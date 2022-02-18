module.exports = {
  siteMetadata: {
    title: `bioethx`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "features",
        path: __dirname + "/features",
      },
    },
    "gatsby-plugin-mdx",
  ],
};
