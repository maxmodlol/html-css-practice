global.fetch = require("cross-fetch");


function readJson () {
    fetch('https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json')
    .then(response => {
        if (!response.ok) {
            console.error("HTTP error " + response.status);
        }
        const body =  response.text();
        return body;
    })
    .then(data => {
        console.log(data);  
    })
    .catch(err => {
        console.log(err);
       
    });

 }
 readJson();