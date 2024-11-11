# Angular

- Angular is a framework for building UI.

**Note:** Hum UI HTML CSS se bhi generate kar sakte hai per hum yaha Angular framework ishliye use kar rahe hai
	 taki hamare effort reduce ho jaye.

- You can create single web application.
- We can create reusable components.
- Angular MVC
  - Angular MVC ka matlab hai Model-View-Controller pattern ko client side pe implement karna. Angular ek front-end 
	framework hai jo is pattern ko follow karta hai.
  - **Model** - ye data ko hold karta hai/ Yaha hum blueprint rakte hai.
  - **View** - UI elements ko represent karta hai, jaise HTML aur Angular templates.
  - **Controller** - Logic ko handle karta hai aur Model aur View ke beech interaction manage karta hai.
- Quicker development is possible less dependent on 3rd party library(Eg- routing, Validation etc). ye by-default
	 availabe rahti hai angular me.

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

- **-g**: Iska matlab "global" hota hai. Yeh package ko globally install karta hai, taaki aap usse kisi bhi project
	 mein use kar sakte hain bina alag se install kiye.

- **@angular/cli**: Yeh Angular CLI (Command Line Interface) package ka naam hai. Yeh Angular applications create 
	aur manage karne mein help karta hai.

# Node.js Kya Hai?

**Node.js** ek tool hai jo aapko JavaScript code ko web browser ke bahar, usually server par chalane ki suvidha deta hai.

- Yeh ek aise magic bridge ki tarah hai jo JavaScript ko front-end (jo users dekhte hain) aur back-end (jo parde ke
	 peeche kaam hota hai) dono par kaam karne deta hai. 😊



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

**node_modules**: Yeh folder saari dependencies aur packages ko contain karta hai jo Angular project
	 ke liye required hain.

**src**: Yeh main folder hai jahan saari source code files hoti hain.

**app**: Yeh folder main application code ko contain karta hai, including components, services, and modules.

**assets**: Yeh folder images, fonts, aur static files ko store karta hai.

**environments**: Yeh different environment configurations ko handle karta hai (jaise development aur production).

**angular.json**: Yeh file project ka main configuration file hai, jisme build, serve, aur other Angular
	 CLI commands ki settings hoti hain.

**package.json**: Yeh file project ka dependency manager hai, jo saari required packages ko list karta hai.

**tsconfig.json**: Yeh file TypeScript compiler ko configuration settings provide karta hai, jaise ki kaunsa TypeScript
	 version use karna hai aur kaunsa code transpile(Ek language se doosri language mein code ko convert karna.) karna hai.

**package-lock.json**: package-lock.json file make sure karta hai ki har baar npm packages ke same versions use ho, taki
		 project ki consistency aur integrity bani rahe. Yeh file exact versions of installed packages
 ko lock karta hai aur sub-packages ko bhi, taki aapka build process stable aur predictable rahe.

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
- AOT compilation build time per hota hai means  Compiles code before execution and jit me compilation run time 
	par hota hai means Compiles code during execution.
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

1. **Load index.html**: Sabse pehle browser index.html file ko load karta hai. Yeh file Angular scripts ko include karti hai
	 aur app-root tag hota hai jahan Angular app inject hoti hai .
Browser ko yeh pata chalna chahiye ki Angular application kahan inject honi hai.
2. **Initialize Angular Framework**: Angular framework initialize hota hai.
Initialize Angular Framework ka matlab hai ki Angular framework ko setup aur start karna. Jab main.ts file run hoti hai,
	 Angular ka core code load aur initialize hota hai.
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
**Bootstrapped**: Matlab jab Angular application start hoti hai, usse "bootstrapping" kehte hain. Yeh process application ke 
	main module ko initialize karta hai.

### AppModule:
**AppModule**: Yeh Angular ka main module hota hai, jo sare components, services, aur other modules ko bundle karta hai.
	 Is module ko bootstrap karna pehle step hota hai.

### AppComponent:
**AppComponent**: Yeh Angular application ka root component hota hai, jo application ka starting point hai. Yeh component
	 saari other components ko contain karta hai.

