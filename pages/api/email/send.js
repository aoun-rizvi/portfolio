import Cors from 'cors';
const mail = require('@sendgrid/mail');

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
});
    
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
};


mail.setApiKey(process.env.SEND_GRID_API_KEY);


export default async function handler(req, res) {
  // console.log('req.body:', req.body);

  const body = req.body;
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;
  const data = {
    to: 'aounrizvi@live.com',
    from: 'aaarizvi125@gmail.com',
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };

  await mail.send(data);

  res.status(200).json({ status: 'Email Sent OK' });
}
