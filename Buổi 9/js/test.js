let arr = [2, 4, 6, 8, 10];
let result = 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 4 === 0) {
        result *= arr[i];
    }
}
console.log(result);