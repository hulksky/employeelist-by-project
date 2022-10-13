import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted:boolean = false;
  changeForm!:FormGroup;

  constructor(private builder:FormBuilder ,private userService:UserService, private router :Router) { }

  ngOnInit(): void { 
    this.changeForm = this.builder.group({
      username:new FormControl("",Validators.required),
      password:new FormControl("",[Validators.required,Validators.minLength(6)])

  
  });}
  
  onSubmit(){

    this.submitted = true;
    if(this.changeForm.invalid){
      return;
    }
    this.userService.login(this.changeForm.value as unknown as User).subscribe(result => {      
      alert('User Login Successfull');
      this.router.navigate(['\home']);
    },err => {
      alert("Worng Username or Password")
      console.log(err);
    })

  }

}
