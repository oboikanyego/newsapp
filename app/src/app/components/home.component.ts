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
import { getnews } from 'app/sd-services/getnews'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent implements DoCheck {
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
      this.sd_EZ7XKtmJgMfQfV4I(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_EZ7XKtmJgMfQfV4I(bh) {
    try {
      bh = this.sd_tlThNUO1Bc3p26X8(bh);
      //appendnew_next_sd_EZ7XKtmJgMfQfV4I
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EZ7XKtmJgMfQfV4I');
    }
  }

  sendCategory(catergory = '', index: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { catergory: catergory, index: index };
      bh.local = {};
      bh = this.sd_VGnTvZK7hRUTfbsE(bh);
      //appendnew_next_sendCategory
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EBXWXYbK1Uc9wNvD');
    }
  }

  ngDoCheck() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      //appendnew_next_ngDoCheck
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A6kfTLkrq4s8xI0u');
    }
  }

  back(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_BuySscH0gnGueuxA(bh);
      //appendnew_next_back
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uwzsBe4DScwrstZE');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_tlThNUO1Bc3p26X8(bh) {
    try {
      this.page.curDate = new Date();
      this.page.cardArr = undefined;
      this.page.data = [];
      this.page.p = 1;
      this.page.navigation = undefined;
      this.page.isViewNews = undefined;
      this.page.sentData = undefined;
      this.page.imageObject = undefined;
      this.page.selectedIndex = 0;
      bh = this.sd_jP92Fh1TgA7O8gXX(bh);
      //appendnew_next_sd_tlThNUO1Bc3p26X8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tlThNUO1Bc3p26X8');
    }
  }

  sd_jP92Fh1TgA7O8gXX(bh) {
    try {
      this.page.paginate = this.__page_injector__.get(NgxPaginationModule);
      bh = this.sd_nSLC9GkujHSkJEuk(bh);
      //appendnew_next_sd_jP92Fh1TgA7O8gXX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jP92Fh1TgA7O8gXX');
    }
  }

  sd_nSLC9GkujHSkJEuk(bh) {
    try {
      const page = this.page;
      page.navigation = [
        {
          name: 'Home',
          category: 'all',
          icon: 'home',
        },
        {
          name: 'Business',
          category: 'business',
          icon: 'work_outline',
        },
        {
          name: 'Entertainment',
          category: 'entertainment',
          icon: 'sports_esports',
        },
        {
          name: 'General',
          category: 'general',
          icon: 'people',
        },
        {
          name: 'Health',
          category: 'health',
          icon: 'home',
        },
        {
          name: 'Science',
          category: 'science',
          icon: 'home',
        },
        {
          name: 'Sports',
          category: 'sports',
          icon: 'sports_gymnastics',
        },
        {
          name: 'Technology',
          category: 'technology',
          icon: 'devices',
        },
      ];

      bh = this.sd_usU7Pl16gtp4nctP(bh);
      //appendnew_next_sd_nSLC9GkujHSkJEuk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nSLC9GkujHSkJEuk');
    }
  }

  async sd_usU7Pl16gtp4nctP(bh) {
    try {
      const getnewsInstance: getnews = this.__page_injector__.get(getnews);

      let outputVariables = await getnewsInstance.getBycountry();
      this.page.data = outputVariables.local.result;

      bh = this.sd_nm1GYm6l6cGfGvzy(bh);
      //appendnew_next_sd_usU7Pl16gtp4nctP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_usU7Pl16gtp4nctP');
    }
  }

  sd_nm1GYm6l6cGfGvzy(bh) {
    try {
      const page = this.page;
      page.isViewNews = false;
      // console.log('hello',page.data)
      // page.imageObject= page.data.articles.filter( data => data.urlToImage);
      // console.log('hello2',page.imageObject)
      //appendnew_next_sd_nm1GYm6l6cGfGvzy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nm1GYm6l6cGfGvzy');
    }
  }

  sd_VGnTvZK7hRUTfbsE(bh) {
    try {
      const page = this.page;
      page.selectedIndex = bh.input.index;
      // console.log('index value',bh)
      bh = this.sd_CsPwwoVrTeWHy68I(bh);
      bh = this.sd_RSZFKAMWbBRbRwWr(bh);
      //appendnew_next_sd_VGnTvZK7hRUTfbsE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VGnTvZK7hRUTfbsE');
    }
  }

  async sd_CsPwwoVrTeWHy68I(bh) {
    try {
      const getnewsInstance: getnews = this.__page_injector__.get(getnews);

      let outputVariables = await getnewsInstance.getNewsCatergory(
        bh.input.catergory
      );
      this.page.data = outputVariables.local.result;

      //appendnew_next_sd_CsPwwoVrTeWHy68I
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CsPwwoVrTeWHy68I');
    }
  }

  sd_RSZFKAMWbBRbRwWr(bh) {
    try {
      let outputVariables = this.back();

      //appendnew_next_sd_RSZFKAMWbBRbRwWr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RSZFKAMWbBRbRwWr');
    }
  }

  sd_BuySscH0gnGueuxA(bh) {
    try {
      sessionStorage.clear();
      bh = this.sd_oY8OiPQ1Grez4JZ6(bh);
      //appendnew_next_sd_BuySscH0gnGueuxA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BuySscH0gnGueuxA');
    }
  }

  async sd_oY8OiPQ1Grez4JZ6(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/cards');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_oY8OiPQ1Grez4JZ6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oY8OiPQ1Grez4JZ6');
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
  //appendnew_flow_homeComponent_Catch
}
