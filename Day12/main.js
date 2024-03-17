const url = "https://jsonplaceholder.typicode.com/todos/1"
fetch(url).then((res) => {
    console.log(typeof res.json())
    return res.json()
}).then((data => {
    console.log(data)
}));

// json là một  quy chuẩn để hầu hết các ngôn ngữ đềuu hiểu được 
/**
 * json là một chuỗi mà tất cả các ngôn ngữ đều học được 
 * number, string, null, boolean mấy biến nguyên thủy 
 * 
 */
const a = '1'
const b = '"hello"'
const c = 'false'

// object
const array  = '[1, "Khoai ne", false, true, null ]'// đã là json thì mảng ko được viết dư ,]

const object = '{"key1": "Khoai ne", "key2: 2312}' // ko được dư 
/**
 * mã hoá (Encode): type javascript -> JSON : JSON.stringify()
 * Giải mã (Decode) : JSON -> type javascript : JSON.parse(value)
 * json là 1 chuỗi nên nhẹ và dễ hiểu 
 * fetch là một promise nên nó sẽ return thành 1 promise
 */
const ab = 1
const abc = [1, 2, 3, 4, 5,]
console.log(abc)
const arrayCOPY = JSON.stringify(abc) // convert array to string
// const arrayCOPY = JSON.parse(array)
console.log(arrayCOPY)

function sFetch(param){
    return new Promise(() => {
        const request = new XMLHttpRequest();
        request.onreadystatechange = function() { // hàm được sinh ra khi mà request được thay đổi, khi mà nhân
        //   if (this.readyState == 4 && this.status == 200) {
        //     document.getElementById("demo").innerHTML =
        //     this.responseText;
        //   }
        // console.log(this.responseText)
            // resolve(this.responseText)
            if(this.readyState == 4 && this.status == 200) {
                resolve(request.responseText);
            }
            else if (this.readyState == 4 && this.status != 200) {
                reject ('Error!')
            }
            
        };
        request.open("GET", param);
        request.send();// send request lên http 
    })
}

sFetch(url).then((data)=>
{
   
    const listUser = JSON.parse(data)
    console.log(listUser)
}).catch(()=>{
    console.log("Nhan duoc loi")
})

// quy ước http status 

//async / await tạo 1 function bình thường thành 1 promise 
// giống như promise, nó biến sự bất đồng bộ của js thành ko đồng bộ 

// array là một object đặc biệt có key là đặc biệt là index

async function getData(url) {
    console.log(1)
    const  response  = await fetch(url)
    const data = await response.json()
    console.log(data)
    console.log(2)
}

getData(url)

fetch (url).then((res) => {
    return res.json()
})
.then((data) => {
    console.log(data)
});

// Destructuring

const array1 = ['Le', 'Khoai', 'Dilys', 'TD', 'hh', 'abc']
// const [name1, name2, name3, , name4, , name5] = array1
// mảng là key tự động là index, còn object phải đưa vô 
const user = 
{
    name: "dilys", 
    age : 20,
    hobby: "run", 
    device: 
    {
        book: "Peaceful", 
        price: 20
    }, 
    address : "DaLat"
}

const address1 = 
{
    province: "QuangNam", 
    distrint: ""
}
// const {name, age, hoby , device:{book}}= user; //
// nếu trùng tên 
// const {name: nameUser, age, device: {name: nameDevice}} = user;
const {name, age, address = "Quang Nam"} = user;

// Rest  parameter 

const [name1, ...arrayCoppy] = array1;
// arrayCoppy sẽ hiển thị mảng chứa các tên còn lại 
const numArray = [2, 4, 1, 5, 6, 3, 9]
numArray.sort(mySortFn)
function mySortFn(a, b){
    return a - b
}
const [num1, ...arrNum] = numArray;
console.log(numArray)

// spread ...
const merges  = [...array1, ...numArray]
console.log(merges)

const gop = {...user, ...address1}

// local storage 
localStorage.getItem("")
localStorage.setItem("username",user);
localStorage.setItem("Le",JSON.stringify(user));
// var username= JSON.parse(localStorage