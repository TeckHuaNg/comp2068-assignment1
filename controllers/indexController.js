// This file contains information that will show in files inside "views" folder
exports.homePage = (req, res, next) => {
  res.render('index', {
    title: 'Teck Hua Ng',
    message: 'Thank you for visiting my portfolio. This website is built using ',
    express: 'ExpressJs Framework',
    mdl: 'GetMDL CSS',
    github: 'GitHub',
    heroku: 'Heroku',
  });
};

exports.about = (req, res, next) => {
  res.render('about', {
    title: 'Something about me ...',
    message:
      'Born and raised in Malaysia, I am grateful to have the opportunity to study in Canada, at Georgian College. Based on TypeFocus Assessment, I have personality type INTJ.',
  });
};

exports.services = (req, res, next) => {
  res.render('services', {
    title: 'Services',
    service_1: 'Software Developer (.NET, Java, C#)',
    service_2: 'Web Developer (HTML & CSS, PHP, JavaScript)',
    service_3: 'Business Analyst',
    service_4: 'Project Management for IT',
    service_5: 'Database Management (MySQL, MongoDB)',
  });
};

// The email function is learnt from https://www.youtube.com/watch?v=nF9g1825mwk
const nodemailer = require('nodemailer');

exports.projects = (req, res, next) => {
  res.render('projects', {
    title: 'Projects',
  });
};

exports.contact = (req, res, next) => {
  res.render('contact', {
    title: 'Contact me using the form below',
  });
};

exports.send = (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Company: ${req.body.company}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  const connect = process.env.PASSWORD;
  const email = process.env.EMAIL;
  const service_p = process.env.SERVICE;

  const smtpTransport = require('nodemailer-smtp-transport');
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport(smtpTransport({
    service: service_p,
    // port: 465,
    // secure: false, // true for 465, false for other ports
    // requireTLS: true,
    auth: {
      user: email,
      pass: connect,
    },
    tls: {
      rejectUnauthorized: false,
    },
  }));

  const my_email = process.env.MYEMAIL;
  // setup email data with unicode symbols
  const mailOptions = {
    from: `${req.body.company}` + ' <test@mail.com>', // sender address
    to: my_email, // list of receivers
    subject: 'Contact from Portfolio', // Subject line
    text: 'Hello world?', // plain text body
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('contact', {
      title: 'Enter your information',
    });
  });
};
