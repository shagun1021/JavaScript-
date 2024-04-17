
const callback=(world)=>{
     setTimeout(()=>{
      world();
     },1000)
      
      console.log("hello");
}


callback(()=>console.log("world"))