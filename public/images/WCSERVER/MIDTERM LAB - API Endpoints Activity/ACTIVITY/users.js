const users = [
    { id : 1, name : "Carmela", email : "mela@gmail.com", age : 25, salary : "25,000"},
    { id : 2, name : "Joseph", email : "joe@yahoo.com", age : 30, salary : "45,000"},
    { id : 3, name : "James", email : "james@msn.com", age : 35, salary : "30,000"},
    { id : 4, name : "John", email : "john@gmail.com", age : 40, salary : "25,000"},
    { id : 5, name : "Frank", email : "frank@yahoo.com", age : 45, salary : "45,000"},
    { id : 6, name : "Alex", email : "alex@msn.com", age : 21, salary : "33,000"},  
    { id : 7, name : "Ethan", email : "ejgg@gmail.com", age : 20, salary : "00.00"},
    { id : 8, name : "Remove", email : "ejgg@gmail.com", age : 20, salary : "00.00"}
]

const routes = `<html>
                <h1>Routes Available:</h1>
                <p>GET : / (root)</p>
                <p>GET : /api/users</p>
                <p>GET : /api/users/{id}</p>
                <p>GET : /api/users/{parameters}</p>
                <p>POST : /api/register</p>
                <p>DELETE : /api/delete/:id</p>
                </html>`

export {users, routes};   
