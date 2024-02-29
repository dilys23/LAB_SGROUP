// Ghép 2 chuỗi với nhau 
const a = ['a', 'b', 'c'];
const b = [1, 2, 3];
const mergedArray = a.concat(b);
console.log(mergedArray);

// tìm số chẵn trong mảng
// hàm every yêu cầu tất cả các phần tử trong mảng phải thỏa yêu cầu
const data1 = [1, 2, 3, 4, 5];
const allEven = data1.every(num => num % 2 === 0);
console.log(allEven ? "Yes" : "No"); 

// Tìm số có chia hết cho 2 trong mảng // hàm some chỉ cần 1 phần tử thỏa yc là đúng
const data2 = [1, 1, 3, 1, 5];
const someEven = data2.some(num => num % 2 === 0);
console.log(someEven? "Yes" : "No"); 

// lọc ra tất cả các số dương trong mảng
const data3 = [1, 2, 3, 4, -5];
const positiveNumbers = data3.filter(num => num > 0);
console.log(positiveNumbers); 

// tìm vị trí của số dương đầu tiên trong mảng
const data4 = [-1, 2, 3, -4, -5];
const firstPositive = data4.find(num => num > 0);
if (firstPositive) {
  const index = data4.indexOf(firstPositive);
  console.log(`${index} ${firstPositive}`); // 1 2
} else {
  console.log('No result');
}
//in ra những số chia hết cho 5
const data5 = [1, 5, 10, 15, 20];

data5.forEach(number => {
  if (number % 5 === 0) {
    console.log(number);
  }
});
// tìm vị trí của số 2 đầu tiên và số 2 cuối cùng trong mảng
const data6 = [-1, 2, 3, 4, 2, 6];

const firstIndex = data6.findIndex(num => num === 2);
const lastIndex = data6.lastIndexOf(2);

if (firstIndex !== -1 && lastIndex !== -1) {
  console.log(`${firstIndex} ${lastIndex}`);
} else {
  console.log('No result');
}

const data7 = ['A', 'B', 'C'];

console.log(data7.join(', '));

// in ra mảng trị tuyệt đối của các num từ mảng ban đầu
const data8 = [2, -1, -8];
const newData = data8.map(num => Math.abs(num));
console.log(newData);
