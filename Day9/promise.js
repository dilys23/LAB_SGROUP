/**
 * Thaats bai -> reject()
 * trang thai
 * pending (cho) resolve va reject chua duoc goi
 * fullfiled: resolve()
 * reject: reject()
 * mot promise co nhieu then
 */

const myPromise = new Promise((resolve, reject) => {
    if (1 > 0) resolve("Helo Le ");
    else reject();
});

myPromise
    .then((param) => {
        console.log(param);
        // return "xong then 1 den then tiep theo";
        return new Promise(function (resolve) {
            setTimeout(() => {
                resolve("promise 1");
            }, 1500);
        });
    })
    .then((param) => {
        console.log(param);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("promise 2");
            }, 1500);
        });
    })
    //   .then((param) => {
    //     console.log(param);
    //     return "Khoai ne";
    //   })

    .then((param) => {
        console.log(param);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("bug bug bug");
            }, 2500);
        });
    })

    .catch((param) => {
        console.log(param);
    })
    .finally(() => {
        console.log("Thuc hien finally");
    });

// const promise = Promise.resolve("yeah yeah").reject("Lỗi rồi")
//   .then((param) => {
//     console.log(param);
//   })
//   .then((param) => {
//     console.log("Lỗi rồi");
//   })
//   .catch((param) => {
//     console.log();
//   });

// const api = 'https://jsonplaceholder.typicode.com/todos/1'
// fetch(api).then((response) => {
//     console.log(response.json());
//     return response.json();
// }).then((data) => {
//     console.log('Nhan duoc', data)
// })