let kg = +prompt("hãy nhập vào cân nặng của bạn(kg)(");
let m = +prompt("hãy nhập vào chiều cao của bạn(m)");
let bmi = kg/m**2;
if(bmi < 18.5) {
    alert("cân nặng thấp(gầy)");
}else if(18.5 < bmi && bmi < 24.9){
    alert("bình thường");
}else if(25 <= bmi && bmi < 29.9){
    alert("thừa cân, tiền béo phì");
}else if(30 < bmi && bmi < 34,9){
    alert("thừa cân, béo phì độ I");
}else if(35 < bmi && bmi < 39,9){
    alert("thừa cân, béo phì độ II");
}else if(bmi >= 40){
    alert("thừa cân, béo phì độ III");
}