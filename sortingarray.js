let arr=[2,8,9,1,3,7,6,5,0];

for(let i=0;i<arr.length-1;i++){
      for(let j=i+1;j<=arr.length;j++){
      if(arr[i]>arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp
      } 
}

}
console.log(arr)