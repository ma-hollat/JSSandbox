//alert("Hello from app.js!")

const name ='John'
const age =25
const job = "Software Developer"
const city = "Tallinn"

function hello(){
    return "Hello!";
}

//let html = '<ul><li> Name:'+ name +'</li><li> Age: '+ age +'</li><li> Job:'+ job +'</li><li> City:'+ city +'</li></ul>';

//Template literal
let html = `
<ul>
    <li> Name: ${name}</li>
    <li> Age: ${age}</li>
    <li> Job: ${job}</li>
    <li> City: ${city}</li>
    <li> John says: ${hello()}</li>
</ul>
`;
document.body.innerHTML = html;

//get the data type of John's job
console.log(typeof(job));
//the data type of John's age
console.log(typeof(age));
//the data type of John's city
console.log(typeof(city));

//arrays
const numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1);
console.log(typeof(numbers1));


const numbers2 = new Array(6, 7, 8, 9, 10);
//foreach loop
numbers2.forEach(number => {
    console.log("Lets count: ", number);
});


const mixedArray = [22, "banana", true];
mixedArray.forEach(Element => {
    console.log(Element);
});


//The length og the string element
console.log("Banana is a", mixedArray[1].length, " chars long");
