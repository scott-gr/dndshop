module.exports = {
	siteMetadata: {
		title: `DnD Shop`,
		description: `A Dungeons & Dragons 5E shop and gold management application`,
		author: `Scott Griffin`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-source-mongodb`,
		{
			resolve: `gatsby-source-mongodb`,
			options: {
				dbName: `dnddb`,
				collection: [`users`, `items`, `players`, `dms`, `groups`],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-nodejs`,
	],
};
