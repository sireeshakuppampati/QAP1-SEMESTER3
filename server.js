//Import the express module
const express = require('express');

//Create an instance of express
const app = express();

//Define a port number to listen on
const port = 3000;

//Define a route for the root URL (/)
app.get('/', (req, res)=> {
    //Log a msg when this route is accessed 
    console.log('Root URL accessed');
    //Send a response to the client
    res.send('Hello,World!');
});

//Start the server and listen on the specified port
app.listen(port, ()=> {
//Log a msg when the server starts successfully
console.log(`Server is running at http://localhost:${port}/ `);
});