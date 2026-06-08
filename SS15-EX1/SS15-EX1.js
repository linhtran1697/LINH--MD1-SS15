// Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. 
// Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.
let numberS = [];
for ( let i = 0; i < 10; i++) {
    randomnumberS = Math.floor(Math.random() * 100);
    numberS.push(randomnumberS);
}
console.log(numberS); 
let count = 0
for (let i = 0; i < numberS.length; i++) {
    if (numberS[i] >= 10) {
        count++;
    }
}
console.log("Số lượng số nguyên lớn hơn hoặc bằng 10 là: " + count);