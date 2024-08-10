// import package/library express
const express = require('express');
const { UserController } = require('./controllers/user.controller');

// Initialization application expressJS
const app = express();

const PORT = 4200;


// Parsing JSON body
app.use(express.json());

//Parsing URL-encoded data
app.use(express.urlencoded({ extended: true}));

// Parsing URL-encoded data
app.use(express.json({ limit: '50mb'}));

// Parsing URL-encoded data
app.use(express.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
}));

const userController = new UserController(app)
userController.boot()

/**
 * Req adalah Request
 * Res adalah Response
 */

// // simple routing
// app.get('/', (req, res) => {
//     return res.send("Hello, World").status(200);
// });

// app.post('/', (req, res) => {
//     return res.status(201).send("ini adalah HTTP Method POST");
// })

// app.get('/:id', (req, res) => {
//     return res.send(`Hello, World from ${req.params.id}`).status(200);
// });

// app.put('/', (req, res) => {
//     return res.status(200).send("Ini adalah HTTP Method PUT");
// })

// app.delete('/', (req, res) => {
//     return res.status(200).send(" ini adalah HTTP Method DELETE");
// })

app.listen(PORT, () => {
    console.log(`server is running in http://localhost:${PORT}`);
})
