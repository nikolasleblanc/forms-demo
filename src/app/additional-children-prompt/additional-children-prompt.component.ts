import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-additional-children-prompt',
  templateUrl: './additional-children-prompt.component.html',
  styleUrls: ['./additional-children-prompt.component.css']
})
export class AdditionalChildrenPromptComponent implements OnInit {

  @Output() hasOtherChildrenChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
