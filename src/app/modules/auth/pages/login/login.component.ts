import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

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

  constructor(
    private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  sendLogin(): void {
    const {email, password} = this.miFormulario.value;
    this.authService.sendCredentials(email, password);
  }

}
