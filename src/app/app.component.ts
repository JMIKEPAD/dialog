import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskdialogComponent } from './taskdialog/components/taskdialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-dialog';

  dialogVisibility = 'visible'
  public taskList: string[] = [];
  constructor(public dialog: MatDialog) {}
  opendialog(){
    if (this.dialogVisibility === 'invisible') {
      this.dialogVisibility = 'visible'
    } else{
      this.dialogVisibility = 'invisible'
    }
    // const dialogRef = this.dialog.open(TaskdialogComponent, {
    //   width: '250px',
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   // console.log('The dialog was closed')
    //   ;
    // });
  }
  displaydialogResult(result:string){
console.log(result);

  }
}
