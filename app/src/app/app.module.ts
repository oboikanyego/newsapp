import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { appDeclarations, appBootstrap, appProviders } from './config/declarations';
import { appImportModules } from './config/import-modules';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgImageSliderModule } from 'ng-image-slider';



@NgModule({
  declarations: [...appDeclarations],
  imports: [...appImportModules,NgxPaginationModule,IvyCarouselModule,NgImageSliderModule],
  providers: [...appProviders],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [...appBootstrap]
})
export class AppModule { }
