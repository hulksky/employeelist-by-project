import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projList! : Project[];


  constructor(private projService : ProjectService) { }

  ngOnInit(): void {
    this.projService.getList().subscribe(list =>{
      this.projList = list;
      console.log(list);


    },err => {
      console.log(err);
    })
  }
  delete(id:number){
    if(confirm('Do you really want to delete?')){
      console.log('deleting');
      this.projService.delete(id).subscribe(result=>{
        alert('Project Deleted');
        this,this.ngOnInit();
       
      },err=>{
        console.log(err);
        alert('Delete Failed');
      })
    }
  }

}
