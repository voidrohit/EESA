const express = require('express')
var bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json())

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine','ejs');

app.get('/', (req, res) => {
  res.render('dashboard');
});

app.post('/eesa', (req, res) => {
  res.redirect("https://eesafolio.herokuapp.com/")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
