import { Component } from '@angular/core';
import {UsersService} from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zadanie-rekrutacyjne';
  doggos = [];
  constructor(private user: UsersService) {
    this.user.getData().subscribe(data => {
      console.log(data)
    })
  }
}