### Render:
**Render**: Matlab content ko browser mein display karna. Jab Angular component ko render karta hai, to uska HTML, CSS aur 
	logic screen pe dikhata hai.

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
- Two-way binding se aap TypeScript class aur HTML template ke beech dono directions mein data synchronize kar sakte
	 ho using [(ngModel)].
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
 Matlab, agar aap input box mein kuch likhte ho, toh wo value automatic component ke variable mein 
	store ho jati hai aur agar component
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
- Angular 17 me hum @For, @if, @else (control flow) etc laga sakte hai. ye similar hote hai directives
	 ke per directive nahi hote hai.

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

---

# Parent to Child Communication 
- Input directive - Angular mein @Input directive ka use hota hai parent component se child component ko
	 data bhejne ke liye. 

## Kaise Kaam Karta Hai?
- Parent Component: Parent component data bhejta hai.
- Child Component: Child component @Input decorator ka use karke data receive karta hai.

```typescript
app.html
<app-home name="ramesh"></app-home>
```

```typescript
child.ts

export class HomeComponent {
  @Input() name = '';
}
```

```typescript
child.html

<h1>user-{{name}}</h1>
```
 
- Hum  name ki jaga userNae pass kare paents se an hum child.ts me name hi likha rahne de sakte hai using alias.
- **alias:** Yeh property ko alag naam userName se access karne deta hai.
```typescript
app.html
<app-home UserName="ramesh"></app-home>
``` 

```typescript
@Input({ alias: 'userName' }) name = ''; // Yaha hum name ki jagah kuch bhi likh sakte hai bus 
						alias me hame wahi likhna hoga jo parent me ho
```

## Tranform property in @Input
- Angular mein @Input directive mein transform property ka use hota hai value 
	ko modify karne ke liye jab wo parent component se child component ko pass hoti hai.
- Value Assign hone se pahle transform ho jati hai.

### Example1
```typescript
function formatName(value: String) {
  return 'Hi ' + value;		
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input({ alias: 'userName', transform: formatName }) name = '';	// Output- Hi Ramesh 		
}
```

### Example 2

```typescript
child.ts

function formatName(value: string) {
  return 'Hi ' + value;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input({ alias: 'userName', transform: formatName }) user = '';
  @Input({ transform: booleanAttribute }) status!: boolean; 	//! symbol TypeScript ko assure
								 karta hai ki property zaroor assign hogi.

  @Input({transform:numberAttribute}) salary!:number;		// yaha booleanAttribute, numberAttribute 
								already bane banaye transform hai
}
```

```typescript
child.html

<h3>User is {{ user }} maritalStatus is {{ status }} salary is{{ salary }}</h3>
```

```typescript
Parent.html
<app-home userName="ramesh" status="false" salary="2400"></app-home>
```

### Example 3
```typescript
parent.ts

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule],     // Import common module because
							     we are use *ngFor in parent.Html
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = [
    {
      userName: 'ramesh',
      status: 'false',
      salary: 2400,
    },
    {
      userName: 'Vikas',
      status: 'true',
      salary: 5800,
    },
    {
      userName: 'Abhay',
      status: 'false',
      salary: 6500,
    },
  ];
}
```

```typescript
parent.html


<app-home
  *ngFor="let user of users"
  [userName]="user.userName"
  [status]="user.status"
  [salary]="user.salary"
>
</app-home>
```
```typescript
child.ts

function formatName(value: string) {
  return 'Hi ' + value;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input({ alias: 'userName', transform: formatName }) user = '';
  @Input({ transform: booleanAttribute }) status!: boolean; 	//! symbol TypeScript ko assure 
								 karta hai ki property zaroor assign hogi.
  @Input({transform:numberAttribute}) salary!:number;
}
```

```typescript
child.html

<h3>User is {{ user }} maritalStatus is {{ status }} salary is{{ salary }}</h3>

```
# @Output
- Use Parent to Child data pass
- agar muje koi bhi data child se parent me pass karna hai to mujhe event ke form me karna hoga .
- Value emit hogi child se and parent listen karega
## Example 1
```typescript
child.ts
 @Output() myEvent = new EventEmitter<string>();

  sendData() {
    this.myEvent.emit('Nayan Kumar Chaturvedi');
  }
```

```typescript
child.html
<button (click)="sendData()"></button>
```

```typescript
parent.html
<app-home (myEvent)="reciveData($event)"></app-home> // Yaha myEvent child wala hai. 
							hame child and parent ki yaha value same rakhni hai
```

