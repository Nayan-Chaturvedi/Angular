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
- **Task** - Hame ek pipe generate karna hai agar user number me INR daale to +91 prefix me lage and USD daale to +1.
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

2. **Pipe Logic Define Karein:** Jo pipe generate hua usmein aapko transform method me logic 
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
	- Host Element - Wo HTML element jisme directive ya component apply hota hai. Is example mein, h1 element host element hai.

**HostListner**- HostListner decorator ka use DOM events ko listen karne ke liye hota hai. Matlab, jab bhi specific event trigger hota
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
- **note**- Ham Extend kar rahe hai example 1 ko to hame import statement and HTML me change nahi karna hai.

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
- ElementRef-Angular mein ElementRef ek service hai jo host element ka reference hold karti hai. Iska use 
	karke aap DOM (Document Object Model) ke elements ko directly access aur manipulate kar sakte hain.

# LifeCycle Methods/ Hooks
- Hooks means life cycle ke method
- Angular components ke lifecycle methods wo hooks hain jo specific points par call hote hain jab component create,
	 update, ya destroy hota hai. 
- In lifecycle methods ka use karke aap components ke behavior ko control kar sakte hain.

## Explain Angular Constructor
- ye wo method hai jo automatically call hota hai jab class ka instance create hota hai.
- Instance means class ka object. Hum object create nahi karte hai Angular automatically instance create karta hai.
- Yeh sirf ek hi bar call hota hai ja instance crete ho.

```typescript
export class User
{
	title:string
	
	// Work of constructor
	constructor()
	{
		// Initilize property like title
		// Dependency injection code
		// Event Listner register
	}
}
```
## Explain ngOnInit()
- ye method bhi ek bar call hota hai jab component ready ho jaye.
- Component abhi UI per show nahi hua hai per component ready ho gya hai UI per show hone ke liye.

```typescript
export class User
{
	title:string
	
	// Work of constructor
	ngOnInit()
	{
		// Initilize property like title
		// Initial API call
		// Event Listner register
	}
}
```

## Example-

```typescript
app.ts

export class AppComponent {
  myName="vikas";
}
```

```typescript
app.component.html
<app-home [name]="myName"></app-home>
```

```typescript
export class HomeComponent implements OnInit {
  @Input() name = '';

  constructor() {
    console.log('Constructor call', this.name);		// Output- Constructor call (Input abhi ready nahi huye hai)
  }

  ngOnInit(): void {
    console.log('ngOnInit call', this.name);		// Output- ngOninit call vikas (Input ready ho gaye hai tabhi 
									Vikas show hua hai)
  }
}

```

## ngOnDestroy:

- Jab component destroy hone wala hota hai, tab yeh method call hoti hai.

- Yeh method cleanup aur unsubscribe ke liye use hoti hai.

```typescript
child.ts

import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<p>{{ name }}</p>`
})
export class HomeComponent implements OnInit, OnDestroy {
  @Input() name = '';

  constructor() {
    console.log('Constructor call', this.name);
  }
  
  ngOnInit(): void {
    console.log('ngOnInit call', this.name);
  }

  ngOnDestroy(): void {
    console.log('On Destroy');
  }
}
```

```typescript
parent.html

<app-home *ngIf="myName" [name]="myName"></app-home>
<button (click)="clear()">clear data</button>


```
```typescript
parent.ts
export class AppComponent {
  myName = 'vikas';

  clear() {
    this.myName = '';
  }
}
```

### How its work
- Jab clear button click hota hai aur myName empty string ('') set hota hai, to *ngIf="myName" condition 
	false ho jati hai.
- Is wajah se Angular HomeComponent ko DOM se hata deta hai aur ngOnDestroy method call hota hai jo console
	 mein "On Destroy" print karta hai.

## ngOnChanges
- Ye method tab run hota hai jab Jab component ke input properties change hoti hain, tab yeh hook call hota hai.

### Example-
```typescript
parent.ts
export class AppComponent {
  myName = 'vikas';

  change() {
    this.myName = 'Akash';
  }
}
```

```typescript
parent.html
<app-home *ngIf="myName" [name]="myName"></app-home>
<button (click)="change()">clear data</button>
```

```typescript
child.ts
export class HomeComponent implements  OnChanges {
  @Input() name = '';

