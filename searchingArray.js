let arr=[1,55,82,1,2,76,99,6,4,88,55,43,76,37,85];
const searchElement=76;
let inxarr=[],flag=0;
for(let i=0;i<=arr.length;i++){

      if(arr[i]==searchElement){
            console.log("element "+searchElement+" is in "+i+" index");
            flag=1;
            inxarr.push(i);     
      }
      
}
if(flag==1){
      inxarr.forEach(function (a){
            console.log(a);
      })
      console.log(inxarr);
}
if(flag==0){
            console.log("element not found");  
}