const timeinseconds = [4,5,2,10,0];
timeinseconds.forEach(function  (element){
    setTimeout(() => {
        console.log(`print ${element} after ${element} seceonds`);

    },element*1000);
   
});