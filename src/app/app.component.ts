
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'pastoralcontrol';

  constructor(private primeNGConfig: PrimeNGConfig){ }

  ngOnInit() {
    this.primeNGConfig.ripple = true;
}
}
