
const timeinseconds = [4,5,2,10,0];
 function  delay1(seconds){

    setTimeout(function () {
        console.log(`${seconds} seconds` );
         
    }, seconds*1000);
}

 function delay (seconds){
    return new  Promise( function(resolve, reject) {
        resolve();
    }).then(function() {
        delay1(seconds);
       
    });
}
for(let x=0 ;x<timeinseconds.length;x++){
    delay(timeinseconds[x]);
}