  constructor() {
    console.log('Constructor call', this.name);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change detect');
  }
}
```

- **note :** constructor, ngOnInit(), ngOnDestroy ye saare method ek bar run hote hai par ngOnChanges multiple times run hota hai.

## ViewChild & ngAfterViewInit
- Hame ki element ka refrence pakdna hai. jaishe hm JS m karte the document.getElementById. hum angular me kaise pakad sakte hai
	element ka reference and ush .ts file me kaise hold kar sakte hai.
- hum ishko templete variable ke jariye pakad sakte hai.
- example
```typescript
child.html
<h1 #myHeading>{{ name }}</h1>		// yaha myHeading template variable hai
```
- Hum viewChild decorator ki help se .ts file me hold kar sakte hai
- example
```typescript
child.ts
export class HomeComponent implements AfterViewInit {
  @Input() name = '';

@ViewChild("myHeading") heading?:ElementRef // Hamne heading variable me hold kiya hai myHeading ko.
						// ElementRef type hai heading ka
```

- Heading ko me ngAfterViewInit life cycle method me access kar sakta hu
- Example
```typescript
child.html
<h1 #myHeading>{{ name }} is Hero</h1>
```

```typescript
child.ts

export class HomeComponent implements AfterViewInit {
  @Input() name = '';

  @ViewChild('myHeading') heading?: ElementRef;

  ngAfterViewInit(): void {
    console.log('After view Init', this.heading?.nativeElement.textContent);
  }
}

```

# Service
- Jab bhi aapko remote server se koi data chaiye tab aap services use karte hai.
- Example- Let suppose aap ek application bna rahe ho Jishme user ko login karna hai to login se related 
	network calls ek alag service(let suppose auth-Service) me hogi . User Auth provide kar raha hai 
	to ye call post-service me hogi
- Hum components ke ander bhi API related code likh sakte hai, but ye good way nahi hai.
- Services ishliye bane hai taki aap API related code alag se likh sake.

## Example
1. Create a component joke
```typescript
PS D:\Angular_Tutorial\AngularProject\Service\ServiceAngular\src\app> ng g c components/joke
```

2. Create a service jokes
```typescript
PS D:\Angular_Tutorial\AngularProject\Service\ServiceAngular> ng g s services/joke
```
3. Mention jokeComponents in App.ts and  also mention in app.html. 
```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JokeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ServiceAngular';
}

```

```typescript
app.html

<app-joke></app-joke>

```
4. Ab hum jokes service me API call karege. Hum API call HTTP-client dependency ki help se karege..
	Hame pta hai ki hum dependency inject constructor me karte hai.
- Basically Service ek class hai .
- **HttpClient:**  
1. Angular mein HTTP requests bhejne aur handle karne ke liye use hoti hai.
2. HTTP Methods: GET, POST, PUT, DELETE
3. Yeh Reactive Extensions (RxJS) ka use karti hai jo Observables return karta hai.

```typescript
@Injectable({	
  providedIn: 'root',
})
export class JokeService {
  http: HttpClient;

  constructor(http:HttpClient) { // Yeha hum dependency inject kar rahe hai
    this.http=http;
  }

  getJoke() // In this function we call api
  {
    this.http.get()
  }
}
```


- **Explain**
- @Injectable: @Injectable Angular ka ek decorator hai jo Angular ko batata hai ki yeh class ek service hai.
- Iska use karke aap services ko different components mein inject kar sakte hain.
- providedIn: providedIn property specify karti hai ki yeh service kis level par available hai.
- providedIn: 'root' means yeh service application ke har component, directive, ya module mein accessible hai.

- Another way -

```typescript
@Injectable({
  providedIn: 'root',
})
export class JokeService {
  // http: HttpClient;

  // constructor(http:HttpClient) {
  //   this.http=http;
  // }

   http=inject(HttpClient);
  getJoke() // In this function we call api
  {
    this.http.get()
  }
}
```

- Hum ye tarika  use nahi karege ek class ke case me. Kyoki class ke pass constructor hota hai. To constructor wala 
	Syntax hum use karege.
- Par kuch jagah hame service access karni hai par wo class nahi hai wo function hai tb hum inject wala tarika use karege. 
```typescript

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getJoke() {
    this.http		// Ye ek observable return karta hai
      .get('https://api.chucknorris.io/jokes/random?category=animal') // ye api hamne google se li hai
      .subscribe((data) => {
        console.log(data);
      });
  }
}
```
5. Ab hame getJoke() method ko component(joke.ts) me call karna hai.
```typscript
export class JokeComponent implements OnInit {
  jService: JokeService;
  constructor(
    jService: JokeService // Service bhi ek dependecy
  ) // hai use bhi hamne inject kiya hai
  {
    this.jService = jService;
  }
  ngOnInit(): void {
    this.jService.getJoke();
  }
}
```

6. And hame last me app.config.ts me
```typescrit
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),// ye provide karna padega. This is mandatory
  ],
};
```
7. Ye value console me dikh rahi hai Ab hum Chahte hai ki value UI m sow karwana hai.

```typescript
joke.service

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getJoke() { // Ye obserable return karege
    return this.http.get(
      'https://api.chucknorris.io/jokes/random?category=animal'
    );
  }
}
```

```typescript
joke.ts
export class JokeComponent implements OnInit {
  joke = 'loading';
  jService: JokeService;
  constructor(jService: JokeService) {
    this.jService = jService;
  }
  ngOnInit(): void {
    // Yaha hamne subscribe kar diya
    this.jService.getJoke().subscribe((data: any) => {
      this.joke = data.value;
    });
  }
}
```

```typescript
joke.html

