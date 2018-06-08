exports.homePage = (req, res, next) => {
  res.render('index', {
    title: 'Teck Hua Ng',
    message: 'Welcome to my portfolio.',
  });
};

exports.about = (req, res, next) => {
  res.render('about', {
    message: 'I am a student in Georgian College, studying Computer Programming.',
  });
};

exports.projects = (req, res, next) => {
  res.render('projects', {
    message: 'Below are my projects done:',
  });
};

exports.contact = (req, res, next) => {
  res.render('contact', {
    message: 'If you have any inquiries, contact me using the form below.',
  });
};
