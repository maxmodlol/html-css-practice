const timeinseconds = [4,5,2,10,0];

timeinseconds.forEach(function delay (seconds){
        return new Promise(function(resolve, reject) {
  
            setTimeout(resolve, seconds*100);
        }).then(function() {
            console.log(`${seconds} seconds` );
        });
    
   
   
});