const express = require('express');
var fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());
app.get('/products', (req, res) => {
  const { name } = req.body;
  var data = {};
  data.table = [];
  for (i = 0; i < 26; i++) {
    var obj = {
      id: i,
      square: i * i,
    };
    data.table.push(obj);
  }
  fs.writeFile('input.json', JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log('complete');
  });
  res.send(data);
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
