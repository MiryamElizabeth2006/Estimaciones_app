import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { EstimacionAppComponent } from './app/components/estamacion-app/estamacion-app.component';

bootstrapApplication(EstimacionAppComponent, appConfig)
  .catch((err) => console.error(err));
