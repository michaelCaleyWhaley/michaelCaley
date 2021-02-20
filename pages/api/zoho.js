import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { name, email, telephone, inquiry, emailDest } = req.body;
  if ((!name, !email, !telephone, !inquiry, !emailDest)) {
    res.status(400).json({ e: 'Incomplete details' });
  }

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    secure: true,
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_KEY,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: emailDest,
    subject: 'webComments',
    html: `${name} ${email} ${telephone} ${inquiry}`,
  };

  try {
    const response = await transporter.sendMail(mailOptions);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send({ host: req.headers.host, response });
  } catch (e) {
    res.send({ e });
  }
};
