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
export class dynamicDataComponent implements DoCheck {
  @Input('data')
  public data: any = undefined;
  @ViewChild('nav')
  public nav: any = null;
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

  sendDatatNews(news: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { news: news };
      bh.local = {};
      bh = this.sd_HUAcT45XpTTaPeG7(bh);
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
      this.page.value = undefined;
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
      bh = this.sd_KH9hvwlT5OI7vB4U(bh);
      //appendnew_next_sd_JwIaOfUoojdvuJuc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JwIaOfUoojdvuJuc');
    }
  }

  sd_KH9hvwlT5OI7vB4U(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, { nav: this.nav });
      //appendnew_next_sd_KH9hvwlT5OI7vB4U
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KH9hvwlT5OI7vB4U');
    }
  }

  sd_HUAcT45XpTTaPeG7(bh) {
    try {
      const page = this.page; // page.cardArr = bh.changes.data.currentValue.articles;
      page.value = page?.cardArr[bh.input.news];
      bh = this.sd_Ikd3xfE2DVjhNeuP(bh);
      //appendnew_next_sd_HUAcT45XpTTaPeG7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HUAcT45XpTTaPeG7');
    }
  }

  sd_Ikd3xfE2DVjhNeuP(bh) {
    try {
      sessionStorage.setItem('news', JSON.stringify(this.page.value));
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
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
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

      if (page.cardArr?.length > 0) {
        page.cardArr.forEach((item) => {
          // console.log('data..............', item.urlToImage);
          item['image'] = item.urlToImage;
          item['thumbImage'] = item.urlToImage;
          // delete item.urlToImage;
        });
      }
      bh = this.sd_dhkQ7pCGKijuU8RI(bh);
      //appendnew_next_sd_DVRWDT0gZ2teof6o
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DVRWDT0gZ2teof6o');
    }
  }

  sd_dhkQ7pCGKijuU8RI(bh) {
    try {
      const page = this.page;
      page.fistCard = page?.cardArr[0];

      //appendnew_next_sd_dhkQ7pCGKijuU8RI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dhkQ7pCGKijuU8RI');
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
