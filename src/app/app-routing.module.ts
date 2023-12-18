import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { PastoralFormComponent } from './components/pastoral-form/pastoral-form.component';
import { EventFormComponent } from './components/event-form/event-form.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: AppLayoutComponent, },
            { path: 'notfound', component: NotfoundComponent },
            { path: 'pastoralform', component: PastoralFormComponent},
            { path: 'eventform', component: EventFormComponent},
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}