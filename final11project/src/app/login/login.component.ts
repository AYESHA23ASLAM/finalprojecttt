import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      password: ''
    })
  }
  
  output: any;

  validate(email: HTMLInputElement, password: HTMLInputElement) {
    
    if(email.value === "bscsf1611@gmail.com" && password.value === "kuchbhi") {
      this.http.get("http://www.mocky.io/v2/5c86a945340000651c89c20d", {responseType: 'text'}).subscribe( e => this.output = (e));
      window.location.replace('http://localhost:4200/dashboard');
      return false;
    } else {
      alert("Failed To Login!");
    }
  }

}