<h3>{{ joke }}</h3>
```

8. Hum chate hai ki ek button banau the ush button click me dusra joke aaye
```typescript
joke.ts

export class JokeComponent implements OnInit {
  joke = 'loading';
  jService: JokeService;
  constructor(jService: JokeService) {
    this.jService = jService;
  }
  ngOnInit(): void {
    this.getAnotherJoke();
  }
  getAnotherJoke() {
    this.jService.getJoke().subscribe((data: any) => {
      this.joke = data.value;
    });
  }
}
```

```typescript
joke.html

<h3>{{ joke }}</h3>

<button (click)="getAnotherJoke()">Get another joke</button>

```

# Global state management using services
- Global state management using services in Angular ka matlab hai ki aap ek central service banate ho jo poore app
	 ke liye data manage karti hai.
- Iska fayda yeh hota hai ki har component easily  data ko access aur update kar sakta hai.

1. Firstly, Create 2 Components and 1 Service
```typescript
ng g c components/A
ng g c components/B1
ng g s services/counterService

```

2. app. component.ts and app.html me hum import karege A, B1 Components ko
```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JokeComponent, AComponent, B1Component], // import
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ServiceAngular';
}

```

```typescript
app.html

<app-a></app-a>
 <app-b1></app-b1>


```

3. In counter.Service
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private count = 0;

  getCount() {	// Get value of count
    return this.count;
  }

  incrementCount() { // set value of count
    return this.count++;
  }
}


```

4.  In A components and A.html
```typescript
@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css',
})
export class AComponent {
  constructor(private counterService: CounterService) {}

  getData() {
    return this.counterService.getCount();
  }

  incre() {
    this.counterService.incrementCount();
  }
}

```

```typescript
<h2>Count A : {{ getData() }}</h2>
<button (click)="incre()">Increment</button>


```

- Another way to write A component and A.html
```typescript

export class AComponent {
 
  constructor(public counterService:CounterService) // Provide public specifier
  {
    
  }
}
```

```typescript
<h2>Count A : {{ counterService.getCount() }}</h2> 
<button (click)="counterService.incrementCount()">Increment</button> 

// Public specifier hai to hum directly getCount() or incrementCount ko access kar sakte hai 
```
- Hum dekege UI me Button click se count increase hoga. 
5. In B components and B.html 

```typescript
import { Component } from '@angular/core';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-b1',
  standalone: true,
  imports: [],
  templateUrl: './b1.component.html',
  styleUrl: './b1.component.css',
})
export class B1Component {
  constructor(private counterService: CounterService) {}

  getData() {
    return this.counterService.getCount();
  }

  incre() {
    this.counterService.incrementCount();
  }
}

```

```typescript
<h2>Count B : {{ getData() }}</h2>
<button (click)="incre()">Increment</button>
```

7. Abb hum dekege hi kisi ka bhi increment button (A ya B) ka click karege to dusra wala count automatically increase hoga.
- Yaha A and B components Service ka same instance share kar rahe hai
- Hum chahte hai ki A and B service ka same instance share na kare to hum providers me service name daalege
```typescript
@Component({
  selector: 'app-b1',
  standalone: true,
  imports: [],
  providers: [CounterService], // Provider and Service name
  templateUrl: './b1.component.html',
  styleUrl: './b1.component.css',
})
export class B1Component {
  constructor(private counterService: CounterService) {}

  getData() {
    return this.counterService.getCount();
  }

  incre() {
    this.counterService.incrementCount();
  }
}
```

- **Task :** Hum chahte hai ki Component B1 and B2 and service instace share kare 
- Create B components
```typescript
ng g c components/B1
```

```typescript
b2.ts

export class B2Component
{
  constructor(public counterService:CounterService){}
}

```

