import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-CovidComponent
import { CovidComponent } from '../components/Covid.component';
//CORE_REFERENCE_IMPORT-DashbordComponent
import { DashbordComponent } from '../components/Dashbord.component';
//CORE_REFERENCE_IMPORT-RegisterComponent
import { RegisterComponent } from '../components/Register.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/login.component';
//CORE_REFERENCE_IMPORT-favoritesComponent
import { favoritesComponent } from '../components/favorites.component';
//CORE_REFERENCE_IMPORT-chartsComponent
import { chartsComponent } from '../components/charts.component';
//CORE_REFERENCE_IMPORT-newsReadComponent
import { newsReadComponent } from '../components/newsRead.component';
//CORE_REFERENCE_IMPORT-dynamicDataComponent
import { dynamicDataComponent } from '../components/dynamicData.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-CovidComponent
  CovidComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-DashbordComponent
  DashbordComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-RegisterComponent
  RegisterComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
  loginComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-favoritesComponent
  favoritesComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-chartsComponent
  chartsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-newsReadComponent
  newsReadComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dynamicDataComponent
  dynamicDataComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'home',
    component: homeComponent,
    children: [
      { path: 'cards', component: dynamicDataComponent },
      { path: 'news', component: newsReadComponent },
      { path: 'charts', component: chartsComponent },
      { path: 'favorites', component: favoritesComponent },
      { path: 'dashboard', component: DashbordComponent },
    ],
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: loginComponent },
  { path: 'covid', component: CovidComponent },
  { path: '', redirectTo: '/home/cards', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
