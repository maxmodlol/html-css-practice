
const timeinseconds = [4,5,2,10,0];
function delay (seconds){
    return new  Promise(function(resolve, reject) {
        
       setTimeout(resolve(),seconds*1000);
        


     
    }).then(function() {
       
         console.log(`${seconds} seconds` );
        
       
    });
}
for(let x=0 ;x<timeinseconds.length;x++){
    delay(timeinseconds[x]);
}