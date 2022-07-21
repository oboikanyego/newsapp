/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class getnews {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_getnews

  async getNewsCatergory(catergory = '', ...others) {
    try {
      var bh: any = {
        input: {
          catergory: catergory,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_upW4opq2b0X5k3Bf(bh);
      //appendnew_next_getNewsCatergory
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8wyjtmpJHzt1CcQL');
    }
  }

  async getBycountry(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_C1KAn0CsclpRCNtV(bh);
      //appendnew_next_getBycountry
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kKX5NEGkyoMOe1sl');
    }
  }

  //appendnew_flow_getnews_start

  async sd_upW4opq2b0X5k3Bf(bh) {
    try {
      bh.url =
        'https://newsapi.org/v2/everything?q=' +
        bh.input.catergory +
        '&apiKey=381e15c0040145c0aab17b7c5b0bd5bd';
      bh = await this.sd_QcoR8Z8fyceffDBp(bh);
      //appendnew_next_sd_upW4opq2b0X5k3Bf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_upW4opq2b0X5k3Bf');
    }
  }

  async sd_QcoR8Z8fyceffDBp(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      this.sd_2OylmBQR4X80edFZ(bh);
      //appendnew_next_sd_QcoR8Z8fyceffDBp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QcoR8Z8fyceffDBp');
    }
  }

  async sd_2OylmBQR4X80edFZ(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh);
      //appendnew_next_sd_2OylmBQR4X80edFZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2OylmBQR4X80edFZ');
    }
  }

  async sd_C1KAn0CsclpRCNtV(bh) {
    try {
      bh.input.country = 'us';
      bh.url =
        'https://newsapi.org/v2/top-headlines?country=' +
        bh.input.country +
        '&apiKey=381e15c0040145c0aab17b7c5b0bd5bd';

      bh = await this.sd_2ywxV9Cope4Iox2k(bh);
      //appendnew_next_sd_C1KAn0CsclpRCNtV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_C1KAn0CsclpRCNtV');
    }
  }

  async sd_2ywxV9Cope4Iox2k(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      this.sd_gSxqTGXFrzgkWV0y(bh);
      //appendnew_next_sd_2ywxV9Cope4Iox2k
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2ywxV9Cope4Iox2k');
    }
  }

  async sd_gSxqTGXFrzgkWV0y(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh);
      //appendnew_next_sd_gSxqTGXFrzgkWV0y
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gSxqTGXFrzgkWV0y');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
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
  //appendnew_flow_getnews_Catch
}
