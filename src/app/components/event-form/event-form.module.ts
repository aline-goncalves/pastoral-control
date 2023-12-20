import { Component, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { EventFormRoutingModule } from '../event-form/event-form-routing.module';
import { EventFormComponent } from '../event-form/event-form.component';
import { ComponentsUtilsModule } from '../utils/components-utils.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InputSwitchModule,
        ButtonModule,
        EventFormRoutingModule,
        ComponentsUtilsModule
    ],
    declarations: [ EventFormComponent ],
    exports: [ EventFormComponent]
})
export class EventFormModule { }