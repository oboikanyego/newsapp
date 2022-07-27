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
  public data: any;

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

  async checkIfIsFavorite(key = '', ...others) {
    try {
      var bh: any = {
        input: {
          key: key,
        },
        local: {
          response: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_9Zvhv7IR4P5T05cz(bh);
      //appendnew_next_checkIfIsFavorite
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OtRoSB0FJhxF2c0f');
    }
  }

  async addToFavorites(body: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          body: body,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_7LuHrUFXRdXqnkhu(bh);
      //appendnew_next_addToFavorites
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
      return await this.errorHandler(bh, e, 'sd_lMR7V3mroF3p1EMe');
    }
  }

  async removeFavorite(body: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          body: body,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_xVFxA3p9E48P9AsR(bh);
      //appendnew_next_removeFavorite
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
      return await this.errorHandler(bh, e, 'sd_LjItp8YT5blPakdX');
    }
  }

  async getFavorites(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_9x6lHE5Hvt2aFkQu(bh);
      //appendnew_next_getFavorites
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
      return await this.errorHandler(bh, e, 'sd_p7FBkazHWNS0estH');
    }
  }

  async submitComment(comment: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          comment: comment,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_RIGjl3bz0rn4bA36(bh);
      //appendnew_next_submitComment
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
      return await this.errorHandler(bh, e, 'sd_HxCTqRD5BxEnoIBe');
    }
  }

  async dynamicApiCall(
    path = '',
    body: any = undefined,
    method = '',
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          path: path,
          body: body,
          method: method,
        },
        local: {
          results: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_9tLTiatYSfaRZ44y(bh);
      //appendnew_next_dynamicApiCall
      return (
        // formatting output variables
        {
          input: {},
          local: {
            results: bh.local.results,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dWmZK5UXmDn2bNhe');
    }
  }

  async covidCasesForCountries(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          results: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_boMwgiX9XcBuVScM(bh);
      //appendnew_next_covidCasesForCountries
      return (
        // formatting output variables
        {
          input: {},
          local: {
            results: bh.local.results,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Fx2lI3m9DrF1UFjm');
    }
  }

  async getComments(postUrl: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          postUrl: postUrl,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_TM7UKzkvHnWz08NV(bh);
      //appendnew_next_getComments
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
      return await this.errorHandler(bh, e, 'sd_R8U1xFDrMBXySq3J');
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
      bh = await this.sd_8ggeqGrjgmyPQFau(bh);
      //appendnew_next_sd_QcoR8Z8fyceffDBp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QcoR8Z8fyceffDBp');
    }
  }

  async sd_8ggeqGrjgmyPQFau(bh) {
    try {
      this.data = bh.local.result;
      //appendnew_next_sd_8ggeqGrjgmyPQFau
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8ggeqGrjgmyPQFau');
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
      bh = await this.sd_mz3UM4doPl35qJyC(bh);
      //appendnew_next_sd_2ywxV9Cope4Iox2k
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2ywxV9Cope4Iox2k');
    }
  }

  async sd_mz3UM4doPl35qJyC(bh) {
    try {
      this.data = bh.local.result;
      //appendnew_next_sd_mz3UM4doPl35qJyC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mz3UM4doPl35qJyC');
    }
  }

  async sd_9Zvhv7IR4P5T05cz(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = await this.sd_RFKbPJfzeho5htvt(bh);
      //appendnew_next_sd_9Zvhv7IR4P5T05cz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9Zvhv7IR4P5T05cz');
    }
  }

  async sd_RFKbPJfzeho5htvt(bh) {
    try {
      bh.input.url = bh.ssdUrl + 'checkIfIsFav';
      bh.input.body = { url: bh.input.key };
      bh = await this.sd_y1ubahAzTTSTmZum(bh);
      //appendnew_next_sd_RFKbPJfzeho5htvt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RFKbPJfzeho5htvt');
    }
  }

  async sd_y1ubahAzTTSTmZum(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_y1ubahAzTTSTmZum
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_y1ubahAzTTSTmZum');
    }
  }

  async sd_7LuHrUFXRdXqnkhu(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = await this.sd_QlENcMtGHrCmhfeL(bh);
      //appendnew_next_sd_7LuHrUFXRdXqnkhu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7LuHrUFXRdXqnkhu');
    }
  }

  async sd_QlENcMtGHrCmhfeL(bh) {
    try {
      bh.input.url = bh.ssdUrl + 'addFavorite';
      bh = await this.sd_WJb3ufWGcBTHOvYY(bh);
      //appendnew_next_sd_QlENcMtGHrCmhfeL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QlENcMtGHrCmhfeL');
    }
  }

  async sd_WJb3ufWGcBTHOvYY(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_WJb3ufWGcBTHOvYY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WJb3ufWGcBTHOvYY');
    }
  }

  async sd_xVFxA3p9E48P9AsR(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = await this.sd_SEfnjpKFJiT2WbaU(bh);
      //appendnew_next_sd_xVFxA3p9E48P9AsR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xVFxA3p9E48P9AsR');
    }
  }

  async sd_SEfnjpKFJiT2WbaU(bh) {
    try {
      bh.input.url = bh.ssdUrl + 'removeFavorite';
      bh = await this.sd_5RdvC4MrrhSlU0Ns(bh);
      //appendnew_next_sd_SEfnjpKFJiT2WbaU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SEfnjpKFJiT2WbaU');
    }
  }

  async sd_5RdvC4MrrhSlU0Ns(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: 'delete',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_5RdvC4MrrhSlU0Ns
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5RdvC4MrrhSlU0Ns');
    }
  }

  async sd_9x6lHE5Hvt2aFkQu(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = await this.sd_OQ2vi6h8jCdivFZe(bh);
      //appendnew_next_sd_9x6lHE5Hvt2aFkQu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9x6lHE5Hvt2aFkQu');
    }
  }

  async sd_OQ2vi6h8jCdivFZe(bh) {
    try {
      bh.input.url = bh.ssdUrl + 'getFavorites';
      bh = await this.sd_yjHbMEGjxred8VAW(bh);
      //appendnew_next_sd_OQ2vi6h8jCdivFZe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OQ2vi6h8jCdivFZe');
    }
  }

  async sd_yjHbMEGjxred8VAW(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_yjHbMEGjxred8VAW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yjHbMEGjxred8VAW');
    }
  }

  async sd_RIGjl3bz0rn4bA36(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = await this.sd_tDAcZ2BpwGRc03gr(bh);
      //appendnew_next_sd_RIGjl3bz0rn4bA36
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RIGjl3bz0rn4bA36');
    }
  }

  async sd_tDAcZ2BpwGRc03gr(bh) {
    try {
      bh.local.url = bh.ssdUrl + 'addComment';
      console.log(bh.input);
      bh.body = bh.input.comment;
      console.log(bh.input.comment);
      bh = await this.sd_07abefVay84PdLOL(bh);
      //appendnew_next_sd_tDAcZ2BpwGRc03gr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tDAcZ2BpwGRc03gr');
    }
  }

  async sd_07abefVay84PdLOL(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_07abefVay84PdLOL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_07abefVay84PdLOL');
    }
  }

  async sd_9tLTiatYSfaRZ44y(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = await this.createUrl(bh);
      //appendnew_next_sd_9tLTiatYSfaRZ44y
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9tLTiatYSfaRZ44y');
    }
  }

  async createUrl(bh) {
    try {
      bh.input.url = bh.ssdUrl + bh.input.path;
      console.log('bh', bh.input);
      bh = await this.sd_e8eJyD5M6f983BBz(bh);
      //appendnew_next_createUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iILo6zXHLRd0NPlw');
    }
  }

  async sd_e8eJyD5M6f983BBz(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: bh.input.method,
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.results = await this.sdService.nHttpRequest(requestOptions);
      this.sd_2OylmBQR4X80edFZ(bh);
      //appendnew_next_sd_e8eJyD5M6f983BBz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e8eJyD5M6f983BBz');
    }
  }

  async sd_2OylmBQR4X80edFZ(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.results);
      //appendnew_next_sd_2OylmBQR4X80edFZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2OylmBQR4X80edFZ');
    }
  }

  async sd_boMwgiX9XcBuVScM(bh) {
    try {
      bh.url =
        'https://disease.sh/v3/covid-19/countries?yesterday=false&sort=cases';
      bh = await this.sd_jHMqcSFeCfdDCWgu(bh);
      //appendnew_next_sd_boMwgiX9XcBuVScM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_boMwgiX9XcBuVScM');
    }
  }

  async sd_jHMqcSFeCfdDCWgu(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.results = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_jHMqcSFeCfdDCWgu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jHMqcSFeCfdDCWgu');
    }
  }

  async sd_TM7UKzkvHnWz08NV(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = await this.sd_z00kNRjFeiISiEVw(bh);
      //appendnew_next_sd_TM7UKzkvHnWz08NV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TM7UKzkvHnWz08NV');
    }
  }

  async sd_z00kNRjFeiISiEVw(bh) {
    try {
      bh.local.url = bh.ssdUrl + 'getComments?url=' + bh.input.postUrl;
      bh = await this.sd_N49b852L9K9YSU3W(bh);
      //appendnew_next_sd_z00kNRjFeiISiEVw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z00kNRjFeiISiEVw');
    }
  }

  async sd_N49b852L9K9YSU3W(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      this.sd_BTAAVyGEu7EbQhiB(bh);
      //appendnew_next_sd_N49b852L9K9YSU3W
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_N49b852L9K9YSU3W');
    }
  }

  async sd_BTAAVyGEu7EbQhiB(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.result);
      //appendnew_next_sd_BTAAVyGEu7EbQhiB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BTAAVyGEu7EbQhiB');
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
