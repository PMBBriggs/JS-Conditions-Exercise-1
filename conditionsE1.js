//  alert ("hey!")

//  Conditionals Exercise 2
// if name 1 is longer than name 2 and name 3

 var name1 = "Samantha";
 var name2 = "Montaz";
 var name3 = "Derek";

 if (name1.length > name2.length && name1.length > name3.length){
    console.log(`${name1} is the longest name."`);

 } else if (name2.length > name1.length && name2.length > name3.length){
   console.log(`${name2} is the longest name.`);

 } else if (name3.length > name1.length && name3.length > name2.length){
   console.log(`${name3} is the longest name.`);

 } else if (name1.length === name2.length){
   console.log(`${name1} and ${name2} tie for the longest name.`);

} else if (name1.length === name3.length){
   console.log(`${name1} and ${name3} tie for the longest name.`);

} else if (name2.length === name3.length){
   console.log(`${name2} and ${name3} tie for the longest name.`);

} else (name2.length === name3.length && name2.length === name1.length && name3.length === name1.length);{
   console.log(`All three names, ${name1}, ${name2}, and ${name3}, are the same length`);
}

// can the comparison between two names at a time be done with an OR operator?
