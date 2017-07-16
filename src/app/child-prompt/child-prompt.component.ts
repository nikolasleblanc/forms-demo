import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child-prompt',
  templateUrl: './child-prompt.component.html',
  styleUrls: ['./child-prompt.component.css']
})
export class ChildPromptComponent implements OnInit {

  @Input() question: string = '';
  @Output() selectionChanged = new EventEmitter();
  @Output() hasChildrenChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