```typescript
b2.html

<h3>Count B3 : {{ counterService.getCount() }}</h3>
<button (click)="counterService.incrementCount()">Increment</button>


```
- Hum B2 component ko B1 me import karaege
```typescript
b1. ts

@Component({
  selector: 'app-b1',
  standalone: true,
  imports: [B2Component],		// Import B2
  providers: [CounterService],
  templateUrl: './b1.component.html',
  styleUrl: './b1.component.css',
})
export class B1Component {
  constructor(private counterService: CounterService) {}

  getData() {
    return this.counterService.getCount();
  }

  incre() {
    this.counterService.incrementCount();
  }
}
```

```typescript
b1.html

<h2>Count B : {{ getData() }}</h2>
<button (click)="incre()">Increment</button>

<app-b2></app-b2> // Import in B1 component

```

# Signal
- yeh Angular mein ek tarah ke state management ka tariqa hai jo components ke beech data flow ko handle karta hai.
- State management ka matlab hai aapke application ke data aur state ko samajhdari se manage karna. Taaki har part
  ya component ko sahi data mile aur app smoothly chale.
- In Easy way
	- Signal in Angular ek tarah ka special variable hai jo value store karta hai aur jab bhi wo value change 
	hoti hai, to aapko automatically notify karta hai.

## Types of Signals:

### Writable Signal:
- Yeh signal update kiya ja sakta hai using methods like .set or .update.
- Writable Signals ko update kar sakte hain using .set or .update.
### Computed Signal:
- Yeh signal readonly hota hai aur yeh kisi aur signal ke value pe dependent hota hai.
- Inhe hum update nahi kar sakte hai kyoki ye dusre signal per dependent hote hai

```typescript
count = signal(0); // Initial value 0 hai

// Update the value
count.set(5); // ab count ki value 5 ho jayegi

// Further update with previous value
count.update((oldValue) => oldValue + 1); // ab count ki value 6 ho jayegi

```

## Example
### Writeable signal

```typescript
import { computed, effect, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count = signal(0);

  getCount() {
    return this.count();
    // Agar mujhe signal ki value get karni hai to count() paranthis lagane padega
    // count ke baad
  }

  incrementCount() {
    // this.count.set(5);
    // Value directly 5 set ho gai

    // Hum chahte hai ki value ek ek karke increase ho tab update() ka use karege
    // Based on previous value
    this.count.update((oldValue) => oldValue + 1);
  }
}
```

```typescript
whose Component jo above service use kar raha hai. Yaha hamne A component le liye
a.html

<h2>Count A: {{ counterService.getCount() }}</h2>

<button (click)="counterService.incrementCount()">Increment</button>
```

### Readable signal
```typescript
import { computed, effect, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count = signal(0);

  dooubleCount: Signal<number> = computed(() => this.count() * 2); 
  // Computed signal readonly hote hai hai.


  getCount() {
    return this.count();
    // Agar mujhe signal ki value get karni hai to count() paranthis lagane padega
    // count ke baad
  }

  incrementCount() {
    // this.count.set(5);
    // Value directly 5 set ho gai

    // Hum chahte hai ki value ek ek karke increase ho tab update() ka use karege
    // Based on previous value
    this.count.update((oldValue) => oldValue + 1);
  }
}

```

```typescript
a.html

<h2>Count A: {{ counterService.getCount() }}</h2>
<h2>Double Count A : {{ counterService.doubleCount() }}</h2>
<button (click)="counterService.incrementCount()">Increment</button>

```
## Effects:
- Effects ko debugging ke liye use karte hain, jo signal value change hone par execute hoti hai.
```typescript
@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count = signal(0);

  constructor() {
    effect(() => {
      // Yeh function tab chalega jab signal ki value change hogi.
      console.log('count ', this.count(), " double Count ", this.dooubleCount());
    });
  }


  dooubleCount: Signal<number> = computed(() => this.count() * 2); 
  // Computed signal readonly hote hai hai.


  getCount() {
    return this.count();
    // Agar mujhe signal ki value get karni hai to count() paranthis lagane padega
    // count ke baad
  }

  incrementCount() {
    // this.count.set(5);
    // Value directly 5 set ho gai

    // Hum chahte hai ki value ek ek karke increase ho tab update() ka use karege
    // Based on previous value
    this.count.update((oldValue) => oldValue + 1);
  }
}

```
---
# Project
---
# Routing
- Routing ka matlab hai ki aapke application ke andar different pages ya views ko navigate karna.
 Jaise aap web browser mein different URLs pe jaate hain, waise hi Angular app mein routing se aap pages
 change kar sakte ho bina page reload kiye.

