const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
const titleCased = () =>  {
  return tutorials.map(words => words.split(' ').map(cap => 
    cap.charAt(0).toUpperCase() + cap.slice(1)).join(' '))
  }
  

//const titleCased = () => {
  //const cap = tutorial.split(" ")
  //cap.map(newtutorial => first[0].toUpperCase() + newtutorial.substring(1)).join(" ")
    //return newTutorial
//}

//const titleCased = tutorials => {
  //tutorials.map(function (element) {
   //const words = element.split(" ");
   // words.map((word) => {
    //  return word[0].toUpperCase() + word.substring(1);
   // }).join(" ");
////  })

//const titleCased = () => { 
  //const cap = tutorials
  //cap.map(newTutorial => newTutorial[0].toUpperCase(titleCased))
 // return titleCased 
//}
//create function that iretiates over first letter of each word on each line//
//use map to return new array that has all new words
//