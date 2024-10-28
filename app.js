const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const users = require('./data-users');
const products = require('./data-products');
const messages = require('./data-messages');

// app.use(express.bodyParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/api/productslist', (req, res) => {
    res.send(products);
})

app.get('/api/customerlist', (req, res) => {
    res.send(users);
});

app.get('/api/customermessage', (req, res) => {
    res.send(messages);
})

app.post('/api/addcustomer', (req, res) => {
    let newUser = {
        id : users.length + 1,
        name : req.body.name,
        email : req.body.email,
        username : req.body.username
    }

    console.log(`A new user is added with id : ${newUser.id} `);
    users.push(newUser);
    res.redirect('/api/customerlist');
});

app.post('/api/addmessage', (req, res) => {
    let newMessage = {
        id : messages.length + 1,
        name : req.body.name,
        email : req.body.email,
        date: req.body.date,
        message : req.body.message
    }

    console.log(`A new message is added with id : ${newMessage.id} `);
    messages.push(newMessage);
    res.redirect('/api/customermessage');
});

app.use((req, res) => {
    res.status(404);
    res.send(`<h1>Error 404: Resource not found</h1>`)
})

app.listen(3000, () => {
    console.log('App is listening on port 3000');
})


