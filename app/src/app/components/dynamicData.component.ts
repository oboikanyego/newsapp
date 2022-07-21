/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  DoCheck,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { NgxPaginationModule } from 'ngx-pagination'; //_splitter_
import { getnews } from 'app/sd-services/getnews'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-dynamicData',
  templateUrl: './dynamicData.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dynamicDataComponent implements DoCheck {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_l5TnKZtZrjxC0Z1S(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_l5TnKZtZrjxC0Z1S(bh) {
    try {
      bh = this.sd_Bf57H4aAsnOZn3r3(bh);
      //appendnew_next_sd_l5TnKZtZrjxC0Z1S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l5TnKZtZrjxC0Z1S');
    }
  }

  ngDoCheck() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_ZvoBUamBHz29Uq2z(bh);
      //appendnew_next_ngDoCheck
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vmKwVKlblg2cSKui');
    }
  }

  //appendnew_flow_dynamicDataComponent_start

  sd_Bf57H4aAsnOZn3r3(bh) {
    try {
      this.page.curDate = undefined;
      this.page.cardArr = undefined;
      this.page.data = undefined;
      this.page.p = 1;
      bh = this.sd_JwIaOfUoojdvuJuc(bh);
      //appendnew_next_sd_Bf57H4aAsnOZn3r3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Bf57H4aAsnOZn3r3');
    }
  }

  sd_JwIaOfUoojdvuJuc(bh) {
    try {
      this.page.paginate = this.__page_injector__.get(NgxPaginationModule);
      bh = this.sd_KpJrsOY8RLSsgz0j(bh);
      //appendnew_next_sd_JwIaOfUoojdvuJuc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JwIaOfUoojdvuJuc');
    }
  }

  async sd_KpJrsOY8RLSsgz0j(bh) {
    try {
      const getnewsInstance: getnews = this.__page_injector__.get(getnews);

      let outputVariables = await getnewsInstance.getBycountry();
      this.page.cardArr = outputVariables.local.result;

      //appendnew_next_sd_KpJrsOY8RLSsgz0j
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KpJrsOY8RLSsgz0j');
    }
  }

  sd_ZvoBUamBHz29Uq2z(bh) {
    try {
      const getnewsInstance: getnews = this.__page_injector__.get(getnews);
      this.page.client = getnewsInstance['clientdata'];
      bh = this.sd_9Z69UmsyjZV2LNN5(bh);
      //appendnew_next_sd_ZvoBUamBHz29Uq2z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZvoBUamBHz29Uq2z');
    }
  }

  sd_9Z69UmsyjZV2LNN5(bh) {
    try {
      const page = this.page;
      console.log('client data :', page.client);
      bh = this.sd_R3ToJJCmJDUBIUtu(bh);
      //appendnew_next_sd_9Z69UmsyjZV2LNN5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9Z69UmsyjZV2LNN5');
    }
  }

  sd_R3ToJJCmJDUBIUtu(bh) {
    try {
      if (
        this.sdService.operators['nnull'](
          this.page.client,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_NUNaiuZXP96owFsF(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R3ToJJCmJDUBIUtu');
    }
  }

  sd_NUNaiuZXP96owFsF(bh) {
    try {
      const page = this.page;
      page.cardArr = page.client;
      console.log('data of catergory:', page.cardArr);

      //appendnew_next_sd_NUNaiuZXP96owFsF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NUNaiuZXP96owFsF');
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
  //appendnew_flow_dynamicDataComponent_Catch
}
