
   
// Rendering views is the a very common feature of express.
//Rendering means sending final output to browser or sending view to browser in MVC pattern.
// It is used to send your data to a template and customize the response each time.
// In express, ejs module is used to render the template with HTML.

// Code to require a NodeJS module called express
const express = require('express');
const app = express();
const port = 8000;

// This line is used to set the view engine to ejs
app.set('view engine', 'ejs')

// Code to call the index.ejs file in the views folder.
// You can set anything in the title, that will be displayed in the website
app.get('/', (req, res) => {
    res.render('index', {
        title: 'SakshiBhumbla',
        name: 'Sakshi Bhumbla'
    });
});

// This code helps the server to listen to certain requests that are made on the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});