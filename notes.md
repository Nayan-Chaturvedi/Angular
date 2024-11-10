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
# What is `npm`?

- **npm** stands for **Node Package Manager**.
- **Purpose**: It helps you manage packages (small pieces of code) or libraries that you can use in your projects.

## What Does It Do?

- **Install Packages**: If you need a library or tool for your project, you can download and install it using `npm`.
### example
```typescript
npm install package-name
```

- **Update Packages**: Keeps your libraries up-to-date.
### example
```typescript
npm update package-name
```

- **Remove Packages**: If you don't need a library anymore, you can easily remove it.
### example
```typescript
npm uninstall package-name
```

# `npm install -g @angular/cli` Command:

- **npm**: Node Package Manager ka short form hai.

- **install**: Yeh npm ko batata hai ki specified package ko install karna hai.

- **-g**: Iska matlab "global" hota hai. Yeh package ko globally install karta hai, taaki aap usse kisi bhi project mein use kar sakte hain bina alag se install kiye.

- **@angular/cli**: Yeh Angular CLI (Command Line Interface) package ka naam hai. Yeh Angular applications create aur manage karne mein help karta hai.

# Node.js Kya Hai?

**Node.js** ek tool hai jo aapko JavaScript code ko web browser ke bahar, usually server par chalane ki suvidha deta hai.

- Yeh ek aise magic bridge ki tarah hai jo JavaScript ko front-end (jo users dekhte hain) aur back-end (jo parde ke peeche kaam hota hai) dono par kaam karne deta hai. 😊



# ng 

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

1. **Load index.html**: Sabse pehle browser index.html file ko load karta hai. Yeh file Angular scripts ko include karti hai aur <app-root> tag hota hai jahan Angular app inject hoti hai .
Browser ko yeh pata chalna chahiye ki Angular application kahan inject honi hai.
2. **Initialize Angular Framework**: Angular framework initialize hota hai.
Initialize Angular Framework ka matlab hai ki Angular framework ko setup aur start karna. Jab main.ts file run hoti hai, Angular ka core code load aur initialize hota hai.
3. **Bootstrap AppModule**: Main module (AppModule) bootstrapped hota hai. Yeh Angular application ka entry point hota hai
```typescript
main.ts
bootstrapApplication(AppComponent, appConfig)
.catch((err) => console.error(err));
```
	
4. **Initialize AppComponent**: Main component (AppComponent) initialize hota hai.
```typescript
bootstrapApplication(AppComponent // Yaha AppComponent call ho raha hai
```
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

---

# Interpolation

- **Interpolation:** Matlab double curly braces {{ }} ka use karke aap variables ko HTML mein inject karte ho.

- **Use Case:** Jab aapko TypeScript class se data ko HTML mein dikhana hota hai.

Example-
```typescript
component.html

export class AppComponent {
  title = 'My Angular App';
}

```

```typescript
<h1>{{ title }}</h1>

```
# Property Binding(Linking)/ One-way-binding

- Square brackets [ ] ka use karke HTML element ki property ko TypeScript variable se link karte hai.

example

```typescript
export class AppComponent {
  imageUrl = 'https://example.com/image.jpg';
}

```
```typescript
<img [src]="imageUrl" alt="Example Image">

```

# Event-Binding / One-way-binding

- Matlab normal brackets ( ) ka use karke aap HTML element ke events ko TypeScript class ke methods se bind karte ho.
- **Use Case:** Jab aapko user interaction (like button click) handle karni hoti hai.

## $event
- Yeh variable event-specific data hold karta hai.

- **Use Case:** Jab aapko pata karna ho ki kis element pe event trigger hua ya koi aur event details access karni ho.

### Example

```typescript
home.html
<input type="text" (input)="onChange($event)" />
```

```typescript
onChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    console.log(value);
  }
```

