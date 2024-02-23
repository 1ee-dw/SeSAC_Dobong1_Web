const express = require('express');
const app = express();
const PORT = 8000;
const router = require('./routes');
const { sequelize } = require('./models');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

app.get('*',function(request,response) {
    response.send('잘못된 요청입니다.');
});

app.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`);
})

/* sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log('Database connection succeeded!')
      console.log(`http://localhost:${PORT}`);
    });
  }).catch((error) => {
    console.error(error);
  });; */