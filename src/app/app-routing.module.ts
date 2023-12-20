import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { EventFormModule } from './components/event-form/event-form.module';

@NgModule({
    imports: [
        RouterModule.forRoot([

            {path: '', component: AppLayoutComponent,
                children: [
                    { path: 'notfound', component: NotfoundComponent },
                    { path: 'pastoralform', loadChildren: () => import('../app/components/pastoral-form/pastoral-form.module').then(m => m.PastoralFormModule) },
                    { path: 'eventform', loadChildren: () => import('../app/components/event-form/event-form.module').then(m => m.EventFormModule) },
                ]},
            { path: '', component: AppLayoutComponent, },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}