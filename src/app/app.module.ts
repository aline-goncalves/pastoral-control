import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PastoralFormComponent } from './components/pastoral-form/pastoral-form.component';
import { PastoralHeaderComponent } from './components/pastoral-header/pastoral-header.component';
import { PastoralFooterComponent } from './components/pastoral-footer/pastoral-footer.component';
import { PastoralFieldGroupComponent } from './components/pastoral-field-group/pastoral-field-group.component';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [
    AppComponent,
    PastoralFormComponent,
    PastoralHeaderComponent,
    PastoralFooterComponent,
    PastoralFieldGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
