
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
//1. Filter the list of inventors for those who were born in the 1800's
  const fifteen = inventors.filter(function(inventor) {
    if (inventor.year >= 1800 && inventor.year < 1900) {
      return true;
    }
  });
  
  console.table(fifteen);

//2. Give us an array of the inventors first and last names
  const fullNames = inventors.map(inventor => {
    return inventor.first + ' ' + inventor.last;
    // or `${inventor.first} ${inventor.last}`;
  })
  console.table(fullNames);


//3. How many years did all the inventors live?
  const totalYears = inventors.reduce((total, inv) => {
    return total + (inv.passed - inv.year);
    // the last parameter in reduce(), '0', is the initial value of total. If not provided, total will  be undefined.
  }, 0);
  console.log(totalYears);

  //..................................................................................

  var animals = [
    { name: "Jason", species:"rabbit"},
    { name: "Jessica", species:"dog"},
    { name: "Jacky", species:"owl"},
    { name: "Luke", species:"fish"},
    { name: "Junior", species:"rat"},
    { name: "Thomas", species:"cat"}
]
//4. Filter this array to return just the dogs.

var dogs = animals.filter(function(animals){
    return animals.species == "dog";
});

console.log(dogs);

//5. Use map function to return all the species.

var types = animals.map(function(animals){
    return animals.species;
});
console.log(types);

//6. Get an Array with only contain names of first three values.
var threeNames = animals.slice(0, 3).map(function(animal) {
    return animal.name;
});

console.log(threeNames);


//..........................................................................


const coordinates = [
    { x: 1, y: 2 }, 
    { x: 2, y: 3 }, 
    { x: 3, y: 4 }
];

//  Q) You have an array of objects with x and y coordinates and you want to get the sum of x coordinates
const sum_X = coordinates.reduce(function(sum, coordinate) {
    return sum + coordinate.x;
}, 0);

console.log(sum_X);


//..............................................................................


const laptop = [
    {
      model: 'Macbook Pro',
      price: 20000,
    },
    {
      model: 'Macbook Air',
      price: 15000,
    },
    {
      model: 'Hp lite',
      price: 5000,
    },
  ];


//Q) Write a code to print all model with their price in console.
//  e.g format should be :- Macbook Pro price is 20000

laptop.forEach(function(item) {
    console.log(item.model + ' price is ' + item.price);
});

