const express = require('express');

const app = express();
var router = app.Router();

const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));


router.


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})