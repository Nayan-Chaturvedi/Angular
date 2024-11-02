# Angular

- Angular is a framework for building UI.

**Note:** Hum UI HTML CSS se bhi generate kar sakte hai per hum yaha Angular framework ishliye use kar rahe hai taki hamare effort reduce ho jaye.

- You can create single web application.
- We can create reusable components.
- Angular MVC
  - Angular MVC ka matlab hai Model-View-Controller pattern ko client side pe implement karna. Angular ek front-end framework hai jo is pattern ko follow karta hai.
  - **Model** - ye data ko hold karta hai/ Yaha hum blueprint rakte hai.
  - **View** - UI elements ko represent karta hai, jaise HTML aur Angular templates.
  - **Controller** - Logic ko handle karta hai aur Model aur View ke beech interaction manage karta hai.
- Quicker development is possible less dependent on 3rd party library(Eg- routing, Validation etc). ye by-default availabe rahti hai angular me.

---
#ng 

- ng in Angular ek prefix hai jo Angular-specific cheezon ko represent karta hai jaise Angular ke directives aur functionalities.
 Ye Angular framework ka short form bhi samjha ja sakta hai.

# Project Structure

```javascript
my-angular-project/
├── node_modules/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   ├── assets/
│   ├── environments/
│   │   ├── environment.ts
│   │   ├── environment.prod.ts
├── angular.json
├── package.json
```