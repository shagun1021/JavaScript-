let customer=[
      {
            name:"honey",
            age:18,
            gender:'m'

      },
      {
            name:"shagun",
            age:20,
            gender:"f"
      },
      {
            name:"ishu",
            age:45,
            gender:'m'

      },
      {
            name:"bhumi",
            age:32,
            gender:"f"
      },
      {
            name:"chotu",
            age:61,
            gender:'m'

      },
      {
            name:"harsh",
            age:16,
            gender:"m"
      },
      {
            name:"ajay",
            age:35,
            gender:'m'

      },
      {
            name:"priya",
            age:37,
            gender:"f"
      }
];

let age10_25=[],age26_40=[],age41_65=[];
for(person of customer  ){
      if(person.age>=10 && person.age<=20)
            age10_25.push(person);
      
           else if(person.age>=21 && person.age<=40)
            age26_40.push(person);
      
            if(person.age>=41 && person.age<=65)
            age41_65.push(person);
}

console.log("age 10 to 25 customers are ");
console.log(age10_25);

console.log("age 26 to 40 customers are ");
console.log(age26_40);

console.log("age 41 to 65 customers are ");
console.log(age41_65);


