
     const input=document.getElementById("result");
     function appendvalue(value){
     if(input.value==0 && !isNaN(value)){
         input.value=value;
     }
     else{
         input.value+=value;
     }
 }
 function clearvalue(){
     input.value="";
     return;
 }
 function answer(){
     try{
     input.value=eval(input.value);
     }
     catch(error){
         input.value="error";
     }
     
 }