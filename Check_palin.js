let str="nayan";
let rev="";
   for(let i=str.length-1; i>=0; i--){
        rev+=str[i];
   }
   if(str ==rev){
       print.log(str,"is palindrome");
       
   }
   else{
       print.log(str,"isn't palindrome");
   }