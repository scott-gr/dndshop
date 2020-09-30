import nextConnect from "next-connect";
import middleware from "../../../../../middlewares/middleware";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
	try {
		if (!req.user) throw new Error("You need to be logged in.");
		const token = crypto.randomBytes(32).toString("hex");
		await req.db.collection("tokens").insertOne({
			token,
			userId: req.user._id,
			type: "emailVerify",
			expireAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
		});
		const msg = {
			to: req.user.email,
			from: process.env.EMAIL_FROM,
			templateId: process.env.SENDGRID_TEMPLATEID_EMAILVERIFY,
			dynamic_template_data: {
				subject: "[DND Shop] Please verify your email address.",
				name: req.user.name,
				url: `${process.env.WEB_URI}/api/user/email/verify/${token}`,
			},
		};
		await sgMail.send(msg);
		res.json({ message: "An email has been sent to your inbox." });
	} catch (error) {
		res.json({
			ok: false,
			message: error.toString(),
		});
	}
});

export default handler;
