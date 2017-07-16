import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPromptComponent } from './child-prompt.component';

describe('ChildPromptComponent', () => {
  let component: ChildPromptComponent;
  let fixture: ComponentFixture<ChildPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
