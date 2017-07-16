import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent implements OnInit {

  indexTranslations = [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
    'Sixth',
    'Seventh',
    'Eight',
    'Ninth',
    'Tenth',
    'Eleventh',
    'Twelve',
    'Thirteen'
  ];

  saved: boolean = false;

  @Input() editMode: boolean = false;
  @Input() showLegend: boolean = false;
  @Input() childIndex: number;
  @Input() isLast: boolean = false;
  @Output() promptForAdditionalChildren = new EventEmitter();
  @Output() cancelAdditionalChild = new EventEmitter();
  @Output() removeChild = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cancel = () => {
    this.cancelAdditionalChild.emit();
  }

  submit = () => {
    this.saved = true;
    this.promptForAdditionalChildren.emit();
  }

  onRollOverRemove = () => {

  }

  onRemoveChild = () => {
    this.removeChild.emit(this.childIndex);
  }

}
