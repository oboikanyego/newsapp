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
import { Router } from '@angular/router'; //_splitter_
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

  loginSubmit(form: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form };
      bh.local = {};
      bh = this.sd_i1iUqqgZojeVq0p2(bh);
      //appendnew_next_loginSubmit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gGrs9dABGTysGrjq');
    }
  }

  //appendnew_flow_loginComponent_start

  sd_9zxCBLLwzo5dC2nS(bh) {
    try {
      this.page.login = undefined;
      bh = this.sd_R2Ttzd2WsRFYuvaE(bh);
      //appendnew_next_sd_9zxCBLLwzo5dC2nS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9zxCBLLwzo5dC2nS');
    }
  }

  sd_R2Ttzd2WsRFYuvaE(bh) {
    try {
      this.page.addUserPath = 'login';
      this.page.postMethod = 'POST';
      bh = this.sd_TWdWgLHvEIZ7yvS1(bh);
      //appendnew_next_sd_R2Ttzd2WsRFYuvaE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R2Ttzd2WsRFYuvaE');
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

  async sd_i1iUqqgZojeVq0p2(bh) {
    try {
      const getnewsInstance: getnews = this.__page_injector__.get(getnews);

      let outputVariables = await getnewsInstance.dynamicApiCall(
        this.page.addUserPath,
        bh.input.form,
        this.page.postMethod
      );
      this.page.currentUser = outputVariables.local.results;

      bh = this.sd_TuWHcsbimNnkmY2Z(bh);
      //appendnew_next_sd_i1iUqqgZojeVq0p2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_i1iUqqgZojeVq0p2');
    }
  }

  sd_TuWHcsbimNnkmY2Z(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Login was a success', 'ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_QZehhs2Xt5ZHzSTE(bh);
      //appendnew_next_sd_TuWHcsbimNnkmY2Z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TuWHcsbimNnkmY2Z');
    }
  }

  sd_QZehhs2Xt5ZHzSTE(bh) {
    try {
      const page = this.page;
      page.currentUser = page.currentUser[0];
      console.log(page.currentUser);
      bh = this.sd_cvRjBGk7p2sNqf1A(bh);
      //appendnew_next_sd_QZehhs2Xt5ZHzSTE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QZehhs2Xt5ZHzSTE');
    }
  }

  sd_cvRjBGk7p2sNqf1A(bh) {
    try {
      sessionStorage.setItem(
        'currentUser',
        JSON.stringify(this.page.currentUser)
      );
      bh = this.sd_7kvjkWmzwo2p5BOF(bh);
      //appendnew_next_sd_cvRjBGk7p2sNqf1A
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cvRjBGk7p2sNqf1A');
    }
  }

  async sd_7kvjkWmzwo2p5BOF(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/cards');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_7kvjkWmzwo2p5BOF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7kvjkWmzwo2p5BOF');
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
