let str="nayan";
let rev="";
   for(let i=str.length-1; i>=0; i--){
        rev+=str[i];
   }
   if(str ==rev){
       console.log(str,"is palindrome");
       
   }
   else{
       console.log(str,"isn't palindrome");
   }