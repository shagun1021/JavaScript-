let arr=[5,4,3,2,1,0];
let tail=arr.length-1;
for(let head=0;head<=(arr.length-1)/2;head++,tail--){
      let temp=arr[head];
      arr[head]=arr[tail];
      arr[tail]=temp;
      
}
console.log(arr);