import { express } from 'express';
import { Debug } from 'debug';

const app = express.Router();
const debug = new Debug('platzi-overflow:auth');

const users = [{
  firstName: 'Jose luis',
  lastName: 'Zamora',
  email: 'jzamora@mt.bo',
  password: '123456',
  _id: 123
}];

// const findUserByEmail = e => users.find({ email } => email === e);

function findUserByEmail (email) {
  return users.find(user => user.email === email);
}

app.post('/signin', (req, res, next) => {
  const { email, password } = req.body;
  const user = findUserByEmail(email);

  if (!user) {
    debug(`User with email ${email} not found`);
    res.status(401).json({
      message: 'Login failed',
      error: 'Email and password dont match'
    });
  }
});

export default app;
