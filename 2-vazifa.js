var a = 0
var b = 18

var yosh = +prompt('yoshingizni kiriting')
if (yosh == 0) {
   alert('siz hali tugilmadiz')
} else if (yosh <=18) {
   alert("yoshsz hali o'qishingiz kerak");
}else if (yosh > 18 && yosh <= 50) {
   alert('siz hali ishlashingiz kerak');
}else if(yosh > 50 && yosh <= 59){
   alert("yaqinda pensiyaga chiqasz")
}else if (yosh > 59 && yosh <= 150) {
   alert("pensionerga o'xshaysiz, agar tirik bo'lsangiz")
}else{
   alert("nimadur no'to'g'ri ketib qoldi")
}