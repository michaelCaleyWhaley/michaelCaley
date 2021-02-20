import nodemailer from 'nodemailer';

export default async (req, res) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.zoho.eu',
    secure: true,
    port: 465,
    auth: {
      user: 'webcomments@caltechairconditioning.co.uk',
      pass: 'e2hB4TWhIvNj',
    },
  });

  const mailOptions = {
    from: 'webcomments@caltechairconditioning.co.uk', // sender address
    to: 'kneedeepwater@hotmail.com ',
    subject: 'webComments', // Subject line
    html: <p>test</p>, // plain text body
  };

  try {
    const response = await transporter.sendMail(mailOptions);
    res.send({ response });
  } catch (e) {
    res.send({ e });
  }
};
