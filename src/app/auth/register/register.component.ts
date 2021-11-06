import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    UserImage:new FormControl('',[Validators.required]),
    Gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    Age: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required,
    Validators.minLength(8)]),

    })
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.registerForm.controls);
  }

}
