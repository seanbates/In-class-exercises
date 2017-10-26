console.log("Hello");

//arrays and for loops
let bucketList = ["Skydive", "Travel the World", "Go to Space"];
console.log(bucketList[2]);

for (let i = 0; i < bucketList.length; i++) {
  console.log(bucketList[i]);
}

//nested for loop and arrary comparison
let movieList1 = ["The Godfather", "The Godfather Part 2", "Goodfellas", "Fight Club", "The Usual Suspects"];
let movieList2 = ["The Dark Knight", "The Empire Strikes Back", "Interstellar", "The Usual Suspects", "La La Land"];
 for(i = 0; i < movieList1.length; i++) {
   for (j = 0; j < movieList2.length; j++) {
     if (movieList1[i] == movieList2[j]) {
       console.log(movieList1[i]);
     }
   }
 }

//while loop and compound interest formula
let balance = 10000;
let years = 0;

while (balance < 1000000) {
  balance += balance*0.075;
  years++;
}

console.log(years);

//forEach iterator with arrow function
movieList1.forEach(movie => console.log(" - " + movie));

//filter iterator
let newMovieList = movieList1.filter(movie => movie.slice(0,3) == "The");
console.log(newMovieList);
