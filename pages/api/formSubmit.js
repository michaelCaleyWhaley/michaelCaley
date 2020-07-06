import Cors from 'cors';
import nodemailer from 'nodemailer';

// Initializing the cors middleware
const cors = Cors({
  methods: ['POST', 'HEAD'],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

async function sendMail({ name, email, telephone, inquiry }) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.gmail_address,
        pass: process.env.gmail_password,
      },
    });

    const mailOptions = {
      from: 'caleydeveloper@gmail.com',
      to: 'kneedeepwater@hotmail.com',
      subject: 'Caltech website inquiry',
      text: `${name}, ${email}, ${telephone}, ${inquiry}`,
    };

    let hasSuccessfullyResolved;
    await new Promise((resolve, reject) =>
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          hasSuccessfullyResolved = error;
          resolve(false);
        } else {
          hasSuccessfullyResolved = info;
          resolve(true);
        }
      }),
    );
    return hasSuccessfullyResolved;
  } catch (e) {
    return false;
  }
}

function isValidOrigin(origin) {
  const validatedOrigin = [
    'http://localhost:3000',
    'https://michaelcaleywhaley.github.io',
  ].filter((listItem) => listItem === origin);
  return validatedOrigin.length > 0;
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  if (!isValidOrigin(req.headers.origin)) {
    res.status(401).send(req.headers.origin);
    return;
  }

  const { name, email, telephone, inquiry } = req.body;
  const hasMailSucceeded = sendMail({
    name,
    email,
    telephone,
    inquiry,
  });
  if (hasMailSucceeded) {
    res.status(200).send(`${hasMailSucceeded}`);
  } else {
    res.status(400).send(`${hasMailSucceeded}`);
  }
}

export default handler;
