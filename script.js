// for loop example function
let forLoop = () => {
    let array=['a', 'b', 'c', 'd']
    for (let i=0; i<array.length; i++) {
        console.log(array[i])
    }
}

//for in loop example function
const object = { a: 1, b: 2, c: 3 };
let forInLoop = () => {
    for (const property in object) {
        console.log(`${property}: ${object[property]}`);
      }
}

//for of loop example function
const array1 = ['a', 'b', 'c'];
let forOfLoop = () => {
    for (const element of array1) {
        console.log(element);
      }
}


// Build your own loop under here
let byol = () => {
    
}
