const express = require('express');

const app = express();
const port = 3000;


const Routes = require('./routes');

app.use(Routes);

// Démarrer le serveur
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
