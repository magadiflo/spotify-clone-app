import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    email: ['test@test.com', [Validators.required, Validators.email]],
    password: ['12345678', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
  });
  errorSession: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private cookie: CookieService) { }

  ngOnInit(): void {
  }

  sendLogin(): void {
    const {email, password} = this.miFormulario.value;
    this.authService.sendCredentials(email, password)
      .subscribe(resp => {
        if(resp !== false){
          const { tokenSession, data }  = resp;
          this.cookie.set('token', tokenSession, 4, '/');
        } else {
          this.errorSession = true;  
        }
      });
  }

}
