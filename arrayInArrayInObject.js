let students=[
      boys=[
            {
                  name:'honey',
                  
                  section:'a'     
            },

            {
                  name:'veer',
                  
                  section:'a'     
            },

            {
                  name:'yuvi',
                   
                  section:'b'    
            }
      ],

      girls=[
            {
                  name:'shagun',
                  
                  section:'a'     
            },

            {
                  name:'siya',
                    
                  section:'b'   
            },

            {
                  name:'sona',
                  
                  section:'b'    
            }
      ]
];

let secA=[],secB=[];

for(stu of students ){
      for(stu2 of stu){
            if(stu2.section=='a') secA.push(stu2);
            else secB.push(stu2);
      }
}

console.log(secA);
console.log(secB)