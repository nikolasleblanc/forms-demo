import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildrenFormComponent } from './children-form/children-form.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { ChildFormComponent } from './child-form/child-form.component';
import { BooleanPromptComponent } from './boolean-prompt/boolean-prompt.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildrenFormComponent,
    FormFieldComponent,
    ChildFormComponent,
    BooleanPromptComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
