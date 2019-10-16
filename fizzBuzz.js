const fizzBuzz = (begin, end) => { 
 const word = (a) => { 
 if (((a % 3) === 0) && ((a % 5) === 0)) { 
 return 'FizzBuzz'; 
 } 
 else if ((a % 3) === 0) { 
 return 'Fizz'; 
 } 
 else if ((a % 5) === 0) { 
 return 'Buzz'; 
 } 
 else return a; 
 } 
 let b = begin; 
 for (; b <= end; b += 1) { 
 console.log(word(b)); 
 } 
};
