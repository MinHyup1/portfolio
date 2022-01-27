const express = require('express');
const app = express();
app.use(express.static('public'));

const port = 3000;

app.get('/route',function(req, res){
  res.send('Hello Mybatis, <img src="/mybatis.png">');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/dynamic', (req, res) => {
  var output = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      Hello Dynamic!
  </body>
  </html>`;
  res.send(output);
})
