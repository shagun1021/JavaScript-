// ForEach loop 
console.log("foreach")
let arr=[1,55,82,1,2,76,99,6,4,88,55,43,76,37,85];
arr.forEach(function (a){
      console.log(a);
})

// ForOf loop  => Array
console.log("forof")
let arr2=[12,55,82,1,2,76,99,6,4,88,55,43,76,37,85];
for(f of arr2){
      console.log(f);
}

// Forin loop  => objects
console.log("forin")
let obj={
      name:"shagun",
      age:20
};

for(f in obj){
      console.log(f + ":" +obj[f]);
}