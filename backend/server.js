const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
//express server
const app = express();
const port = 5000;
//middleware
app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));


const usersRouter = require('./routes/users');
const tribRouter = require('./routes/tribunaux');
const serviceRouter = require('./routes/services');

app.use('/users', usersRouter);
app.use('/tribunaux', tribRouter);
app.use('/tribunaux/services', serviceRouter);

const collaborateursRouter = require('./routes/collaborateurs');

app.use('/collaborateurs', collaborateursRouter);

const greffiersRouter = require('./routes/greffiers');

app.use('/greffiers', greffiersRouter);

const primegreffiersRouter = require('./routes/primegreffiers');

app.use('/primegreffiers', primegreffiersRouter);

const adversairesRouter = require('./routes/adversaires');
app.use('/adversaires', adversairesRouter);

const typedossiersRouter = require('./routes/typedossiers');

app.use('/typedossiers', typedossiersRouter);



const demandeursRouter = require('./routes/demandeurs');

app.use('/demandeurs', demandeursRouter);

const parametreRouter = require('./routes/parametre');
app.use('/parametre', parametreRouter);

const sousdossierRouter = require('./routes/sousDossiers');
app.use('/sousDossier', sousdossierRouter);

const ReglementsRouter = require('./routes/reglements');
app.use('/reglements', ReglementsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});