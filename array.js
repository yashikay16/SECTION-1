const myarr=[255,'nice',73.355,true,console.log,[23,75]];
console.log(myarr.length);
console.log(typeof myarr);
 const movies=['avengers','flash','pushpa','war','jawaan','fastx','omg'];
// indexing
console.log(movies[2]);
// at() used for all types of indexex =ve and -ve
console.log(movies.at(-2));
console.log(movies.indexOf('flash'));
// slicing,works also for -ve
console.log(movies.slice(2,6));
console.log(movies.slice());
console.log(movies.slice(-4));

// adding new element
movies.push('shershaah'); 
// adds the element at the end of array
movies.unshift(' avatar');
// adds element at the start of the array
console.log(movies);
// removing elements
movies.pop(); 
// removes element from the end
// removes element from the start
movies.shift();
console.log(movies);
// splice- (start,no of elementsto be removed )
movies.splice(3,2);
console.log(movies);
// using spread operator we can perform all the above operations
console.log([...movies,'batman','batman1','batman3']);
// write 
console.log([...movies.slice(0,4), ...movies.slice(5)]);
