import Cors from 'cors';
import nodemailer from 'nodemailer';

function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
);

// const allowCors = (fn) => async (req, res) => {
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   // another common pattern
//   // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET,OPTIONS,PATCH,DELETE,POST,PUT',
//   );
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
//   );
//   if (req.method === 'OPTIONS') {
//     res.status(200).end();
//     return;
//   }
//   return await fn(req, res);
// };

// export default allowCors(async (req, res) => {
//   const { name, email, telephone, inquiry, emailDest } = req.body;
//   if ((!name, !email, !telephone, !inquiry, !emailDest)) {
//     res.status(400).json({ e: 'Incomplete details' });
//   }

//   let transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     secure: true,
//     port: 465,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_KEY,
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: emailDest,
//     subject: 'webComments',
//     html: `${name} ${email} ${telephone} ${inquiry}`,
//   };

//   try {
//     const response = await transporter.sendMail(mailOptions);
//     res.send({ response });
//   } catch (e) {
//     res.send({ e });
//   }
// });

export default async (req, res) => {
  await cors(req, res);

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
    res.send({ response });
  } catch (e) {
    res.send({ e });
  }
};
