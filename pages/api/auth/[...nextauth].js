import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
	site: process.env.SITE || "https://dndshop.herokuapp.com/",

	// Configure one or more authentication providers
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER, 
      from: process.env.EMAIL_FROM
    }),
  ],

	pages: {
		signIn: "/auth/signin",
		signOut: "/auth/signout",
		error: "/auth/error", // Error code passed in query string as ?error=
		verifyRequest: "/auth/verify-request", // (used for check email message)
		newUser: null, // If set, new users will be directed here on first sign in
	},

	// A database is optional, but required to persist accounts in a database
	database: {
		type: "mongodb",
		useNewUrlParser: true,
		url: process.env.DATABASE_URL,
	},
};

export default (req, res) => NextAuth(req, res, options);
