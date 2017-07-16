import { Component, OnInit } from '@angular/core';

const childObject = {};

@Component({
  selector: 'app-children-form',
  templateUrl: './children-form.component.html',
  styleUrls: ['./children-form.component.css']
})
export class ChildrenFormComponent implements OnInit {

  hasChildren: boolean = false;
  promptForAdditionalChildren = false;
  savedChild: boolean = false;

  children: Array<any> = [];
  constructor() { }

  private seedChildren = () => {
    return Array.from({length: 1}).map(i => childObject)
  }

  ngOnInit() {}

  addChild = () => {
    this.children = this.children.concat(childObject);
    this.promptForAdditionalChildren = false;
  }

  onRemoveChild = (i) => {
    this.children = [
      ...this.children.slice(0, i),
      ...this.children.slice(i + 1)
    ];
    this.promptForAdditionalChildren = this.children.length === 1;
  }

  onHasChildrenChanged = (event) => {
    if (event.target.value === 'false') {
      this.children = [];
      this.promptForAdditionalChildren = false;
      this.savedChild = false;
    } else {
      this.children = this.seedChildren();
    }
  }

  onHasOtherChildrenChanged = (event) => {
    if (event.target.value === 'true') {
      this.addChild();
    }
  }

  onPromptForAdditionalChanges = () => {
    this.promptForAdditionalChildren = true;
    this.savedChild = true;
  }

  onCancelAdditionalChild = () => {
    this.children = this.children.slice(0, -1);
    this.promptForAdditionalChildren = this.children.length > 0;
    this.hasChildren = this.children.length > 0;
  }

}
