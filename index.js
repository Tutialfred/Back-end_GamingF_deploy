// require("dotenv").config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT  
const axios = require("axios");





// 
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  // Creamos una variable de entorno llamada PORT (le damos valor 3001 localmente).
  // Heroku despues va a usar un valor propio internamente (distinto) para esa variable PORT.
  server.listen(3001, () => {
    console.log(`%s listening at ${3001}`); // eslint-disable-line no-console
  });
});