```typescript
reciveData(e: string) {
    console.log(e);
  }
```

## Example 2
- Yaha hum emit karege ek object.
- hame object banana hoga src-> models(we create)-user.ts(we create)

```typescript
user.ts

export type User={name:string, salary:number}
``` 

```
child.ts
 name = 'Rajesh';
  @Output() myEvent = new EventEmitter<User>();
  sendData() {
    this.myEvent.emit({ name: this.name, salary: 24000 });
  }
```

```
child.html
<button (click)="sendData()">Send Data</button>

```
```typescript
parent.html
<app-home (myEvent)="reciveData($event)"></app-home>
```

```typescript
parent.ts
export class AppComponent {
  reciveData(e: User) 		// Hum yaha User receive kar rahe hai. jo hamne model banaya tha 
  {		
    console.log(e);
  }
}
```


## Example 3
- Let suppose hamare pass arr hai jishme kai name hai ushme se ek name rajesh hai. Hum us rajesh ki salary change karni hai.
- tip= ishme child.html and child.ts same rahege chane hame parent.ts and parent.html me karna hoga

```typescript
child.ts 

<app-home (myEvent)="reciveData($event)"></app-home>

<div *ngFor="let u of arr">
  <h4>Name is {{u.name}} marital status is {{u.status}} and salary is {{u.salary}}</h4>
</div>
```
```typescript
parent.ts

export class AppComponent {
  arr = [
    {
      name: 'Vivek',
      status: true,
      salary: 400,
    },
    {
      name: 'Rajesh',
      status: false,
      salary: 900,
    },
    {
      name: 'Akash',
      status: true,
      salary: 100,
    },
  ];

  reciveData(e: User) {
    console.log(e);
    const rajeshArrIndex = this.arr.findIndex((user) => user.name == e.name);
    this.arr[rajeshArrIndex].salary = e.salary;
  }
}
```


## findIndex
- Yeh method array ke har element ko check karta hai jab tak condition fulfill nahi hoti.
- element jo condition ko fulfill karta hai uska index return karta hai. Otherwise -1 return karta hai

# Pipes and Custom Pipes
-  pipes ka use data ko transform karne ke liye hota hai.

## Example
- **Title Case Pipe:** Har shabd ka pehla letter uppercase mein convert karta hai.

```typescript
{{ 'angular is amazing' | titlecase }}  // Output - Angular Is Amazing
```
- **Currency Pipe:** Ek number ko currency format mein dikhata hai.

```typescript
{{ 1234.56 | currency }}	// output - $1234.56 Yaha by default $ liya gya hai 
				 // agar hame INR me conververt karna hai to hum INR
				// pass karege

{{ 1234.56 | currency:'INR' }}	//Output- ₹1,234.56



{{ 'hello world' | uppercase }}	// output- HELLO WORLD

```

## Custom pipes
- **Task-**Hame ek pipe generate karna hai agar user number me INR daale to +91 prefix me lage and USD daale to +1.
- **Transform Method in Pipe**-
```typescript
transform(value: unknown, ...args: unknown[]): unknown {
  return null;
}

```
### Explain
- value: unknown: Yeh parameter wo value hoti hai jo pipe ko input milti hai.
	 Yahaan unknown type use ki gayi hai, matlab yeh kisi bhi type ki value ho sakti hai.

- ...args: unknown[]: Yeh rest parameter hai jo additional arguments ko represent karta hai.
	 args ek array hai jo multiple values ko hold karta hai aur unka type unknown[] hai.

1. Sabse pahle hame pipe generate karna hoga by using Command ng g p pipe-name
```HTML
D:\Angular_Tutorial\AngularProject\Rough\AngularPractice> ng g p pipes/countryCode
```

2. **Pipe Logic Define Karein:**Jo pipe generate hua usmein aapko transform method me logic 
	define karna hoga jo data ko transform karega.

