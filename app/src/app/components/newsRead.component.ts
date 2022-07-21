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
  SimpleChanges,
  OnChanges,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-newsRead',
  templateUrl: './newsRead.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class newsReadComponent implements DoCheck {
  @Input('news')
  public news: any = undefined;
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
      this.sd_uaWAnkSZqahEOFcA(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_uaWAnkSZqahEOFcA(bh) {
    try {
      bh = this.sd_SFk3cjIOLpt0URts(bh);
      //appendnew_next_sd_uaWAnkSZqahEOFcA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uaWAnkSZqahEOFcA');
    }
  }

  ngDoCheck() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_U4dsFMJQUzQAW5tL(bh);
      //appendnew_next_ngDoCheck
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Pi5HfcYKh4tcZ5xw');
    }
  }

  //appendnew_flow_newsReadComponent_start

  sd_SFk3cjIOLpt0URts(bh) {
    try {
      this.page.news = undefined;
      //appendnew_next_sd_SFk3cjIOLpt0URts
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SFk3cjIOLpt0URts');
    }
  }

  sd_U4dsFMJQUzQAW5tL(bh) {
    try {
      this.page.news = JSON.parse(sessionStorage.getItem('news'));
      bh = this.sd_Br4GT3JnyA703Oge(bh);
      //appendnew_next_sd_U4dsFMJQUzQAW5tL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_U4dsFMJQUzQAW5tL');
    }
  }

  sd_Br4GT3JnyA703Oge(bh) {
    try {
      const page = this.page;
      page.content = page.news?.content.replace(/ \[[\s\S]*?\]/g, '');
      console.log(page.news?.content.replace(/ \[[\s\S]*?\]/g, ''));
      //appendnew_next_sd_Br4GT3JnyA703Oge
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Br4GT3JnyA703Oge');
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
  //appendnew_flow_newsReadComponent_Catch
}
