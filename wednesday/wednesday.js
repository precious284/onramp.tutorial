console.log("welcome to day 8")
const myArr = [2,"elias","fish",44,false,"salt"]



function onlyNum(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) { 
        if(typeof arr[i] === 'number') {
            newArr.unshift(arr[i])
        }
    }
    return newArr
} 
console.log(onlyNum(myArr))


+33626225

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}
//function filterArr(arr){
   // const newArr =arr.filterfunction(item)=> typeof item ===('number')
//}


function filterArr(arr)
{return arr.filter((item)=> typeof item ==='number')}
console.log(filterArr(myArr))

//using Arror function
//{return arr.filter(item)=>typeof item==='number'}
//console.log(filterArr(myArr))

//sort method of an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sortA = fruits.sort();
// const sortReverse = sortA.reverse()
console.log(sortA)

//sort with arguments
const sortB = fruits.sort((a,b) => b -a)
console.log("sort b", sortB)