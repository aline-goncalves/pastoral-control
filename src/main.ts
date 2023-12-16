import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'node_modules/zone.js'; 
import 'node_modules/zone.js/testing';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));