let string = "extravaganza";
console.log(string.slice(8,12));


const food ="The quick fox jumps over the lazy dog";
const index = 4;
const stringToInsert ="eat";
const newFood = food.slice(0,4)+stringToInsert+food.slice(4);
console.log(newFood);

const story = "The quick brown fox jumps over the lazy dog";
const string1 = "the "
const string2 = "brown"
const storyLower = story.toLowerCase();
console.log (storyLower);
const count1 = storyLower.split(string1.toLowerCase()).Length-1;
const count2 = storyLower.split(string2.toLowerCase()).Length-1;
console.log('The string "the" appear &{count1}times');
console.log('The string "brown" appear &{count2}times');

const strings1 ="The pupils are reading in the library";
const strings2 = "The child was sitting on the table before it fell";
const text1 = "are"
const text2 = "sitting"
const result1 = string1.toLowerCase().includes(text1.toLowerCase());
const result2 = string2.toLowerCase().includes(text2.toLowerCase());
console.log(result1);
console.log(result2);

let string3 = "Wonderful";
const uppercase = string3.toUpperCase();
console.log(uppercase);

let string4 ="Amazing";
const lowercase = string4.toLowerCase();
console.log(lowercase);

let title= "A wonderful world";
let newTitle = title.toLowerCase();
let split = newTitle.split(" ");
split.forEach((word, index)=>{
    split[index] = word.charAt(0).toUpperCase() + word.slice(1)
})
console.log(split.join(" "));



