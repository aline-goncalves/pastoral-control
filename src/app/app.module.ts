import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PastoralFormComponent } from './components/pastoral-form/pastoral-form.component';
import { PastoralHeaderComponent } from './components/pastoral-header/pastoral-header.component';
import { PastoralFooterComponent } from './components/pastoral-footer/pastoral-footer.component';
import { PastoralFieldGroupComponent } from './components/pastoral-field-group/pastoral-field-group.component';

import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { PastoralInputSwitchComponent } from './components/pastoral-input-switch/pastoral-input-switch.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    PastoralFormComponent,
    PastoralHeaderComponent,
    PastoralFooterComponent,
    PastoralFieldGroupComponent,
    PastoralInputSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputSwitchModule,
    ReactiveFormsModule,
    ButtonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
