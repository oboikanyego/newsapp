/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewChildren,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterViewInit,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
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
      this.sd_63p9m6dPKPajpQL0(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_63p9m6dPKPajpQL0(bh) {
    try {
      bh = this.sd_9zxCBLLwzo5dC2nS(bh);
      //appendnew_next_sd_63p9m6dPKPajpQL0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_63p9m6dPKPajpQL0');
    }
  }

  //appendnew_flow_loginComponent_start

  sd_9zxCBLLwzo5dC2nS(bh) {
    try {
      this.page.login = undefined;
      bh = this.sd_TWdWgLHvEIZ7yvS1(bh);
      //appendnew_next_sd_9zxCBLLwzo5dC2nS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9zxCBLLwzo5dC2nS');
    }
  }

  sd_TWdWgLHvEIZ7yvS1(bh) {
    try {
      const page = this.page;
      page.login = {
        email: '',
        password: '',
      };
      //appendnew_next_sd_TWdWgLHvEIZ7yvS1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TWdWgLHvEIZ7yvS1');
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
  //appendnew_flow_loginComponent_Catch
}
