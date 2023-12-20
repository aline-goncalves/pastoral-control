import { Component, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastoralFormRoutingModule } from './pastoral-form-routing.module';
import { PastoralFormComponent } from './pastoral-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { ComponentsUtilsModule } from '../utils/components-utils.module';

@NgModule({
    imports: [
        CommonModule,
        PastoralFormRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        InputSwitchModule,
        ButtonModule,
        ComponentsUtilsModule
    ],
    declarations: [ PastoralFormComponent],
    exports: [ PastoralFormComponent]
})
export class PastoralFormModule { }
