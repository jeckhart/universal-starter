import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <p>Hello Angular Universal App</p>
  <nav>
    <a [routerLink]="['/']">
      Home
    </a>
    |
    <a [routerLink]="['/about']">
      About
    </a>
    |
    <a [routerLink]="['/github', 'angular']">
      Github Repos
    </a>
  </nav>
  <main>
    <router-outlet></router-outlet>
  </main>
  <footer>
    © 2016
  </footer>  `
})
export class App {

}

@Component({
  selector: 'home',
  template: 'Home component'
})
export class Home {

}
