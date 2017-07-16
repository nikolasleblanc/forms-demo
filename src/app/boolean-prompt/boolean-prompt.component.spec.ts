import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanPromptComponent } from './boolean-prompt.component';

describe('BooleanPromptComponent', () => {
  let component: BooleanPromptComponent;
  let fixture: ComponentFixture<BooleanPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooleanPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
