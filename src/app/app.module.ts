import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PastoralFormComponent } from './components/pastoral-form/pastoral-form.component';
import { PastoralHeaderComponent } from './components/pastoral-header/pastoral-header.component';
import { PastoralFooterComponent } from './components/pastoral-footer/pastoral-footer.component';
import { PastoralFieldGroupComponent } from './components/pastoral-field-group/pastoral-field-group.component';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { PastoralInputSwitchComponent } from './components/pastoral-input-switch/pastoral-input-switch.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLayoutModule } from './layout/app.layout.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PastoralFormComponent,
    PastoralHeaderComponent,
    PastoralFooterComponent,
    PastoralFieldGroupComponent,
    PastoralInputSwitchComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    FormsModule,
    InputSwitchModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  providers:  [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
