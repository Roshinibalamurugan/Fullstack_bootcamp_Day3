/*
//                                                     PURE FUNCTION 
//                                         -always return same o/p for same i/p
function add(a,b){
    return a+b
}
console.log(add(2,4))  //6
console.log(add(5,6))  //11


// with global variable
let global1=0
function add1(a,b){
    global1++
    return a+b
}
console.log(add1(2,4))  //6
console.log(add1(5,6))  //11




//                                                    IMPURE FUNCTION
function add2(a,b){
    return Math.random() + a+b
}
console.log(add2(2,4))  //6.6688141313766875
console.log(add2(5,6))  //11.700832610646746




//                                                     CLOSURES IN JS
//              - it is a function that returns a function
//              - here a varaiable is assigned with a function call then that variable is called as function to output assigned function 
//              - to achive persitence or to store or to preserve
//              - mostly used for memoisation
function closuredemo(){
    let t=0;
    return ()=>{
        t++
        console.log(t);
    }
}
const storeclosure = closuredemo()
storeclosure()  //1
storeclosure()  //2
storeclosure()  //3
storeclosure()  //4




//                                                MEMOIZATION USING CLOSURE
//  - optimization technique where the result of a function call is stored (cached) so that if the same input is encountered again, the cached result is returned instead of recalculating it.
function closuredemo2() {
    let t = {};       // Initialize as an empty object i.e key value pair
    return (val) => {
        if (val in t) {
            console.log(t[val]);
            return t[val];
        }
        let m = val * 5;
        t[val] = m;
        return m;
    };
}

const storeclosure2 = closuredemo2();
console.log(storeclosure2(10)); // Outputs 50
console.log(storeclosure2(20)); // Outputs 100
console.log(storeclosure2(10)); // Outputs 50 (from cache)

*/


//                                                       LOCAL STORAGE
//      - used to  store some data in client machine
//      - to achive persistence | - it is only for single system
//      - functions -> setItem & getItem

localStorage.setItem("getBack",2500)  // to check => inspect -> application -> localstorage

console.log(localStorage.getItem("getBack"))  // 2500


//     Assignment 1  how many times browers is reloaded using local storage

// Check if the "reloadCount" key exists in localStorage
if (!localStorage.getItem("reloadCount")) {
    // Initialize "reloadCount" if not present
    localStorage.setItem("reloadCount", 0);
}
let reloadCount = parseInt(localStorage.getItem("reloadCount")) + 1;
localStorage.setItem("reloadCount", reloadCount);
console.log(`The browser has been reloaded ${reloadCount} times.`);

//method 2
let c = localStorage.getItem("getcount")?localStorage.getItem("getcount"):0
console.log(c)
localStorage.setItem("getcount",++c)

