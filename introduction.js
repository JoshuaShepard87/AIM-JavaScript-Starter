const axios = require('axios');
const si = require('systeminformation');
const fs = require('fs');
// variables


let x = 5;
let y = 4;

var string = 'Hello';
const world = 'World';



// //functions 

function helloWorld(string, world) {
    return string + ' ' + world;
}

let math_add = (x, y) => {
    return x + y;
}

let math_subtract = (x, y) => {
    return x - y;
}

// console.log(helloWorld(string, world));

// console.log("The value of math_add = ", math_add(x,y));

// console.log("The value of math_add = ", math_add(4,4));

// console.log("The value of math_subtract = ", math_add(8,x));


// lets try some javascript coding together as a group
// lets come up with two new variables (a and b) and give them values:

// lets create two functions (one being an arrow function) to multiply and divide the values:


//let's now throw in new function that can add,subtract, multiply, or divide using three variables (HINT: we are adding three numbers together instead of 2 using variables):





//we can even get responses back from an internet server using a thing called REST (Representational State Transfer)

let get1Fact = async () => {
    axios.get('https://catfact.ninja/fact')
    .then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.error(error);});
}

// get1Fact();

// or we can even get a lot of catfacts back from our cat facts api


let getAllFacts = async () => {
    axios.get('https://catfact.ninja/facts')
    .then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.error(error);});
}

// getAllFacts();

//we can even do things with javascript to get information about our computer systems

// si.cpu().then(data => {
//     console.log(data);
// }).catch(error => console.error(error));


//we even have the power to write and read files with JavaScript

const content = "Life is fragile and temporary. The faces of today quickly become the faces of the past. Sorrow, pain, and anger... it all fades-except love. Love is forever and there after, even when we've fallen to our graves. ― Lee Argus"
let newContent = "";

let read = () => {
    try {
        fs.writeFileSync('qoutes.txt', newContent);    
    } catch (error) {
        console.error(error);
    }
}

//read();



const appendContent = "\nFour score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this. But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth. - Abraham Lincoln";

let append = () => {
    fs.appendFileSync('quotes.txt', appendContent, error => {
        if (error){
            console.error(error);
            return;
        }
    console.log("done appending new content!");
    });
}

//append();




// now lets read a file:

// let name =  async () => {
//     try {
//         let data = await fs.readFileSync('pride&prejudice.txt', {encoding: 'utf-8'});
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// name();


// Even with all this power there is something to know!!!! JavaScript is weird sometimes....

// console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());

//Why did we get this result?

//lets look at what  + 'a' does in the console

// console.log(+ 'a');

/** 
 * +'a' resolves to NaN ("Not a Number") because it coerces a string to a number, while the character a cannot be parsed as a number.
    To lowercase it becomes banana.
Adding NaN to "ba" turns NaN into the string "NaN" due to type conversion, gives baNaN. And then there is an a behind, giving baNaNa.
*/

// lets see if that is true!

// console.log(('b' + 'a' + + 'a' + 'a'));

//Thats baNaNas!


// lets look at this example an array that is equal to not array!

//console.log([] == ![]);

/*
The explanation:
The abstract equality operator converts both sides to numbers to compare them, and both sides become the number 0 for different reasons.
 Arrays are truthy, so on the right, the opposite of a truthy value is false, which is then coerced to 0. 
 On the left, however, an empty array is coerced to a number without becoming a boolean first, and empty arrays are coerced to 0, despite being truthy.
 */


// here is a really weird one!

//console.log(1 < 2 < 3);

//console.log(3 > 2 > 1);

// how about this one?
//let weirdNumber = 0.1 + 0.2 == 0.3
//let weirdAnswer = 0.1 + 0.2
//console.log("0.1 + 0.2 == 0.3 = ", weirdNumber);

// So what is the correct answer then?

//console.log("the answer to 0.1 + 0.2 == ", weirdAnswer);

//But Why????

/*  The constants 0.2 and 0.3 in your program will also be approximations to their true values.
    It happens that the closest double to 0.2 is larger than the rational number 0.2 but that the closest double to 0.3 is smaller than the rational number 0.3. 
    The sum of 0.1 and 0.2 winds up being larger than the rational number 0.3 and hence disagreeing with the constant in your code. */


// What about that sort algorithm we saw earlier?
//let numbers = [1,3,5,55,68,234,976554,234211,12235456,22,667,442,0];

//console.log("\nOur array of numbers is : ", numbers);
//console.log("when we sort them we get: ", numbers.sort().toString());

// Any idea why we are getting numbers that are larger than the rest first? 

// In JavaScript, the default behavior of the sort function often converts elements into strings, and then compares the sequence of UTF-16 code.

// if we wanted to see this function sort correctly we need to compare our array values into something that can be compared by taking the first value of our array and comparing it to our next value like this:

// let sortNumbers = numbers.sort((a, b) => {
//     return a - b;
// });

// console.log("when we use the sort function we can see that our array is properly sorted: ", sortNumbers.toString());