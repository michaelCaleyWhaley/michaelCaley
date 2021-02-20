import nodemailer from 'nodemailer';

export default async (req, res) => {
  res.send({ t: process.env.EMAIL_HOST, e: process.env.EMAIL_KEY });
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    secure: true,
    port: 465,
    auth: {
      user: 'webcomments@caltechairconditioning.co.uk',
      pass: process.env.EMAIL_KEY,
    },
  });

  const mailOptions = {
    from: 'webcomments@caltechairconditioning.co.uk', // sender address
    to: 'kneedeepwater@hotmail.com ',
    subject: 'webComments', // Subject line
    html: 'test', // plain text body
  };

  try {
    const response = await transporter.sendMail(mailOptions);
    res.send({ response });
  } catch (e) {
    res.send({ e });
  }
};
