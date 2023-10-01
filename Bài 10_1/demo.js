
let dem = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 || i % 7 == 0) {
        dem++;
    }
}

console.log("Số lượng số chia hết cho 3 hoặc 7 trong khoảng từ 1 đến 100 là: " + dem)