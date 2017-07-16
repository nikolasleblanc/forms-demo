import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildrenComponent } from './children/children.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { ChildFormComponent } from './child-form/child-form.component';
import { ChildPromptComponent } from './child-prompt/child-prompt.component';
import { AdditionalChildrenPromptComponent } from './additional-children-prompt/additional-children-prompt.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildrenComponent,
    FormFieldComponent,
    ChildFormComponent,
    ChildPromptComponent,
    AdditionalChildrenPromptComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
