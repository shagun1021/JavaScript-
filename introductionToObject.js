// name of object-> person 
// object -> key+value


let person={
      name:"shagun",
      age:20,
      phoneNo:123456789,
      city:"Bulandshahr"
}; 


// we can acess object member by using for in loop ...
console.log(person); 
// output --> { name: 'shagun', age: 20, phoneNo: 123456789, city:
//'Bulandshahr' }
for(temp in person){
       console.log(temp+" : "+person[temp]);
      // output--> 
      // name : shagun
      // age : 20
      // phoneNo : 123456789
      // city : Bulandshahr
      
}



