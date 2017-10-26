import { User } from './../login2/login2.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.css']
})
export class Login3Component implements OnInit {

  @Output() loggedIn = new EventEmitter<User>();
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
    })
  }

  login() {
    console.log(`Login3 ${this.form.value}`);
    if (this.form.valid) {
      this.loggedIn.emit(
        new User (
          this.form.value.email,
          this.form.value.password
        )
      );
    }
  }
}
