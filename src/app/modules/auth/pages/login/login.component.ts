import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  sendLogin(): void {
    console.log('Dos formas de obtener los valores');  
    console.log('1ra forma: ', this.miFormulario.get('email')?.value);
    console.log('2da forma: ', this.miFormulario.controls['password'].value);  
  }

}