## Router Outlet
Router Outlet Angular mein ek placeholder ya container hai jahan pe different components dynamically 
load hote hain based on the current route. Simple terms mein, router outlet woh jagah hai jahan aapka 
dynamic content display hota hai jab aap app mein navigate karte ho.

## How to add Routing in Our Project
1. 

```typescript

export const appConfig: ApplicationConfig = {
  providers: [ provideRouter(routes)]		// App.config.ts me ye line honi chaiye
};

```
- providers: [ provideRouter(routes)]: Yeh providers array ke through Angular ko batata hai ki kaunsa 
	routing configuration use karna hai.
2. Mujhe apne routes app.routes.ts me batana hai
```typescript
export const routes: Routes = [];
```
3. Routes define karne ke liye pahle me component banana padega
```typescript
ng g c login
ng g c signUp
```
4. Routes define kare
```typescript
export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'sign-up', component: SignUpComponent}
];
```
5. Ab hame router outlet use karna hai. Ushke liye router module ki jarurat padegi
```typescript
app.components.ts

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],		// Router Module 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';
}
```
6. Ab hum app.components.html me
```typescript
<router-outlet></router-outlet>
```
- Ab aap localhost 4200 per jakar dekh sakte hai aapko routing mil jaegi
```typescript
http://localhost:4200/sign-up   // Sign-up Work
http://localhost:4200//login	// Login Work
```

- Hum chahte hai ki manually button show kare SignUp and login ka. Jab lofin kare to login page per navigate kare and vice-versa
- Ushke liye hum ek navbar component create karege
```typescript
ng g c navbar
```
- Ab hum navbar.html me ek view create karege
```typescript
<div>
  <nav>
    <!-- Home Page per navigate karege -->
    <h2><a routerLink="/">CodeBin</a></h2>
    <ul>
      <li><a routerLink="/login" routerLinkActive="active">Login</a></li>
      <li><a routerLink="/sign-up" routerLinkActive="active">sign-up</a></li>
    </ul>
  </nav>
  <!-- hr tag means line -->
  <hr />
</div>

<!-- Link Banane ke liye hame router link ka use karna hoga -->

```

```typescript
navbar.ts

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],  // import both module
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}

- RouterLink: URL navigate karne ke liye.
- RouterLinkActive: Active route indication ke liye. Jo page open hoga wo URL active hai

```
- in app.html
```typescript
<app-navbar></app-navbar>
<router-outlet></router-outlet>

```

7. Jab ap applicatin run (ng s) se karoge and koi bhi link(sign-up/login) per click karoge and inspect me jakar element
	open karoge and dekhoge ki agar sign-up link per click kiya hai to sign-up class active ho jaegi (inspect me element me jakar
	code me deko) and vice-versa.

8. CSS ChatGpt se likhvalo 
9. Jo class Active hogi (login/ sign-up) ushka font-weight bold karna hai 
```typescript
 ul li a.active{
    font-weight: 700;
  }
```

10. Ab hum Login and sign-up page banaege

# Reactive form
- Reactive form me most of the code .ts file me likhte ho.
- Reactive form ka use karne ke liye ReactiveFormsModule ko import karte hai

## FormGroup aur FormControl
- FormGroup - Yeh ek group hota hai jo multiple form fields (controls) ko manage karta hai.
- FormControl - Yeh ek individual form field ko represent karta hai, jaise text input, checkbox, etc.

## What's form ?
- Form ek interface hai jo user se input gather karne ke liye use hota hai.
- Forms aapko data collect karne ka tareeka dete hain, jaise ki text input, checkboxes, radio buttons, etc.
- Yeh data aapke app ke backend ko bhejne mein madad karte hain taaki wo us data ko process aur store kar sake.

```typescript
login.ts

import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'; // Module import karna hai

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule], // import ReactiveFormsModule
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = new FormControl('', [
    // Initial value empty hai
    Validators.required,
    Validators.email,
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  // ab hame email and passsword ko group karna hai

  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  login() {
    // Ish function ko hum button click par call karege
    console.log(this.loginForm.value);
  }
  reset() {
    this.loginForm.reset();
  }
  // Reset function se hum formGroup ko reset kar sakte hai
}


```  

