import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { BasicReport } from '../BasicReport';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['../app.component.scss']
})
export class MainMenuComponent implements OnInit {
  loginUser : boolean  = true;
  report : boolean = false ;
  cmId ="";
  cmName ="";
  symbol="";
  margin=0;
  exposure=0;
  exposureDemand=0;
   basicReport: any={
    cmId : "",
    cmName: "",
    symbol: "",
    margin: "",
    exposure: ""
   };


  constructor(private router: Router, private userservice: UserService ) { 
    this.loginUser=true;
  }

  ngOnInit(): void {
    debugger;
  }
  userlogin = true;
  userregister = false;
  //Buttons clicks functionalities 
  user_register()
  {
    this.userlogin = false;
    this.userregister = true;
  }
  user_login()
  {
    this.userlogin = true;
    this.userregister = false;
  }

  
  Report()
    {
      this.report = true;
    }
    public onAddEmployee():void{

      this.basicReport.cmId = this.cmId;
      this.basicReport.cmName = this.cmName;
      this.basicReport.margin = this.margin;
      this.basicReport.exposure = this.exposure;
      this.basicReport.symbol = this.symbol;
      this.basicReport.exposureDemand = this.exposureDemand;
      this.userservice.addEmployee(this.basicReport).subscribe(
        (response: BasicReport) => {
          console.log(response);
          //this.router.navigate(['/user']);
          alert("Record added successfully!");
          this.cmId="";
          this.cmName="";
          this.exposure=0;
          this.exposureDemand=0;
          this.margin=0;
          this.symbol="";

        },
        (errorResponse: HttpErrorResponse) => {
          alert(errorResponse.message);
        }
      )
    }

    Fecth(){
      this.router.navigate(['/user']);
    }
  
}
