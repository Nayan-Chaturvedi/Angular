function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "cheese";
      console.log("here is cheese");
      resolve(cheese);
    }, 2000);
  });
}
function makeDought(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dought = "dought" + cheese;
      console.log("Here is dought");
      resolve(dought);
    }, 2000);
  });
}

function makePizza(dought) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = "pizza" + dought;
      console.log("Here is Pizza");
      resolve(pizza);
    }, 2000);
  });
}

// Async keyword se ish function ke ander ki liye ko
// hum aysnc bna sakte hai
async function orderPizza() {
  //yaha hame getcheese method per await laga diya hai
  // which means jab tak getCheese method na chale tab
  // tak niche ka code nahi chalega
  const cheese = await getCheese();
  const dough = await makeDought(cheese);
  const pizza = await makePizza(dough);
}

orderPizza();

// getCheese()
//   .then((cheese) => {
//     console.log("Here is the cheese", cheese);
//     return makeDought(cheese); // Ye function promise return karta hai
//   })
//   .then((dought) => {
//     console.log("Here is the dought", dought);
//     return makePizza(dought);
//   })
//   .then((pizza) => {
//     console.log("Here is Pizza", pizza);
//   });
