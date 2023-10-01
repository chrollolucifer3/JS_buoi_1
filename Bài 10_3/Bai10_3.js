let M, N;
do {
    N = parseInt(prompt("Nhập vào N: " ));
    M = parseInt(prompt("Nhập vào M: "));
    if(N>M){
        console.log("N phải nhỏ hơn M, yêu cầu nhập lại!");
    }
} while (N>M);

let k = parseInt(prompt("Nhập vào k: "));
let sum = 0;
for (let i = N; i <= M; i++){
    if(i % k ==0){
        sum += i;
    }
}

console.log("Tổng các số chia hết cho k trong khoảng từ "+  N +" đến " + M + " là: " + sum);