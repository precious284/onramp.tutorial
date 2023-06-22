console.log("onramp")
console.log("dob")

let myArr = ["andrew", "felix", "shade", "tunde"]
console.log(myArr[2])
console.log("before")

console.log("myArr")
myArr.unshift("joy")

console.log("after")
console.log(myArr)

console.log([...myArr, 'osas'])

const cities = ["Tokyo", "Cairo", "France", "Paris"]
console.log("before slicing", cities)
const newCities = cities.slice(2)
console.log("after slicing", newCities)

const startEndoption = cities.slice(2, 4)
console.log("start and end options", startEndoption)
const months = ['Jan', 'March', 'April', 'June']
console.log("original array", months)
months.splice(1, 0, "Feb")
console.log("splice with three param", months)
months.splice(4, 0, "May")
console.log("adding may", months)
months.splice(6, 0, "July")
console.log("adding july", months)
months.splice(7, 0, "August")
console.log("adding August", months)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
function showidentity(name, age, phone) {
    const id = `my name is ${name}, i am ${age} year old, and my phonenumber is ${phone}`
    return id
 }
console.log(showidentity("osas", "18", "081767623445",))
// write a function that take an array of numbers
//  and strings return only items in the
//  arraay that are number

function filter(Number) {
const filter  = [2,"elias", "fish", 44, "false", "salt"]
}
console.log(filter)
