import { Component } from '@angular/core';

export class Hero{	
	id: number;
	name:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`<h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>Name: </label>{{hero.name}}</div>`
})
export class AppComponent {
  title = 'My First Angular App';
  hero : Hero = {
  	id:1,
  	name: 'Windstorm'

  };
}

