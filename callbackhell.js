


const fun=(id,fn)=>{
            console.log("wating...");
      setTimeout(()=>{
            console.log("hello ",id);
            if(fn) fn();
      },2000)

}




fun('ONE',()=>{
      fun('TWO',()=>{
            fun('THREE');
      })    
})