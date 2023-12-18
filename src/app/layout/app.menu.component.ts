import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                items: [
                    { label: 'Cadastro de Pastorais', icon: 'pi pi-fw pi-plus', routerLink: ['/pastoralform'] },
                    { label: 'Visualizar Pastorais', icon: 'pi pi-fw pi-list', routerLink: ['/'] },
                    { label: 'Cadastro de Eventos', icon: 'pi pi-fw pi-plus', routerLink: ['/eventform'] },
                    { label: 'Visualizar Eventos', icon: 'pi pi-fw pi-list', routerLink: ['/'] }
                ]
            },
        ];
    }
}
