import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-prompt',
  templateUrl: './child-prompt.component.html',
  styleUrls: ['./child-prompt.component.css']
})
export class ChildPromptComponent implements OnInit {

  @Output() hasChildrenChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