# Two way binding
- Two-way binding se aap TypeScript class aur HTML template ke beech dono directions mein data synchronize kar sakte ho using [(ngModel)].
- [(ngModel)] ko hum banana syntax bhi kahte hai.

example-
```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule], // Form module import in important while using ngModel
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name = 'Nayan Kumar Chaturvedi';

  // For 1st Approch onChange method require [(ngModel)] approch onChange method is not required 

  onChange(e: Event) {
    this.name = (e.target as HTMLInputElement).value;
  }
}

```

```typescript
<h1>{{ name }}</h1>

<!-- 1st Approch  -->
<!-- In below approch onChange method required in .ts file -->

<input type="text" [value]="name" (input)="onChange($event)" />

<!-- Optimize approch using ngModel -->

<input type="text" [(ngModel)]="name" />
```

## ngModel
- ngModel Angular ka ek directive hai
- yeh input elements (jaise text boxes) ko aapke component ke variables ke saath jodta hai. 
 Matlab, agar aap input box mein kuch likhte ho, toh wo value automatic component ke variable mein store ho jati hai aur agar component
  variable change hota hai, toh input box mein bhi wo value update ho jati hai.
- FormsModule: Zaroori hai ngModel use karne ke liye

--- 
# Directive
- ye Angular me banni banayi class hai jishka use karke hum element ka behavior change kar sakte hai.
- There are 3 types of directive

- **Component Directives:** Custom components created using @Component.
- **Structural Directives:** Change the DOM structure (*ngIf, *ngFor).
- **Attribute Directives:** Change the appearance or behavior of an element (ngClass, ngStyle).

# Example *ngFor 
```typescript
 .ts

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // jab bhi *ngFor and *nfIf use kar rahe hai tab CommonModule directive ko import karna hai
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name = 'Nayan Kumar Chaturvedi';

  users = [
    { name: 'Nayan', isStatus: false, salary: 4500 },
    { name: 'Vikas', isStatus: true, salary: 5500 },
    { name: 'Anmol', isStatus: true, salary: 6500 },
    { name: 'Akash', isStatus: false, salary: 7500 },
  ];
}
```

```typescript
.html

<div *ngFor="let user of users">
  <h3>
    {{ user.name }} single status {{ user.isStatus }} and salary is
    {{ user.salary }}
  </h3>
</div>

```

*ngIf 
```typescript
.html

<div *ngFor="let user of users">
  <h3 *ngIf="user.salary > 4500">
    {{ user.name }} single status {{ user.isStatus }} and salary is
    {{ user.salary }}
  </h3>
</div>
  }
}
```
 *ngIf and else
```typescript
.html

<div *ngFor="let user of users">
  <h3 *ngIf="user.salary > 4500; else elseBlockCode">
    {{ user.name }} single status {{ user.isStatus }} and salary is
    {{ user.salary }}
  </h3>
  <ng-template #elseBlockCode>
    <h6>
      {{ user.name }} single status {{ user.isStatus }} and salary is
      {{ user.salary }}
    </h6>
  </ng-template>
</div>
```

## ng-template
- Yeh template define karta hai jo sirf tab render hoga jab *ngIf condition false hogi.

# Angular 17 Updates
- Angular 17 me hum @For, @if, @else (control flow) etc laga sakte hai. ye similar hote hai directives ke per directive nahi hote hai.

- directive hame element par lagana padta hai

example
```typescript
 names = [
    {
      name: 'Nayan',
      age: 24,
      work: 'privateJob',
    },
    {
      name: 'Aditya',
      age: 65,
      work: 'GovtJob',
    },
    {
      name: 'Puja',
      age: 54,
      work: 'privateJob',
    },
  ];

```

```typescript
<div>
  @for(user of names; track user.name) { @if(user.age>45) {
  <h1>{{ user.name }} have {{ user.work }} and his age is {{ user.age }}</h1>
  } @else {
  <h1>{{ user.name }}</h1>
  } }
</div> 
```

