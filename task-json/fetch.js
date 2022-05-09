global.fetch = require("cross-fetch");


function readJson () {
    fetch('https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json')
    .then(response => {
        if (response.status!=200) {
            console.error("HTTP error " + response.status);
        }

         return  response.text(); // Get JSON value from the response body
        
              

    })
   
    .catch(err => {
        console.log(err);
       
    });

 }
 readJson();