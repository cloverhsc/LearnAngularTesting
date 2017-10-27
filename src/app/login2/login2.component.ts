import { Component, OnInit,
  Input, Output, EventEmitter } from '@angular/core';

export class User {
  constructor(public email: string, public password: string) { }
}

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  @Output() loggedIn = new EventEmitter<User>();
  @Input() enabled = true;

  constructor() { }

  ngOnInit() {
  }

  login(email, password) {
    // console.log(`Login ${email} ${password}`);
    if (email && password) {
      console.log(`Emitting`);
      this.loggedIn.emit(new User(email, password));
    }
  }
}
