// const products = document.getElementById("cartItemsList");

// /* get basket items from JSON */
// class Basket {
//     async cartItems() {
//         try {
//             let result = await fetch('https://raw.githubusercontent.com/mspanish/playground/master/jessica.json')
//             let data = await result.json()
//            // return data
            
//            /* destructuring data */ 
//          let basketItems = data.basket.productList
//             basketItems = basketItems.map(item =>{
//             const price = item.price
//             const{id,name,shortDescription,category,availability} = item.product
//             const breed = item.product.variationType
//             const quantity = item.quantity
              
//             return {price,id,name,shortDescription,category,availability,quantity,breed}
//             })
//             return basketItems 
            
//         } catch (error) {
//             console.log(error)  
//         }
//     }
// }
// /* Display stuff from the basket */
// class Display {
//     displayBasket(basket) {
//     //console.log(basket)
//          let result = ""
//         basket.forEach((item)=>{
//         result += `
//         <li>
//         id : ${item.id}
//         name: ${item.name}
//         price: ${item.price}
//         availability: ${item.availability}
//         category : ${item.category}
//         quantity : ${item.quantity}
//         shortDescription : ${item.shortDescription}
//         </li>
//         `})
//         cartItemsList.innerHTML = result 
//     }
// }

// document.addEventListener("DOMContentLoaded", ()=>{
//     const basket  = new Basket()
//     const display = new Display()

//     basket.cartItems().then(basket => display.displayBasket(basket))
// })
