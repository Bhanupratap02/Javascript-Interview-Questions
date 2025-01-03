//create a function multiplyByTwo(obj) that multiply all numeric properties values by two
 let obj = {
    a: 1,
    b: 2,
    c: 3,
    d:"hii",
 }

 function multiplyByTwo(obj){
    for (let key in obj){
        if(typeof obj[key] === "number"){
            obj[key] *= 2
        }
    }

 }
 multiplyByTwo(obj)
//  console.log(obj)

//Question 2: Quess the output
const a = {}
const b = {b:"b"}
const c={c:"c"}
a[b]=123 // it will assign [object object]:123
a[c]=456 // it will also assign [object object]:456
console.log(a[b]); // 456 

// question 3:
console.log([..."Lydia"])//it will spread all the character inside the array as string is an array of characters so output will be ['L','y','d','i','a']


// question
let person = {name:"sachin"}
const members = [person]
person = null
console.log(members[0]) // {name:sachin} becuase we changing the reference in person while but modifying the object

person.name = null
console.log(members[0]); // {name:null}
