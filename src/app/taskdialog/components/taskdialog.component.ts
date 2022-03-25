import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/model/tag';
import { Task } from 'src/app/model/task';
import { Api2Service } from 'src/app/services/api2.service';
@Component({
  selector: 'app-taskdialog',
  templateUrl: './taskdialog.component.html',
  styleUrls: ['./taskdialog.component.scss']
})
export class TaskdialogComponent{

  public taskList: Task[] = [];
  public taskModel = {id:"",name: "",priority: 0}
  constructor() {}
  public tags: Tag[] = [{name: "scuola", isSelected: false},
  {name: "lavoro", isSelected: false},
  {name: "casa", isSelected: false}];  

  public selectedTags:Tag[] = []
  selectTag(tag: Tag){
    if (tag.isSelected) {
      tag.isSelected = false;
      const indexToRemove = this.selectedTags.indexOf(tag);
      if (indexToRemove !== -1) {
        this.selectedTags.splice(indexToRemove, 1);
      }
    } else {
      tag.isSelected = true;
      this.selectedTags.push(tag)
    }
  }
  log(){
    const newTask = new Task('',this.taskModel.name, this.taskModel.priority,);
    if (this.selectedTags.length > 0) {
      const tags = this.selectedTags.map(t => t.name);
      newTask.tags = tags
    console.log(newTask);
  };
  


}
}