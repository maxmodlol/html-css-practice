function generateArrayOfNumbers(arrayLength){
    const arr=new Array(arrayLength);
    

arr.fill().map((value,indx)=>(arr[indx]=Math.floor(Math.random()*10)));

    return arr ;
}
const arr=generateArrayOfNumbers(100);
function getArrayOfNumbersWithoutDuplication(arrayOfNumbers) {
    unique = new Set(arrayOfNumbers); // this is the easiest way doing it in set becaause its a unique 
    console.log(unique);
    return unique
}
function getDuplication(arrayOfNumbers) {
    const dublicte= new Map(); 
    for(let i =0;i<arrayOfNumbers.length;i++){
        dublicte.set(arrayOfNumbers[i],dublicte.get(arrayOfNumbers[i]) + 1 || 1);

    } 
    console.log(dublicte);
   return dublicte
}
getDuplication(arr);