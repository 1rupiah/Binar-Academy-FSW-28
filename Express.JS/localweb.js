let express = require('express');
let app = express();
let port = 3000;

let users = require('./database/userDatabase.json');
app.get('/userDatabase', (req, res) => {
    console.log(users)
    res.status(200).json(users);
  })

app.use(express.static('assets'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('staticwebsite');
})

app.get('/interactivewebsite', (req, res) => {
  res.render('interactivewebsite')
})

app.get('/userpage', (req, res) => {
  res.render('userpage');
})

app.post('/register', (req, res) => {
  let {email, password} = req.body
  let newUser = {email, password}

  users.push(newUser);
  res.status(201).redirect('/userpage');
})

app.post('/login', (req, res) => {
  let {email, password} = req.body
  for(user of users) {
    if(user.email === email && user.password === password) {
      return res.redirect('/interactivewebsite');
    }
  }
  res.status(400).json({
    message: "Wrong Email and/or Password"
  })
})

app.listen(port, () => {
  console.log(`Application running in port : ${port}`);
})