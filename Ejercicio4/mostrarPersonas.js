var rp = require('request-promise');

rp('https://reclutamiento-14cf7.firebaseio.com/personas.json')
    .then((html) => console.log(html)) 
    .catch((err) => console.error(err));