```typescript
login.html

<form class="container" [formGroup]="loginForm">
  <h4>Please Login</h4>
  <input type="email" placeholder="Enter an Email" [formControl]="email" />
  <h5 class="red-text" [hidden]="email.valid || email.untouched"> Enter correct Email</h5>
  <input type="password" placeholder="Enter a Password" [formControl]="password"/>
  <h5 class="red-text" [hidden]="password.valid || password.untouched">
     Password must be of required length</h5>

  <button class="btn-green" [disabled]="loginForm.invalid" (click)="login()"
  >Login</button>
  <button class="btn-red" (click)="reset()">Reset</button>
</form>

<h6>emaik vallid {{ email.valid }}</h6>
<h6>touched {{ email.untouched }}</h6>

<!-- <h5>Email Valid -{{ email.valid }}</h5>  -->

<!--  Starting me Email Valid - False hai kyoki abhi tak mene email nahi dala hai
  Jab me email daal duga tab true ho jaege -->

<!-- <h5>Email Untouched - {{ email.untouched }}</h5> -->

<!-- Starting me email untouched - true hoga kyoki abhi tab mene email ko touch means
  email me kuch email id daali nahi hai . jab ek baar email id daal duga tab mene email
   ko touch kar liya and abb email untouch false ho gya-->


```
- CSS Chatgpt se copy paste kar lo
- Similar hum sign-up page banaege
```typescript
sign-up.ts
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private router: Router) {} 
// agar user sign-up karta hai and sign-up button click karta hai
// to user navigate hoga login page per

  email = new FormControl('', [
    // Initial value empty hai
    Validators.required,
    Validators.email,
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  // ab hame email and passsword ko group karna hai

  registerForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  signUp() {
    // Ish function ko hum button click par call karege
    console.log(this.registerForm.value);
    this.router.navigate(['/login']);
// User navigate to /login page
  }
  reset() {
    this.registerForm.reset();
  }
}


```

- Hum app.routes.ts me 2 routes banaege
1. Agar user localhost:4200 per jaye to ushe  login page me redirect kar de
```typescript
{ path: '', redirectTo: '/login', pathMatch: 'full' },
```

2. Hamare paas abhi 2 routes hai
```typscript 
 localhost:4200/login
 localhost:4200/sgn-up
```
- Agar user kuch 3 routes k access kane ki kosis kar to use message mile not-found.
- ishke liye pahle mujhje not-found component banana hoga
```typescript
PS D:\Angular_Tutorial\AngularProject\Project> ng g c components/not-found 
```
-  And aab hum ek naya route add karege
```typescript
{ path: '**', component: NotFoundComponent }, //Called WildCard
```



```typescript
sign-up.html

<form class="container" [formGroup]="registerForm">
  <h4>Please SignUp</h4>
  <input type="email" placeholder="Enter an Email" [formControl]="email" />
  <h5 class="red-text" [hidden]="email.valid || email.untouched">Enter correct Email</h5>
  <input type="password" placeholder="Enter a Password" [formControl]="password"/>
  <h5 class="red-text" [hidden]="password.valid || password.untouched">
	Password must be of required length</h5>

  <button class="btn-green" [disabled]="registerForm.invalid" (click)="signUp()">
	signUp</button>

  <button class="btn-red" (click)="reset()">Reset</button>
</form>

```
 ## Lazy Loading
- Lazy loading Angular mein ek design pattern hai jo application ki performance aur loading time improve karta hai
 by loading  components only when they are needed. Matlab, poore app ko ek saath load karne ke bajaye, 
	sirf wo modules load hote hain jo zarurat ke waqt chahiye hote hain.
## Example 
- Create an components
```typescript
 D:\Angular_Tutorial\AngularProject\Project> ng g c components/about
``` 

- Show in HTML
```typescript
navbar.html
<div>
  <nav>
    <h2><a routerLink="/">CodeBin</a></h2>
    <ul>
      <li><a routerLink="/login" routerLinkActive="active">Login</a></li>
      <li><a routerLink="/sign-up" routerLinkActive="active">sign-up</a></li>
      <li>
        <a routerLink="/about-component" routerLinkActive="active">About</a> // add
      </li>
    </ul>
  </nav>

  <hr />
</div>

```
- In app.routes.ts
```typescript
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'about-component', component: AboutComponentComponent }, // Provide  path
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component:NotFoundComponent },      //Called WildCard
];


```

- Ab hum apne UI per jaege and hum apna inspect me jakar network open kar lege and hum refresh karege to dekhege
saare   component ke bundel ek sath load aa rage hai .
- Hum chahte hai ki about component ka bundel alag se load ho jab ushki requirement ho which means jab hum click kare
about per and jab load ho 
```typescript
 app.routes.ts

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'about-Component',		// provide lazy loading
    loadComponent: () =>F
      import('./components/about-component/about-component.component').then(
        (mod) => mod.AboutComponentComponent
      ),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }, //Called WildCard
];
```
- Hamne Lazy load kiya hai about page ko

