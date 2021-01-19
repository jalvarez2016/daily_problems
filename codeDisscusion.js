/*
Problem: Given a base url and an params, construct a valid url with query params. 
Things to consider: For this use case, assume all characters are valid, and that the object
may contain values that are integers, strings
Example: 
baseUrl www.example.com
params {
  first: "marshall",
  last: "mathers"
}
www.example.com?first=marshall&last=mathers
function constructUrl(baseUrl, params) {
  // code
}
Challenge: Assume that some of the values in params are arrays. How would you handle this use case?
Example:
baseUrl www.example.com
params {
  first: "marshall",
  last: "mathers",
  tracks: [3,4,6,7]
}
www.example.com?first=marshall&last=mathers&tracks=3,4,6,7

p

Input, a string and an object. Construct and return a string that contains 
queries using the objects keys and values added onto the end of the orginal string
passed in as a parameter.

e

Input = 
    "www.google.com",
    obj = {
        first = "koala"
        second = "bear"
    }
Output = "www.google.com?first=koala&second=bear"

d
    object, array(from object.keys?)
a
    1. Add a "?" onto the string
    2. use Object.entries() and string interpolation to further build on the base url in a for of loop
    3. return the newly constructed url
c
*/


function constructUrl(baseUrl, params) {
    baseUrl += "?";
    const query = [];
    for(let [key, value] of Object.entries(params)){
        query.push(`${key}=${value}`);
    }
    return baseUrl += query.join("&")
}

const baseUrl = "www.example.com";
const params = {
  first: "marshall",
  last: "mathers",
  tracks: [3,4,6,7]
}

console.log(constructUrl(baseUrl, params));

const randNum = (low, high) => {
  return Math.floor((Math.random() * (high - low)) + low);
}
console.log(randNum(18,23));
//siren 20
//witch 22
//Druid 22
//Reaper 19