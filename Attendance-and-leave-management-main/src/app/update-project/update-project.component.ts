import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  projForm! : FormGroup;

  constructor(private projService : ProjectService,
    private router : Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    let projId = this.route.snapshot.params['id'];
    console.log('Proj id'+ projId);
    this.projService.getById(projId).subscribe(proj=>{
    this.projForm =new FormGroup({
      "id": new FormControl(proj.id),
      "name": new FormControl(proj.name, Validators.required),
      "domain" : new FormControl(proj.domain, Validators.required)

    });
  },err =>{
    alert(err);
    console.log(err);
  } )
  }

  onSubmit(){
    console.log(this.projForm);
    this.projService.update(this.projForm.value as unknown as Project).subscribe(res=>{
      alert("Project updated successfully");
      this.router.navigate(['/projects']);
    
    
    }, err=>{
      //alert(err);
      console.log(err)
    
    })

  }
}