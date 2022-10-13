import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  projForm! : FormGroup;

  constructor(private projService : ProjectService,
    private router : Router) { }

  ngOnInit(): void {
    this.projForm =new FormGroup({
      "name": new FormControl("", Validators.required),
      "domain" : new FormControl("", Validators.required)

    });
    
  }

  onSubmit(){
    console.log(this.projForm);
    this.projService.add(this.projForm.value as unknown as Project).subscribe(res=>{
      alert("Project added successfully");
      this.router.navigate(['/projects']);
    
    
    }, err=>{
      //alert(err);
      console.log(err)
    
    })

  }

}