import { animate, animation, state, style, transition, trigger } from '@angular/animations';

import { Component,Output, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [ 
    trigger('visibleInvisible', [
    state('visible', style({
      // opacity: 1,
      top:'0px',
      
    })),
    state('invisible', style({
      // opacity: 0,
      top:'-100vh',
        
    })),
    transition('visible => invisible', [
      animate('1s')
    ]),
    transition('invisible => visible', [
      animate('1s')
    ]),
  ])]
})
export class DialogComponent implements OnInit {

  constructor() { }

  @Input() visibilityState='visible'
  @Output() closedwithResult = new EventEmitter<string>()

  ngOnInit(): void {
  }

  closeDialog(result?: string){
    if (result) {
      this.closedwithResult.emit(result);
    }
    this.visibilityState = 'invisible'
  }


}


