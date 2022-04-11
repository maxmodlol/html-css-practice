function generateArrayOfNumbers(arrayLength){
    const arr=new Array(arrayLength);
    

arr.fill().map((value,indx)=>(arr[indx]=Math.floor(Math.random()*10)));

    return arr ;
}
const arr=generateArrayOfNumbers(100);
function getArrayOfNumbersWithoutDuplication(arrayOfNumbers) {
    unique = new Set(arrayOfNumbers);
    console.log(unique);
    return unique
}

function getArrayOfNumbersWithoutDuplication1(arrayOfNumbers) {

uniqueArray = arrayOfNumbers.filter(function(item, pos) {
    return arrayOfNumbers.indexOf(item) == pos;
})

console.log(uniqueArray);

return uniqueArray;
}
function getDuplication(arrayOfNumbers) {
    const dublicte= new Map(); 
    for(let i =0;i<arrayOfNumbers.length;i++){
        dublicte.set(arrayOfNumbers[i],dublicte.get(arrayOfNumbers[i]) + 1 || 1);

    } 
    console.log(dublicte);
   return dublicte
}

function getDuplication2(arrayOfNumbers) {
  
const count = {};

    arr.forEach(element => {
    count[element] = (count[element] || 0) + 1;
});
    console.log(count);
   return count
}

getDuplication2(arr);
getArrayOfNumbersWithoutDuplication1(arr);
