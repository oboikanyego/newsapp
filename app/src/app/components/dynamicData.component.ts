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
import { NgxPaginationModule } from 'ngx-pagination'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-dynamicData',
  templateUrl: './dynamicData.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dynamicDataComponent implements OnChanges {
  @Input('data')
  public data: any = undefined;
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

  ngOnChanges(changes: SimpleChanges) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.changes = changes;
      bh = this.sd_HUAcT45XpTTaPeG7(bh);
      //appendnew_next_ngOnChanges
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DrwvltqBH1RlPSHs');
    }
  }

  sendDatatNews(news: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { news: news };
      bh.local = {};
      bh = this.sd_Ikd3xfE2DVjhNeuP(bh);
      //appendnew_next_sendDatatNews
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cSt2brPaeleihhW1');
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
      //appendnew_next_sd_JwIaOfUoojdvuJuc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JwIaOfUoojdvuJuc');
    }
  }

  sd_HUAcT45XpTTaPeG7(bh) {
    try {
      const page = this.page;
      page.cardArr = bh.changes.data.currentValue.articles;
      //appendnew_next_sd_HUAcT45XpTTaPeG7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HUAcT45XpTTaPeG7');
    }
  }

  sd_Ikd3xfE2DVjhNeuP(bh) {
    try {
      sessionStorage.setItem('news', JSON.stringify(bh.input.news));
      //appendnew_next_sd_Ikd3xfE2DVjhNeuP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ikd3xfE2DVjhNeuP');
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
