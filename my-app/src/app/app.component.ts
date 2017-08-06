import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  // styleUrls: ['./heroes.component.css'],
  // template: `
  //   <h1>{{title}}</h1>
  //   <a routerLink="/heroes">Heroes</a>
  //   <router-outlet></router-outlet>
  // `
  
})
export class AppComponent{
  title = 'Tour of Heroes';
  
}