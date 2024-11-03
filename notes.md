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

# $event
- Yeh variable event-specific data hold karta hai.

- **Use Case:** Jab aapko pata karna ho ki kis element pe event trigger hua ya koi aur event details access karni ho.

# Two way binding
- Two-way binding se aap TypeScript class aur HTML template ke beech dono directions mein data synchronize kar sakte ho using [(ngModel)].
- [(ngModel)] ko hum banana syntax bhi kahte hai.

example-
```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  name = '';
}

```

```typescript
<input type="text" [(ngModel)]="name" placeholder="Enter your name">
<p>Hello, {{ name }}!</p>

```

--- 
# Directive
- ye Angular me banni banayi class hai jishka use karke hum element ka behavior change kar sakte hai.
- There are 3 types of directive

- **Component Directives:** Custom components created using @Component.
- **Structural Directives:** Change the DOM structure (*ngIf, *ngFor).
- **Attribute Directives:** Change the appearance or behavior of an element (ngClass, ngStyle).

# Example *nfFor and *ngIf
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  isVisible = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
```

```typescript
<button (click)="toggleVisibility()">Toggle Visibility</button>
<div *ngIf="isVisible">
  <h2>Item List:</h2>
  <ul>
    <li *ngFor="let item of items">{{ item }}</li>
  </ul>
</div>

```

*ngIf and else
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
```

```typescript
<button (click)="toggleVisibility()">Toggle Visibility</button>

<div *ngIf="isVisible; else noContent">
  <p>The content is visible.</p>
</div>

<ng-template #noContent>
  <p>No content to display.</p>
</ng-template>
```

## ng-template
- Yeh template define karta hai jo sirf tab render hoga jab *ngIf condition false hogi.
