import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalChildrenPromptComponent } from './additional-children-prompt.component';

describe('AdditionalChildrenPromptComponent', () => {
  let component: AdditionalChildrenPromptComponent;
  let fixture: ComponentFixture<AdditionalChildrenPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalChildrenPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalChildrenPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
