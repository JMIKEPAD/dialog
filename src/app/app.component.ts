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

  constructor(public dialog: MatDialog) {}
  opendialog(){
    const dialogRef = this.dialog.open(TaskdialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
