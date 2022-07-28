/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  DoCheck,
  AfterViewInit,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { getnews } from 'app/sd-services/getnews'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-favorites',
  templateUrl: './favorites.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class favoritesComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_s3s3HJYEoWkKsasF(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_s3s3HJYEoWkKsasF(bh) {
    try {
      bh = this.sd_Ti0jcBdx7NGO7MRe(bh);
      //appendnew_next_sd_s3s3HJYEoWkKsasF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s3s3HJYEoWkKsasF');
    }
  }

  deleteFavorite(favorite: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { favorite: favorite };
      bh.local = {};
      bh = this.sd_ZfAoqyOUiRiJuJ9J(bh);
      //appendnew_next_deleteFavorite
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IA5hdJHg1QYBhtcs');
    }
  }

  //appendnew_flow_favoritesComponent_start

  sd_Ti0jcBdx7NGO7MRe(bh) {
    try {
      this.page.favorites = [];
      bh = this.sd_o2P37ZKPthAeafoi(bh);
      //appendnew_next_sd_Ti0jcBdx7NGO7MRe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ti0jcBdx7NGO7MRe');
    }
  }

  async sd_o2P37ZKPthAeafoi(bh) {
    try {
      const getnewsInstance: getnews = this.__page_injector__.get(getnews);

      let outputVariables = await getnewsInstance.getFavorites();
      this.page.favorites = outputVariables.local.result;

      //appendnew_next_sd_o2P37ZKPthAeafoi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_o2P37ZKPthAeafoi');
    }
  }

  async sd_ZfAoqyOUiRiJuJ9J(bh) {
    try {
      const getnewsInstance: getnews = this.__page_injector__.get(getnews);

      let outputVariables = await getnewsInstance.removeFavorite(
        bh.input.favorite
      );
      bh.response = outputVariables.local.result;

      bh = this.sd_AwOD6ApbqJCgy8qK(bh);
      //appendnew_next_sd_ZfAoqyOUiRiJuJ9J
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZfAoqyOUiRiJuJ9J');
    }
  }

  sd_AwOD6ApbqJCgy8qK(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.response.message, 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_o2P37ZKPthAeafoi(bh);
      //appendnew_next_sd_AwOD6ApbqJCgy8qK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AwOD6ApbqJCgy8qK');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_favoritesComponent_Catch
}
