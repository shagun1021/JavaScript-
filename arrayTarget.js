function sum(nums, target) {
      let arr=[];
      for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
          if(nums[i]+nums[j]===target){
          arr.push(i);
          arr.push(j);
          break;
      }
      }
}
      return arr;
  };


  let nums=[1,6,3,6,8,1];
  let target=2;
  let x=sum(nums,target);
  console.log(x);