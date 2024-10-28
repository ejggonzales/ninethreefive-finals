import express from 'express';
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import {users, routes} from './users.js'
import { log } from 'console';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send(routes)
})

app.get('/api/users', (req, res) => {
    res.send(users);
});

app.get('/api/users/:id', (req, res) => {
    const usersid = parseInt(req.params.id)
    const user = users.find(u => u.id === usersid);
    
    if(!user) res.status(404).send("The user with ID is not existing or is not found.")

    res.send(user)
});

app.get('/api/users/:id/:name', (req, res) => {
    res.send(req.params);
});

app.get('/api/adduser', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'adduser.html'));
});

app.post('/api/adduser', (req, res) => {
    let newUser = {
        id : users.length + 1,
        name : req.body.name,
        email : req.body.email,
        age : req.body.age,
        salary : req.body.salary
    }

    console.log(`A new user is added with id : ${newUser.id} `);
    users.push(newUser);
    res.redirect('/api/users');
});

app.delete('/api/delete/:id', (req, res) => {
    const usersid = parseInt(req.params.id)
    const userIndex = users.findIndex(u => u.id === usersid);
    users.splice(userIndex, 1); 
    res.send({ message: `User with ID ${usersid} deleted successfully.` });  
});

app.listen(3000, ()=> {
    console.log('Listening on port 3000');
});