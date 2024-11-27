- 2 Types of Code
	- Async
	- Sync
- Aynsc code wo code hota hai jo thodi der baad chalega

# SetTimeOut Function
- The setTimeOut() method calls a function after a number of milliSeconds.
- The setTimeOut() execute a block of a code after a specified time.
- The method execute the code only once.
- SetTimeOut() is an asynchronous function, meaning that the timew function will not pause the execution of other function in the execution's stack.
-Syntax
```typescript
setTimeout(function, milliseconds);
```

### Example
```typescript
setTimeout(function () {
  console.log("This will execute later");
}, 3000);
```

# Callback function
- Let suppose apne fb per userId and pw daala and login kiya and userId and pw apna backend se db me gaya and ishka jo response hoga wo Frontend ko callback function ke roop me milega.

- suppose aapse kaha cheese lekar aao . appko cheese lane me 2 sec ka time laga
```typescript
function getCheese(callback) {
  setTimeout(() => {
    const cheese = "🍕";
    console.log("here is cheese ", cheese);
    callback(cheese);
  }, 2000);
}

// mene getCheese function ko cheese lane beja hai. jab ishe cheese mil jaega tab
// ye function aapko callback karega

getCheese((cheese)=>
{
    console.log("got the cheese", cheese)
})
```

# CallBack Hell
- Let suppose apko pizza banana hai. Pizza banana ke liye apko dought chaiye and dought banana ke liye cheese chaiye
```typescript
function getCheese(callback) {
  setTimeout(() => {
    const cheese = "🍕";
    console.log("here is cheese ", cheese);
    callback(cheese);
  }, 2000);
}

// Let suppose dought lane me bhi 2 sec lagege
// callback function bta raha hai ki dought ban chuka hai

function makeDought(cheese, callback) {
  setTimeout(() => {
    const dought = cheese + "dought";
    console.log("Here is the dought", dought);
    callback(dought);
  }, 2000);
}

function pizzaMake(dought, callback) {
  setTimeout(() => {
    const pizza = dought + "pizza";
    console.log("Here is Pizza");
    callback(pizza);
  }, 2000);
}

getCheese((cheese) => {
    console.log("got the cheese", cheese);
    makeDought(cheese, (dought) => {
      console.log("got my dought", dought);
      pizzaMake(dought,(pizza)=>{
        console.log("got the pizza", pizza)
      })
    });
  });
```
- yaha ek callback ke ander dusri callback hai, dusri callback ke ander theesri call back hai.
	 ishe hi hum callback hell kahte hai.
- Ish Problem ko hum Promise ki help se karege.

# Promise
- A promise is good way to handle asynchronous operations. It's used to find out if the async
	operation is successfully completed or not.
- A promise may have 3 Stage
	- Pending
	- Fulfilled
	- Rejected

```typescript
function getCheese()
{
  setTimeout(()=>
  {
    const cheese='cheese'
    return cheese // SetTimeOut fumction kuch return nahi karta hai
      // to return statement likhne ki jarurat nahi hai 
  },2000)
  // Yaha se by defalut undifined return hoga
}
```
- To create a promise object, we use the promise() constructor.
```typescript
let promise=new Promise(function(resolve, reject)){
  // do something
}
```
- Promise constructor take a function as an argument. The function also accept two function 
 resolve() and reject().
- If the promise return successfully , the resolve() function is called. And, if an error occurs, 
	the reject() function is  called.

## Method in Promise
- **then() method -** The then() method is used with the callback when the promise is successfully fulfilled/resolved
- **catch() method-** The catch() method is used with the callback when the promise is rejected or if an error occur.
- **finally() method-** The finally() method get executed when the promise is either resolved successfully or rejected.

```typescript
const ticket = new Promise(function (resolve, reject) {
  const isBoarded = false;
  if (isBoarded) {
    resolve("You are not in the flight");
  } else {
    reject("Your flight has been cancelled");
  }
});

// data me mujhe resolve ka You are not in the flight ye data mila hai
// same in catch me mujhe reject ka data milega

ticket
  .then((data) => {
    console.log("Waooo", data);
  })
  .catch((data) => {
    console.log("Oh no", data);
  }).finally(()=>{
    console.log("I will always executed")
  });

  // Output - > Oh no Your flight has been cancelled
	// I will always executed
  
```
- Callbackhell Example using Promise
```typescript
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

getCheese()
  .then((cheese) => {
    console.log("Here is the cheese", cheese);
    return makeDought(cheese); // Ye function promise return karta hai
  })
  .then((dought) => {
    console.log("Here is the dought", dought);
    return makePizza(dought);
  })
  .then((pizza) => {
    console.log("Here is Pizza", pizza);
  });

// Yaha resolve ho raha hai tabhi yaha mene .then() lagaya hai
```

## async await
```typescript
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

// Let suppose yaha koi bhi function reject ho gya to async await me hum
// try-catch se handle karege 
```

# Dom
- It's stand for Document object model.
- DOM ki help se hum HTML element(div/h1/etc) ko modify ya update kar sakte hai.

## Finding the HTML element
- Finding HTML element by Id: document.getElementById("id")
- Finding HTML element by tag name: document.getElementByTagName('p')
- Finding HTML element by class name : document.getElementByClassName('c')
- Finding HTML element by css selector : document.qerySelector('.container .random')
// Ishke ander css ki Tarah likhte hai query which means .container ke ander .random hai

## Modification
- Changing HTML content using innerHTML : document.getElementById(id).innerHTML=new HTML
- Changing HTML attributes value : 
	- document.getElementById('myImage').src='landscape.jpg';
	- document.getEelementById('p1').style.color='blue'
 
 