Example-
```typescript
@Pipe({
  name: 'countryCode',
  standalone: true,
})
export class CountryCodePipe implements PipeTransform {
  transform(value: number, country?: string): unknown {
    let code = '91+';
    if (country == 'USA') {
      code = '+1';
    }
    return code + value;
  }
}

```
- **above explain**
	- transform- Yeh method do parameters leta hai: value (jo ek number hai) aur optional country (jo ek string hai)
	- Value- Yeh parameter wo number hai jisko transform karna hota hai. For example, agar aapke pass phone number hai
		 1234567890, to yeh number value parameter mein pass hota hai.
	- country- Yeh parameter ek string hai jo country code ko specify karta hai. Yeh optional hai, matlab agar aap nahi
			 dete ho to bhi kaam karega. For example, agar aap 'USA' pass karte ho, to yeh country ko USA identify karega.
3. Pipe ko Module mein Import Karein
4. Pipe ko Template mein Use Karein
```typescript
<p>India ka Country Code: {{ 'India' | countryCode }}</p>
<p>USA ka Country Code: {{ 'USA' | countryCode:"USA" }}</p>

```

# Direcive  
- Angular mein directive ek special type ka class hota hai jo DOM (Document Object Model) ke behavior ko modify kar sakta hai.
## Custom-Directive
- Angular mein custom directive banane ka matlab hai apna khud ka directive create karna jo aapko HTML elements ke behavior ko customize
	 karne ki suvidha deta hai.

- Example-
	```typescript
	.ts 
		export class HomeComponent {
  		bgColor = 'red';
		}

       ```
	```typescript
		<h1 [style.backgroundColor]="bgColor">Hello</h1>
	```
- Let suppose style.backgroundColor=bgColor property mujhhe multiple element me use karni hai. 
- To ish issue ke liye hum ek directive create karege and directive ko hum attribute ki Tarah use kar sakte hai.

**Steps to Create a Custom Directive**

1. ng generate directive highlight // Generate directive

2. Directive Logic Define Karein in highlight Directive

```typescript
	@Directive({	// Yeh decorator batata hai ki yeh class ek directive hai
  selector: '[appHighlight]', // Jab aap selector ko [appHighlight] parentheses mein likhte hain, to yeh Angular 
				ko batata hai ki yeh directive ek attribute directive hai
  standalone: true,
})
export class HighlightDirective {
  constructor() {} // Yeh constructor function hai, jo directive initialize hone par call hota hai. Currently, yeh empty hai.

  @HostBinding('style.backgroundColor') bgColor = 'blue';
}

```
3. Import selector in .ts file, jishki HTML file directive use karegi

4. Use in HTML

```typescript
<h1 appHighlight>Nayan</h1>
```

## HostBinding & HostListner

**HostBinding**- Use hota hai directive ya component ki property ko host element ki property ke saath bind karne ke liye.
	- Host Element - Wo HTML element jisme directive ya component apply hota hai. Is example mein, <h1> element host element hai.

**HostListner**-HostListner decorator ka use DOM events ko listen karne ke liye hota hai. Matlab, jab bhi specific event trigger hota
		 hai, tab aapka method call hota hai.

### Example 2
```typescript
highlight.Directive.ts
  @HostListener('mouseenter')
  changeFontsize() {
    console.log('Mouse Enter');
  }

  @HostListener('mouseleave')
  resetFontSize() {
    console.log('Mouse leave');
  } 
```

- in above program if I'm run when mouse above on h1 in console print Mouse Enter and remove cursor from h1 the mouse leave print in console.
**note**- Ham Extend kar rahe hai example 1 ko to hame import statement and HTML me change nahi karna hai.

### Example 3
**task**- jab me mouse lekar jau h1 per tab h1 bada(size increse) ho jaye and mouse hatau tab original size me aa jaye.
- Ish task ke liye pahle hame h1 element ko pakadna hai. hum constructor(jo directive me  hai) ke ander pakad sakte hai
```typescript

export class HighlightDirective {
  public el: ElementRef;
  constructor(el: ElementRef) {
    this.el = el;		//this.el = el; se host element ka reference directive ke el property mein store kiya gaya hai.
  }
  @HostListener('mouseenter')
  changeFontsize() {
    console.log("Enter mouse")
    this.el.nativeElement.style.fontSize = '50px';
  }

  @HostListener('mouseleave')
  resetFontSize() {
    console.log('Mouse leave');
    this.el.nativeElement.style.fontSize = '30px';
  }
}

```
- ElementRef-Angular mein ElementRef ek service hai jo host element ka reference hold karti hai. Iska use karke aap DOM (Document Object Model)
	 ke elements ko directly access aur manipulate kar sakte hain.






