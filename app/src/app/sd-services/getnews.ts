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

  //appendnew_flow_getnews_start

  async sd_upW4opq2b0X5k3Bf(bh) {
    try {
      bh.url =
        'https://newsapi.org/v2/everything?q=' +
        bh.input.catergory +
        '&apiKey=62ecd6cd5b5f402ea1a5170ab9a27c9e';
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
        '&apiKey=62ecd6cd5b5f402ea1a5170ab9a27c9e';

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
      this.sd_2OylmBQR4X80edFZ(bh);
      //appendnew_next_sd_mz3UM4doPl35qJyC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mz3UM4doPl35qJyC');
    }
  }

  async sd_2OylmBQR4X80edFZ(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.result);
      //appendnew_next_sd_2OylmBQR4X80edFZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2OylmBQR4X80edFZ');
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
