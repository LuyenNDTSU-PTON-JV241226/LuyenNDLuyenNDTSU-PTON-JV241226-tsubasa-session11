let x = prompt("hãy nhập tên bạn!!");
let y = prompt("vui lòng nhập mật  khẩu");
if (x ==="ADMIN" && y === "TheMaster") {
    alert("Welcome");
}else if (x ==="ADMIN" && y === "null"){
    alert("Cancelled");
}else {
    alert("Wrong password");
}

