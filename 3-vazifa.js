
var num1= +prompt("birinchi sonni kiriting!")
var num2= +prompt("ikkinchi sonni kiriting!")
var num3= +prompt("uchinchi sonni kiriting!")


if (num1 < num2 && num1 > num3 || num1 > num2 && num1 < num3 ) {
   alert("o'rta qiymat "+ num1 )
}else if( num2 < num1 && num2 > num3 || num2 > num1 && num2 < num3){
   alert("o'rta qiymat "+ num2 )
}else if(num3 < num1 && num3 > num2 || num3 > num1 && num3 < num2){
   alert("o'rta qiymat " +num3 )
}
else{
    if(!num1 && !num2 && !num3){
      alert("hammasi son emas")
   }
  else if(!num1 && !num2){
      alert("num1 va num2 son emas")
   }
       else if(!num2 && !num3){
      alert("num2 va num3 son emas")
   }
  else if(!num1 && !num3){
      alert("num1 va num3 son emas")
   }
   else if(!num1){
      alert("num1 son emas")
   }
   else if(!num2){
      alert("num2 son emas")
   }
 else if(!num3){
      alert("num3 son emas")
   }
    else{
      alert("nimadur hato ketti")
   }
}

