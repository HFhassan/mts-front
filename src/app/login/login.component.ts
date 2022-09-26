import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.scss']
})
export class LoginComponent implements OnInit {

  loginUser: boolean = true;
  name: string = "";
  password: string = "";
  newUser: any = { name: this.name, role: this.password };

  constructor(private route: Router, private formBuilder: FormBuilder, private userService: UserService) {
    this.loginUser = true;

  }

  ngOnInit(): void {

  }
  userlogin = true;
  userregister = false;
  //Buttons clicks functionalities 
  user_register() {
    this.userlogin = false;
    this.userregister = true;
  }
  user_login() {
    this.userlogin = true;
    this.userregister = false;
  }
  Next() {

    //debugger;
    // console.log(this.name, "name is this");
    // this.userService.getLogin(this.name).subscribe(
    //   (response: any) => {
    //     //debugger
    //     console.log(response);
    //     if (this.password != response[0].password) {
    //       alert("Inavlid username or password");

    //     }
    //     else {
          this.route.navigate(['/report']);
          this.loginUser = false;
    //     }
    //   }
    //   ,
    //   (errorResponse: HttpErrorResponse) => {
    //     console.log(errorResponse.message);
    //     alert("Inavlid username or password");
    //   }
    // )
  }
  goPost() {
    this.userService.getLogin(this.name);

    // ((data:any ) => this.newUser.push(data));
  }
}
