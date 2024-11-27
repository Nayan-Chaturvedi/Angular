# Ajax
- Ajax stands for Asynchronous JavaScript And XML
- AJAX is a mechanism for making partial page updates. It enables you to update sections of a page with data that comes from the server, avoid full page refresh.
- Ishki help se jo hame page chaiye wo page hi load hoga. jish karan se hamara loading time bach gya.
## Example-
- Let suppose mene youTube open kiya to ek baar youTube page load hoga. then fir mene explore option per click kiya youtube ke to abb full page load nahi hoga sirf explore page load hoga 

## How its work
![Pictorial Representation](https://images.javatpoint.com/images/ajax/howajaxworks.png)
- Jo hamare pass Browser hota hai ushke pass ek object hota hai XMLHttpRequest
- Jo bhi Request jaegi wo XmlHttpRequest ka use karke jaegi
- XmmlHttpRequest basically help karega request ko send karne ke liye aur data recieve karne ke liye.
- Ajax multiple time different different request bej sakta hai server ko. Aur ye sari request Asynchronus hoti hai
 koi bhi request dusri request ko block nahi karegi

## How to send request with AJAX to SERVER
```typescript
var request=new XMLHttpRequest();
// Pahle XMLHttpRequest Ka object banaege
request.open('GET','URL')
// let suppose hum open karna chahte hai request ko with some -
// - Parameter

// GET, PUT, POST, DELETE Yaha Http Method hai 
request.send();
// Hum data POST karege to send() ke ander data bej bhi skate hai
```
## Example
```typescript
about.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About</title>
</head>
<body>
    <h1>WELCOME TO ABOUT PAGE</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Consequuntur, accusamus, dicta alias a eligendi quod reprehenderit
          delectus facilis minus libero ipsum corrupti iusto officia mollitia
           architecto totam quidem qui optio.</p>
</body>
</html>
```

```typescript
index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <h1>WELCOME TO HOME PAGE</h1>
    <a href="about.html">About page</a>
	<div class="container"></div>
</body>
</html>
```
- Hum home page me jo a tag diya hai ushme hamne about.html ka link diya hai.
- Jaise hi me web page per link ko click karta hu to about.html ka pura data(h1 tag and p tag) load ho jaega 
- Ye synchronous approach hai.
- Hum chahte hai ki about ki information div container ke ander aa jaye

```typescript
about.html

Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Ipsa, saepe ullam! Suscipit ipsa voluptatum corrupti
  quisquam vero molestiae expedita reprehenderit!
```

```typescript
index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
    <script>
      function loadAboutInfrm() {
        // Call To Ajax
        var request = new XMLHttpRequest();
        request.open("GET", "about.html");
        // Jab req. ka resonse aa jaega server se
        // to hame listner bhi lagana padega

        // request ke pass ek property hai onreadystatechange
        request.onreadystatechange = function () {
          // call whenever state change
          // 4 is code which means the operation is complete
          // complete and successfull
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById('container').innerHTML=this.responseText
            // data print
          }
        };
        request.send();
      }
    </script>
  </head>
  <body>
    <h1>WELCOME TO HOME PAGE</h1>
    <a href="about.html">About page</a>
    <div id="container"></div>
    <button onclick="loadAboutInfrm()">Load About</button>
  </body>
</html>
```
