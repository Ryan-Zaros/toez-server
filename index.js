const express = require('express');

const app = express();
const PORT = 8000;
  
// hardcoded JSON
let people = [
    {
      name: "Hannah Rickard",
      number: "06-51-99-56-83",
      id: 1
    },
    {
      name: "Hyun Namkoong",
      number: "10987654",
      id: 2
    },
    {
      name: "Courtney Martinez",
      number: "3691215",
      id: 3
    }
];

app.listen(PORT, function (err) {
   if (err) {
       console.log("Error while starting server");
   }
   else {
       console.log("Server has been started at " + PORT);
   };
});

// app.get('/', function (req, res) {
//     res.send('home route test');
// });

app.get('/', (request, response) => {
    response.send('<h1>Phonebook</h1>')
});

app.get('/api/people', (request, response) => {
    response.json(people)
});