import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PastoralFormComponent } from './pastoral-form.component';
import { FormsModule } from '@angular/forms';
import { PastoralInputSwitchComponent } from '../utils/pastoral-input-switch/pastoral-input-switch.component';
import { PastoralFieldGroupComponent } from '../utils/pastoral-field-group/pastoral-field-group.component';

@NgModule({
    imports:
    [RouterModule.forChild([
        { path: '', component: PastoralFormComponent }
    ])],
    exports: [RouterModule]
})
export class PastoralFormRoutingModule { }