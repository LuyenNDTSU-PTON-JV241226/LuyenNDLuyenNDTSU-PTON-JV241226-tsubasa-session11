let x = prompt("hãy nhập năm mà bạn muốn");

if (Number.isInteger(x/4) && Number.isFinite(x/100)) {
        alert ("đây là năm nhuận");
}
    else if (Number.isInteger(x/100) && Number.isFinite(x/400)){
        alert ("đây KHÔNG PHẢI năm nhuận");
    }
    else if (Number.isInteger(x/4) && Number.isInteger(x/100)){
        alert ("đây là năm nhuận");
    }
