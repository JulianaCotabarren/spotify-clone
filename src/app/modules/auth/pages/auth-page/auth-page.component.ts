import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit{
  errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({})

  constructor(
    private authService: AuthService,
    private cookie: CookieService
  ){

  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    })
  }

  sendLogin(): void{
    const {email, password} = this.formLogin.value
    this.authService.sendCredentials(email, password).subscribe(responseOk => {
      console.log('Sesión iniciada exitosamente', responseOk);
      const {tokenSession, data} = responseOk
      this.cookie.set('token', tokenSession, 4, '/')
    }, 
    err => {
      this.errorSession = true
      console.log('Ocurrió un error en el login', err);      
    })   
  }
}
