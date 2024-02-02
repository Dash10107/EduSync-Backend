const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
	console.log(process.env.USEREMAIL);
	console.log(process.env.PASS);
	
	try {
		const transporter = nodemailer.createTransport({
			host: process.env.HOST,
			service: process.env.SERVICE,
			port: Number(process.env.EMAIL_PORT),
			secure: Boolean(process.env.SECURE),
			auth: {
				user: process.env.USEREMAIL,
				pass: process.env.PASS,
			},
		});

	const info = await transporter.sendMail({
			from: process.env.USEREMAIL,
			to: email,
			subject: subject,
			text: text,
		});
		console.log("email sent successfully");
		console.log(info);
		
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};