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

# Angular Project Structure

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
# Explain

**node_modules**: Yeh folder saari dependencies aur packages ko contain karta hai jo Angular project ke liye required hain.

**src**: Yeh main folder hai jahan saari source code files hoti hain.

**app**: Yeh folder main application code ko contain karta hai, including components, services, and modules.

**assets**: Yeh folder images, fonts, aur static files ko store karta hai.

**environments**: Yeh different environment configurations ko handle karta hai (jaise development aur production).

**angular.json**: Yeh file project ka main configuration file hai, jisme build, serve, aur other Angular CLI commands ki settings hoti hain.

**package.json**: Yeh file project ka dependency manager hai, jo saari required packages ko list karta hai.

**tsconfig.json**: Yeh file TypeScript compiler ko configuration settings provide karta hai, jaise ki kaunsa TypeScript version use karna hai aur kaunsa code transpile(Ek language se doosri language mein code ko convert karna.) karna hai.

**package-lock.json**: package-lock.json file make sure karta hai ki har baar npm packages ke same versions use ho, taki project ki consistency aur integrity bani rahe. Yeh file exact versions of installed packages ko lock karta hai aur sub-packages ko bhi, taki aapka build process stable aur predictable rahe.

### In Short
- **node_modules**: Dependencies
- **src**: Source code
- **app**: Main application code
- **assets**: Static files
- **environments**: Configurations
- **angular.json**: Main config file
- **package.json**: Dependencies list
- **tsconfig.json**: TypeScript compiler settings
- **package-lock.json**: Exact versions of installed packages

# AOT(Ahead of Time) and JIT compiler
- AOT compilation build time per hota hai means  Compiles code before execution and jit me compilation run time par hota hai means Compiles code during execution.
---

# Component
- Component Angular ka main building block hai. 
**Component**: Yeh ek chhota part hota hai app ka jo specific functionality ko handle karta hai.

**HTML**: Yeh component ka structure define karta hai.

**CSS**: Yeh component ka styling define karta hai.

**TypeScript**: Yeh component ki logic aur behavior define karta hai.

## example-
- Ek header component jo website ka header dikhata hai.

- Ek login component jo login form handle karta hai.

# Standalone component

- Yeh component khud mein complete hota hai.
- isse bina kisi module mein import kiye directly use kar sakte hain.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.css'],
  standalone: true
})
export class StandaloneComponent {}
```
- Yahan standalone: true property se pata chalta hai ki yeh ek standalone component hai. Directly use kar sakte ho

---


# Angular Application Run Process

1. **Load index.html**: Browser pehle `index.html` load karta hai.
2. **Initialize Angular Framework**: Angular framework initialize hota hai.
3. **Bootstrap AppModule**: Main module (AppModule) bootstrapped hota hai.
4. **Initialize AppComponent**: Main component (AppComponent) initialize hota hai.
5. **Render Component Tree**: Component tree render hota hai.
6. **Setup Event & Data Binding**: Event aur data binding setup hota hai.
7. **Application Running**: Application chalne lagti hai.

## Terminology

### Bootstrapped:
**Bootstrapped**: Matlab jab Angular application start hoti hai, usse "bootstrapping" kehte hain. Yeh process application ke main module ko initialize karta hai.

### AppModule:
**AppModule**: Yeh Angular ka main module hota hai, jo sare components, services, aur other modules ko bundle karta hai. Is module ko bootstrap karna pehle step hota hai.

### AppComponent:
**AppComponent**: Yeh Angular application ka root component hota hai, jo application ka starting point hai. Yeh component saari other components ko contain karta hai.

### Render:
**Render**: Matlab content ko browser mein display karna. Jab Angular component ko render karta hai, to uska HTML, CSS aur logic screen pe dikhata hai.




