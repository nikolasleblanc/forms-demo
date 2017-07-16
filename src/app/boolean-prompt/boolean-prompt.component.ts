import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-boolean-prompt',
  templateUrl: './boolean-prompt.component.html',
  styleUrls: ['./boolean-prompt.component.css']
})
export class BooleanPromptComponent implements OnInit {

  @Input() question: string = '';
  @Output() selectionChanged = new EventEmitter();
  @Output() hasChildrenChanged = new EventEmitter();
  guid: string = Date.now().toString();

  constructor() { }

  ngOnInit() {
  }

}