# Create Bin form Page 
- Create Component
```typescript
PS D:\Angular_Tutorial\AngularProject\Project> ng g c components/crateBin
```
- In crate.html and Crate.ts
```typescript
<form class="container" [formGroup]="binForm">
  <h4>Please Login</h4>
  <input type="text" placeholder="Title" [formControl]="title" />
// formControl- FormControl Angular mein ek tarika hai form fields ko handle karne ka
  <h5 class="red-text" [hidden]="title.valid || title.untouched">
    Title is required
  </h5>
   <textarea type="password" placeholder="Code Snippet Here" [formControl]="code" >
</textarea>
//jab aapko long messages ya comments type karne hote hain, text area ka use hota hai.
  <h5 class="red-text" [hidden]="code.valid || code.untouched">
    Code is required
  </h5>

  <button class="btn-green" [disabled]="binForm.invalid" (click)="save()">
    Login
  </button>
</form>
```

```typescript
crate.ts

import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-crate-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crate-bin.component.html',
  styleUrl: './crate-bin.component.css',
})
export class CrateBinComponent {
  title = new FormControl('', [Validators.required]);

  code = new FormControl('', [Validators.required, Validators.minLength(6)]);

  binForm = new FormGroup({
    title: this.title,
    code: this.code,
  });

  save()
  {
    console.log(this.binForm.value)
  }
}

```
- Add in routes in app.routes.ts
```typescript
export const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'crate-bin', component: CrateBinComponent },
  {
    path: 'about-Component',
    loadComponent: () =>
      import('./components/about-component/about-component.component').then(
        (mod) => mod.AboutComponentComponent
      ),
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }, //Called WildCard

];
```
- Add in Navbar. html 
```typescript
export const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'crate-bin', component: CrateBinComponent },
  {
    path: 'about-Component',
    loadComponent: () =>
      import('./components/about-component/about-component.component').then(
        (mod) => mod.AboutComponentComponent
      ),
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }, //Called WildCard

];

```
- CSS ChatGpt se generate karlo

# FireBase Authentication
- Hum 2 Services Banaege
```typescript
PS D:\Angular_Tutorial\AngularProject\Project> ng g s services/auth
// Authentication se related code hum ish service me likhege

PS D:\Angular_Tutorial\AngularProject\Project> ng g s services/db
// Ish service se hum database se save ya get karege
```
- install bireBase in Our Project
```typescript
npm install firebase
```
- Project ke root me ek file create karo FireBaseConfig.ts Root means 
	- node_modules
	- src
	- fireBaseConfig.ts	// Create Config file 
	- .gitIgnore
	- ...
- And ush file me fireBase ka web app configuration daal do
### Example
```typescript
// Yeh sirf example ke liye hai aapke case me alag ho sakta hai
// and ish cofiguration me export keyword aage lagaya hai

export const firebaseConfig = {
    apiKey: "AIzaSyCJZoG6g73tpbj1j05XmJ_T17GZGV8aoIM",
    authDomain: "codebin-ng-nayan.firebaseapp.com",
    projectId: "codebin-ng-nayan",
    storageBucket: "codebin-ng-nayan.firebasestorage.app",
    messagingSenderId: "677595253714",
    appId: "1:677595253714:web:3d302d84c2c913a593960b"
  };
```
- And abb mujhe initilize app call karna hai ye hum app.component.ts me karege
```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseConfig';	// import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {
    initializeApp(firebaseConfig); // initialize fireBase
  }
}
```
- Authentication provide In auth.service.ts. (Code hame firebase me milega)
```typescript
import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
 from 'firebase/auth'; // import

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // for registration of user
  registerUser(email: string, password: string) {
    const auth = getAuth();
    // getAuth call kar rahe hai
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Yaha user sign-in ho jata hai tab hume
        // user ke details milege
        const user = userCredential.user;
        console.log({ user });
      })

      .catch((error) => {
        // agar koi error hota hai user ki details me
        // tab catch block chalega
        const errorMessage = error.message;
        console.log(errorMessage);
        alert('Something went Wrong');
      });
  }

  // Authentication for login-user
  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
       
        const errorMessage = error.message;
        console.log(errorMessage)
        alert("Something went wrong")
      });
  }
}
```

