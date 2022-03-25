import { NgModule } from '@angular/core';
import { TaskdialogComponent } from './components/taskdialog.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TaskdialogComponent
  ],
  imports: [
    SharedModule
  ]
})
export class TaskdialogModule { }
