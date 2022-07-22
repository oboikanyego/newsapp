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
  SimpleChanges,
  OnChanges,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { NgxPaginationModule } from 'ngx-pagination'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { getnews } from 'app/sd-services/getnews'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-dynamicData',
  templateUrl: './dynamicData.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dynamicDataComponent implements OnChanges, DoCheck {
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

  ngDoCheck() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_s80QsHaCA0t9cS0R(bh);
      //appendnew_next_ngDoCheck
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LGAhOAzRBd3mykPl');
    }
  }

  //appendnew_flow_dynamicDataComponent_start

  sd_Bf57H4aAsnOZn3r3(bh) {
    try {
      this.page.curDate = undefined;
      this.page.cardArr = [];
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

  sd_Ikd3xfE2DVjhNeuP(bh) {
    try {
      sessionStorage.setItem('news', JSON.stringify(bh.input.news));
      bh = this.sd_RjdaAyCf5n19vwVQ(bh);
      //appendnew_next_sd_Ikd3xfE2DVjhNeuP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ikd3xfE2DVjhNeuP');
    }
  }

  async sd_RjdaAyCf5n19vwVQ(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/news');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_RjdaAyCf5n19vwVQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RjdaAyCf5n19vwVQ');
    }
  }

  sd_s80QsHaCA0t9cS0R(bh) {
    try {
      const getnewsInstance: getnews = this.__page_injector__.get(getnews);
      this.page.data = getnewsInstance['data'];
      bh = this.sd_DVRWDT0gZ2teof6o(bh);
      //appendnew_next_sd_s80QsHaCA0t9cS0R
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s80QsHaCA0t9cS0R');
    }
  }

  sd_DVRWDT0gZ2teof6o(bh) {
    try {
      const page = this.page;
      page.cardArr = page.data?.articles;
      this.sd_HNGtyg35L2JzrYib(bh);
      //appendnew_next_sd_DVRWDT0gZ2teof6o
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DVRWDT0gZ2teof6o');
    }
  }

  sd_HNGtyg35L2JzrYib(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.cardArr);
      //appendnew_next_sd_HNGtyg35L2JzrYib
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HNGtyg35L2JzrYib');
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
