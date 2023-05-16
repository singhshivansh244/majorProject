require('dotenv').config();
const express = require("express"); // using this
const path = require("path");
const bcrypt = require("bcryptjs"); // using this
const app = express();
const hbs = require("hbs");
const { urlencoded } = require("body-parser");
const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;
const templates_path = path.join(__dirname, '../templates/views');
const partial_path = path.join(__dirname, '../templates/partials');
app.use(urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'hbs');
app.set('views', templates_path);
hbs.registerPartials(partial_path);

//Shivansh code

//cross origin restriction all permitted
const cors = require('cors');
app.use(cors());
// storing username var
let USERNAME = "";
// user schema
const User = require('./models/register')
const mongoose = require('mongoose');
// const { METHODS } = require('http');
// connecting 
mongoose.connect(process.env.MONGO_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).
   then(() => console.log("Database connected!")).
   catch(err => console.log(err))

// sending userData to mongo on sign up
app.post('/register', async (req, res) => {
   try {
      console.log(req.body);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const user = new User({
         username: req.body.username,
         password: hashedPassword,
         contact: req.body.contact,
         email: req.body.email,
      })
      const newUser = await user.save();
      res.status(200).render('login');
   } catch (err) {
      console.log(err);
   }
});
// remove username
app.post('/remuser', (req, res) => {
   USERNAME = "";
   res.status(200);
})
// updating username
app.get('/username', async (req, res) => {
   res.status(200).json(USERNAME);
})
// login page
app.get("/login", (req, res) => {
   res.render('login');
});
// verifing password and email
app.post("/login", async (req, res) => {
   try {
      const email = req.body.email;
      const password = req.body.password;
      const usermail = await User.findOne({ email: email });
      const isMatch = await bcrypt.compare(password, usermail.password);
      if (isMatch) {
         USERNAME = usermail.username;
         res.status(200).render('home');
      } else {
         res.send("invalid login or password");
      }
   } catch (error) {
      res.status(400).send(error);
      console.log(error);
   }
})
// signing up page
app.get("/signup", (req, res) => {
   res.render('signup');
});

app.listen(port, function (req, res) {
   console.log(`${port}`);
});
// code end