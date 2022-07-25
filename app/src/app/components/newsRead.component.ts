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
import { Router } from '@angular/router'; //_splitter_
import { getnews } from 'app/sd-services/getnews'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-newsRead',
  templateUrl: './newsRead.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class newsReadComponent implements DoCheck, AfterViewInit {
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

  back(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_AoVzAK8jwelPeRaW(bh);
      //appendnew_next_back
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z6Hk7dM8eANsq7S0');
    }
  }

  markAsFavorite(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_o0Gf4YCNLsm32cGr(bh);
      //appendnew_next_markAsFavorite
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ss2QwytTrmPekR1p');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_SzPztQwzmFtJMFSa(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lckObSg4iWhDQvTb');
    }
  }

  //appendnew_flow_newsReadComponent_start

  sd_SFk3cjIOLpt0URts(bh) {
    try {
      this.page.news = undefined;
      this.page.isFav = false;
      bh = this.n(bh);
      //appendnew_next_sd_SFk3cjIOLpt0URts
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SFk3cjIOLpt0URts');
    }
  }

  n(bh) {
    try {
      if (
        this.sdService.operators['empty'](
          this.page.news,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_qkTnyjiEo9x275C8(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cfxV1WXn9MdahG9y');
    }
  }

  async sd_qkTnyjiEo9x275C8(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_qkTnyjiEo9x275C8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qkTnyjiEo9x275C8');
    }
  }

  sd_U4dsFMJQUzQAW5tL(bh) {
    try {
      this.page.news = JSON.parse(sessionStorage.getItem('news'));
      bh = this.checkForData(bh);
      //appendnew_next_sd_U4dsFMJQUzQAW5tL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_U4dsFMJQUzQAW5tL');
    }
  }

  checkForData(bh) {
    try {
      if (
        this.sdService.operators['empty'](
          this.page.news,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_jcNxUm5PWOdtGFMG(bh);
      } else if (
        this.sdService.operators['nempty'](
          this.page.news,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Br4GT3JnyA703Oge(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nMhQDiCmp0ieXJmk');
    }
  }

  async sd_jcNxUm5PWOdtGFMG(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/cards');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_jcNxUm5PWOdtGFMG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jcNxUm5PWOdtGFMG');
    }
  }

  sd_Br4GT3JnyA703Oge(bh) {
    try {
      const page = this.page;
      page.content = page.news?.content.replace(/ \[[\s\S]*?\]/g, '');
      //appendnew_next_sd_Br4GT3JnyA703Oge
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Br4GT3JnyA703Oge');
    }
  }

  sd_AoVzAK8jwelPeRaW(bh) {
    try {
      localStorage.clear();
      sessionStorage.clear();
      bh = this.sd_WqkDFLzwdKagdBtn(bh);
      //appendnew_next_sd_AoVzAK8jwelPeRaW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AoVzAK8jwelPeRaW');
    }
  }

  async sd_WqkDFLzwdKagdBtn(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/cards');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_WqkDFLzwdKagdBtn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WqkDFLzwdKagdBtn');
    }
  }

  async sd_o0Gf4YCNLsm32cGr(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          this.page.isFav,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_tVrjaB4tnqKC4JeX(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Xq5WxQJC4xqntK3w(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_o0Gf4YCNLsm32cGr');
    }
  }

  async sd_tVrjaB4tnqKC4JeX(bh) {
    try {
      const getnewsInstance: getnews = this.__page_injector__.get(getnews);

      let outputVariables = await getnewsInstance.addToFavorites(
        this.page.news
      );
      bh.response = outputVariables.local.result;

      bh = this.sd_uzBsm6dCdJvC6JE4(bh);
      //appendnew_next_sd_tVrjaB4tnqKC4JeX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tVrjaB4tnqKC4JeX');
    }
  }

  sd_uzBsm6dCdJvC6JE4(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.response.message, 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_SzPztQwzmFtJMFSa(bh);
      //appendnew_next_sd_uzBsm6dCdJvC6JE4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uzBsm6dCdJvC6JE4');
    }
  }

  async sd_SzPztQwzmFtJMFSa(bh) {
    try {
      const getnewsInstance: getnews = this.__page_injector__.get(getnews);

      let outputVariables = await getnewsInstance.checkIfIsFavorite(
        this.page.news.url
      );
      bh.response = outputVariables.local.response;

      bh = this.sd_P7Nu1ak7wxH7OEsM(bh);
      //appendnew_next_sd_SzPztQwzmFtJMFSa
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SzPztQwzmFtJMFSa');
    }
  }

  sd_P7Nu1ak7wxH7OEsM(bh) {
    try {
      const page = this.page;
      page.isFav = bh.response.length > 0 ? true : false;
      //appendnew_next_sd_P7Nu1ak7wxH7OEsM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P7Nu1ak7wxH7OEsM');
    }
  }

  async sd_Xq5WxQJC4xqntK3w(bh) {
    try {
      const getnewsInstance: getnews = this.__page_injector__.get(getnews);

      let outputVariables = await getnewsInstance.removeFavorite(
        this.page.news
      );
      bh.response = outputVariables.local.result;

      bh = this.sd_uAiPaGPiED74wXSW(bh);
      //appendnew_next_sd_Xq5WxQJC4xqntK3w
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Xq5WxQJC4xqntK3w');
    }
  }

  sd_uAiPaGPiED74wXSW(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.response.message, 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_SzPztQwzmFtJMFSa(bh);
      //appendnew_next_sd_uAiPaGPiED74wXSW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uAiPaGPiED74wXSW');
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
