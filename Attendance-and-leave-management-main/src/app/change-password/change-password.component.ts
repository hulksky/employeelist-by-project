import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changeForm!:FormGroup;
  submitted:boolean = false;
  empid !:number;

  constructor(private userService:UserService,private builder:FormBuilder,private route:ActivatedRoute,private router:Router) {
    
   }



  ngOnInit(): void {
    //this.empid = 3;
    var values = JSON.parse(localStorage.getItem('UserInfo') || '{}');    
    this.empid = values.employeeId;

    this.userService.getListById(this.empid).subscribe(emp =>{
    this.changeForm = this.builder.group({
      id: new FormControl(emp.id),
      username:new FormControl(emp.username),
      employeeId:new FormControl(emp.employeeId,Validators.required),
      password:new FormControl("",[Validators.required,Validators.minLength(6)]),
      role:new FormControl(emp.role),
      confirmPass:new FormControl("",[Validators.required]),
    },{validators: this.MustMatch('password', 'confirmPass')});
  });
}

  MustMatch(controlName:string,matching:string){
    return(formGroup:FormGroup) => {
      const control = formGroup.controls[controlName];
      const Matchcontrol = formGroup.controls[matching];

      if(Matchcontrol.errors && !Matchcontrol.errors?.['MustMatch']){
        return
    }
    if(control.value != Matchcontrol.value){
      Matchcontrol.setErrors({MustMatch:true})
    }
    else{
      Matchcontrol.setErrors(null);
    }
  }
}
  onSubmit(){
    this.submitted = true;
    if(this.changeForm.invalid){
      return;
    }
    console.log(this.changeForm.value as unknown as User );
    this.userService.changePassowrd(this.changeForm.value as unknown as User).subscribe(result => {      
      alert('Password Change Successfull');
      this.router.navigate(['']);
    },err => {


    })
  }

}
