import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventFormComponent } from './event-form.component';

@NgModule({
    imports:
    [RouterModule.forChild([
        { path: '', component: EventFormComponent }
    ])],
    exports: [RouterModule]
})
export class EventFormRoutingModule { }