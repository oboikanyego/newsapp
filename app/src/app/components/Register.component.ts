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
  selector: 'bh-Register',
  templateUrl: './Register.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class RegisterComponent {
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
      this.sd_MwaZdxwoYAaxNZxr(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_MwaZdxwoYAaxNZxr(bh) {
    try {
      bh = this.sd_lXbR9OfaE5yf88hg(bh);
      //appendnew_next_sd_MwaZdxwoYAaxNZxr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MwaZdxwoYAaxNZxr');
    }
  }

  registerSubmit(form: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form };
      bh.local = { result: undefined };
      this.sd_uKDrVyf9HpHb3IdS(bh);
      bh = this.sd_N3AeSiDgw4FHMFp1(bh);
      //appendnew_next_registerSubmit
      return bh.local.result;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Bddc5vWDnF9hFPgY');
    }
  }

  //appendnew_flow_RegisterComponent_start

  sd_lXbR9OfaE5yf88hg(bh) {
    try {
      this.page.register = undefined;
      bh = this.sd_fBXqvMpkkp8CIy2k(bh);
      //appendnew_next_sd_lXbR9OfaE5yf88hg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lXbR9OfaE5yf88hg');
    }
  }

  sd_fBXqvMpkkp8CIy2k(bh) {
    try {
      this.page.addUserPath = 'addUser';
      this.page.postMethod = 'POST';
      bh = this.sd_X2U0NrRPoQ7a9jkA(bh);
      //appendnew_next_sd_fBXqvMpkkp8CIy2k
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fBXqvMpkkp8CIy2k');
    }
  }

  sd_X2U0NrRPoQ7a9jkA(bh) {
    try {
      const page = this.page;
      page.register = {
        fullname: '',
        email: '',
        password: '',
      };
      //appendnew_next_sd_X2U0NrRPoQ7a9jkA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X2U0NrRPoQ7a9jkA');
    }
  }

  sd_uKDrVyf9HpHb3IdS(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.input.form);
      //appendnew_next_sd_uKDrVyf9HpHb3IdS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uKDrVyf9HpHb3IdS');
    }
  }

  async sd_N3AeSiDgw4FHMFp1(bh) {
    try {
      const getnewsInstance: getnews = this.__page_injector__.get(getnews);

      let outputVariables = await getnewsInstance.dynamicApiCall(
        this.page.addUserPath,
        bh.input.form,
        this.page.postMethod
      );
      bh.local.respose = outputVariables.local.results;

      bh = this.sd_xdE0KrQPG6sJmV5W(bh);
      //appendnew_next_sd_N3AeSiDgw4FHMFp1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_N3AeSiDgw4FHMFp1');
    }
  }

  sd_xdE0KrQPG6sJmV5W(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Succefully Registered', 'ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_VZTqKgNNBkHfZyn2(bh);
      //appendnew_next_sd_xdE0KrQPG6sJmV5W
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xdE0KrQPG6sJmV5W');
    }
  }

  async sd_VZTqKgNNBkHfZyn2(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_VZTqKgNNBkHfZyn2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VZTqKgNNBkHfZyn2');
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
  //appendnew_flow_RegisterComponent_Catch
}
