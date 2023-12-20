import { Component, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PastoralInputSwitchComponent } from './pastoral-input-switch/pastoral-input-switch.component';
import { PastoralFieldGroupComponent } from './pastoral-field-group/pastoral-field-group.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { EventFormRoutingModule } from '../event-form/event-form-routing.module';


const COMPONENTS = [
    PastoralInputSwitchComponent,
    PastoralFieldGroupComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InputSwitchModule,
        ButtonModule,
        EventFormRoutingModule
    ],
    declarations: [COMPONENTS ],
    exports: [COMPONENTS]
})
export class ComponentsUtilsModule { }