- Call regiter() in sign-up components
```typescript
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  // dependency inject authService
  constructor(private authService:AuthService) {}

  email = new FormControl('', [
    
    Validators.required,
    Validators.email,
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

 
  registerForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  signUp() {
    const email = this.registerForm.value.email || '';
    const password = this.registerForm.value.password || ''
    
    console.log(this.registerForm.value);
    this.authService.registerUser(email, password);
    //Jab user sign is hoga tab yaha se hamne registerUser() function call kiya
    
  }
  reset() {
    this.registerForm.reset();
  }
 
}

```
- After user sign-in we redirect user to /login page
```typescript
authservice.ts

import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'; // import

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  // for registration of user
  registerUser(email: string, password: string) {
    const auth = getAuth();
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        console.log({ user });
        // User jab sign-up hoga then ushe redirect kar dege
        // /login page per
        this.router.navigate(['/login'])
      })

      .catch((error) => {
       
        const errorMessage = error.message;
        console.log(errorMessage);
        alert('Something went Wrong');
      });
  }

  // Authentication for login-user
  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        const user = userCredential.user;
        // User jab sign-up hoga then ushe redirect kar dege
        // /login page per
        this.router.navigate(['/login'])
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert('Something went wrong');
      });
  }
}

```
- UID create
```typescript
import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'; // import

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Agar UID Exist karta hai whiche means user login hai
  private uid?: string;
  constructor(private router: Router) {
    // - Jab kabhi bhi user login karega ya log-out karega
    // tab ye function chalega
    // - Jab kabhi bhi hamara authenticate state change hoga
    // which means either user login, either user sign-up or
    // either user log-out tab ye function chalega

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
        console.log(this.uid);
        console.log('User loggend in as ', user.email);
      } else {
        // jab kabhi user logout hoga tab uid undefined ho jaegi
        this.uid=undefined
        console.log('user logged out');
      }
    });
  }

  // for registration of user
  registerUser(email: string, password: string) {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log({ user });
        this.router.navigate(['/login']);
      })

      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert('Something went Wrong on sign-up');
      });
  }

  // Authentication for login-user
  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert('Something went wrong While login');
      });
  }

  // LogOut function
  logOut() {
    const auth = getAuth();
    signOut(auth).catch((error) => {
      console.log('something went wrong on while Sign Out');
    });
  }
}
```
- Provide Log-out Functinalty
```typescript
navbar.ts

export class NavbarComponent {
  constructor(public authService:AuthService){}
}


```

```typescript
navbar.html

<div>
  <nav>
    <h2><a routerLink="/">CodeBin</a></h2>
    <ul>
      <li> <a routerLink="/crate-bin" routerLinkActive="active">Create-bin</a> </li>
      <li><a routerLink="/login" routerLinkActive="active">Login</a></li>
      <li><a routerLink="/sign-up" routerLinkActive="active">sign-up</a></li>
      <li (click)="authService.logOut()">Log-Out</li>
      <li> <a routerLink="/about-Component" routerLinkActive="active">About</a></li>
    </ul>
  </nav>

  <hr />
</div>


```

- Agar user login nahi hai to user ko kuch hi option dikhe navbar me
```typescript
auth.service.ts

export class AuthService {
  // Agar UID Exist karta hai whiche means user login hai
  private uid?: string;
  constructor(private router: Router) {
    // - Jab kabhi bhi user login karega ya log-out karega
    // tab ye function chalega
    // - Jab kabhi bhi hamara authenticate state change hoga
    // which means either user login, either user sign-up or
    // either user log-out tab ye function chalega

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
        console.log(this.uid);
        console.log('User loggend in as ', user.email);
      } else {
        
        this.uid=undefined
        console.log('user logged out');
      }
    });
  }

  isAuthenticated()
  {
    //Agar user login hai to true return karuga otherwise false return karuga
    return this.uid?true:false;
  }

```

```typescript
navbar.html

<div>
  <nav>
    <h2><a routerLink="/">CodeBin</a></h2>
    <ul>
      <li> <a routerLink="/crate-bin" routerLinkActive="active">Create-bin</a> </li>
      @if(authService.isAuthenticated())
      {
        <li (click)="authService.logOut()">Log-Out</li>
      }
      @else {
        <li><a routerLink="/login" routerLinkActive="active">Login</a></li>
        <li><a routerLink="/sign-up" routerLinkActive="active">sign-up</a></li>
      }
    
      
      <li> <a routerLink="/about-Component" routerLinkActive="active">About</a></li>
    </ul>
  </nav>

  <hr />
</div>


```




