// const lookUpProfile = (arr, name, prop) => {
//   const contact = arr.find((contact) => contact.firstName === name);

//   if (contact) {
//     if (contact.hasOwnProperty(prop)) {
//       return contact[prop];
//     } else {
//       return "No such property";
//     }
//   } else {
//     return "No such contact";
//   }
// };
// console.log(lookUpProfile(contacts, "Akira", "likes"));

// const discountProducts = (arr) => {
//   arr.map((product) => {
//     if (product.quantity > 40) {
//       return { ...product, price: product.price * 0.6 };
//     } else if (product.quantity > 20) {
//       return { ...product, price: product.price * 0.8 };
//     } else {
//       return product;
//     }
//   });
// };
