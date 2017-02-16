import CAS from 'cas-client-node';

const cas = CAS({
  cas_host: 'http://lytest.lessoald.cn/cas/login',
  service: 'http://localhost:3000/casauth'
});

export function casLogin(req, res) {
  let ticket = req.param('ticket');
  if (ticket) {
    cas.validate(ticket, function(err, status, username) {
      if (err) {
        // Handle the error
        res.send({error: err});
      } else {
        // Log the user in
        // res.send({status: status, username: username});
        next();
      }
    });
  } else {
    res.redirect('/');
  }
};