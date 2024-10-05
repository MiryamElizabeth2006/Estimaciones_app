import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { EstimacionAppComponent } from './app/components/estamacion-app/estamacion-app.component';

const bootstrap = () => bootstrapApplication(EstimacionAppComponent, config);

export default bootstrap;
