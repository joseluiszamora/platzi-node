import express from 'express';

const app = express.Router();

const question = {
  _id: 1,
  title: 'Como reutilizo un component en Android?',
  descripcion: 'Miren esta es mi pregunta...',
  createdAt: new Date(),
  icon: 'devicon-android-plain',
  answers: [],
  user: {
    firstName: 'Jose luis',
    lastName: 'Zamora',
    email: 'jzamora@mt.bo',
    password: '123456',
  }
};

const questions = new Array(5).fill(question);

// GET api/questions
app.get('/', (req, res) => res.status(200).json(questions));

// GET api/questions
app.get('/:id', (req, res) => {
  const { id } = req.params;
  // const q = questions.find(question => question._id === +id);
  const q = questions.find(({ _id }) => _id === +id);
  res.status(200).json(q);
});

// POST api/questions
app.post('/', (req, res) => {
  const question = req.body;
  question._id = +new Date();
  question.user = {
    email: 'jzamora@mt.bo',
    password: '123456',
    firstName: 'jose luis',
    lastName: 'zamora'
  },
  question.createdAt = new Date(),
  question.answers = [];
  // save to array
  questions.push(question);
  res.status(201).json(question);
});

export default app;