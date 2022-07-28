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
export class newsReadComponent implements AfterViewInit {
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
      bh = this.sd_k1p09TBbrBMg1yuP(bh);
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

  submit(comment: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { comment: comment };
      bh.local = {};
      bh = this.sd_Ue0Iiee3ARDP3HpB(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X6pj3RF2Q4MPo8QN');
    }
  }

  getComments(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_RWRraJISP9ddT9kH(bh);
      //appendnew_next_getComments
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sU8Bhd8bfjYKE3dt');
    }
  }

  socialMedia(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_4tJsT1fLrYMGTkS9(bh);
      //appendnew_next_socialMedia
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KvB6I3BWWrYqYcZA');
    }
  }

  clearForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      //appendnew_next_clearForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_U5VwOOdiHSOUUQ0U');
    }
  }

  //appendnew_flow_newsReadComponent_start

  sd_SFk3cjIOLpt0URts(bh) {
    try {
      this.page.news = undefined;
      this.page.isFav = false;
      this.page.currentUser = undefined;
      this.page.comments = [];
      this.page.submitted = false;
      this.page.icons = [];
      this.page.comment = '';
      bh = this.sd_y6JjhkC5FmXk4gcc(bh);
      bh = this.sd_a1iCqTHXqxFq1r8k(bh);
      //appendnew_next_sd_SFk3cjIOLpt0URts
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SFk3cjIOLpt0URts');
    }
  }

  sd_y6JjhkC5FmXk4gcc(bh) {
    try {
      let outputVariables = this.getComments();

      //appendnew_next_sd_y6JjhkC5FmXk4gcc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_y6JjhkC5FmXk4gcc');
    }
  }

  sd_a1iCqTHXqxFq1r8k(bh) {
    try {
      const page = this.page;
      page.icons = ['fa fa-whatsapp', 'fa fa-twitter', 'fa fa-facebook'];
      bh = this.sd_OgveSdf9dPYZm9qk(bh);
      //appendnew_next_sd_a1iCqTHXqxFq1r8k
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a1iCqTHXqxFq1r8k');
    }
  }

  sd_OgveSdf9dPYZm9qk(bh) {
    try {
      this.page.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      bh = this.n(bh);
      //appendnew_next_sd_OgveSdf9dPYZm9qk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OgveSdf9dPYZm9qk');
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
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_qkTnyjiEo9x275C8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qkTnyjiEo9x275C8');
    }
  }

  sd_AoVzAK8jwelPeRaW(bh) {
    try {
      localStorage.removeItem('news');
      sessionStorage.removeItem('news');
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

  async sd_k1p09TBbrBMg1yuP(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['nempty'](
          this.page.currentUser,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_o0Gf4YCNLsm32cGr(bh);
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
        bh = await this.sd_wCh9CsgaBSCPl3cF(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_k1p09TBbrBMg1yuP');
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
        bh = this.sd_MObf4UVfSyV9ydjm(bh);
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

  sd_MObf4UVfSyV9ydjm(bh) {
    try {
      const page = this.page;
      page.isFav = true;
      bh.favorite = {
        owner: page.currentUser.email,
        isFav: page.isFav,
        url: page.news.url,
      };

      console.log(page.isFav);
      bh = this.sd_tVrjaB4tnqKC4JeX(bh);
      //appendnew_next_sd_MObf4UVfSyV9ydjm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MObf4UVfSyV9ydjm');
    }
  }

  async sd_tVrjaB4tnqKC4JeX(bh) {
    try {
      const getnewsInstance: getnews = this.__page_injector__.get(getnews);

      let outputVariables = await getnewsInstance.addToFavorite(bh.favorite);
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
      bh = this.sd_sa9TC6LWGzZMdNZn(bh);
      //appendnew_next_sd_uzBsm6dCdJvC6JE4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uzBsm6dCdJvC6JE4');
    }
  }

  async sd_sa9TC6LWGzZMdNZn(bh) {
    try {
      const getnewsInstance: getnews = this.__page_injector__.get(getnews);

      let outputVariables = await getnewsInstance.addToFavorite(bh.favorite);
      bh.response = outputVariables.local.result;

      //appendnew_next_sd_sa9TC6LWGzZMdNZn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sa9TC6LWGzZMdNZn');
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
      console.log(page.news, 'news');
      //appendnew_next_sd_P7Nu1ak7wxH7OEsM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P7Nu1ak7wxH7OEsM');
    }
  }

  sd_wCh9CsgaBSCPl3cF(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Please login to add to favorite', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_wCh9CsgaBSCPl3cF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wCh9CsgaBSCPl3cF');
    }
  }

  sd_Ue0Iiee3ARDP3HpB(bh) {
    try {
      this.page.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      bh = this.sd_AiD0maikF6Bd84N7(bh);
      //appendnew_next_sd_Ue0Iiee3ARDP3HpB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ue0Iiee3ARDP3HpB');
    }
  }

  sd_AiD0maikF6Bd84N7(bh) {
    try {
      const page = this.page;
      (bh.input.owner = page.currentUser.fullname),
        (bh.input.url = page.news.url);
      bh.comment = bh.input;
      console.log('comment', bh.comment);
      bh = this.sd_Kzh2UoFB583pEVee(bh);
      //appendnew_next_sd_AiD0maikF6Bd84N7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AiD0maikF6Bd84N7');
    }
  }

  async sd_Kzh2UoFB583pEVee(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['null'](
          bh.input.comment.comment,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_cCWxp9G1bNO2a4XY(bh);
        otherwiseFlag = false;
      } else if (
        this.sdService.operators['empty'](
          bh.input.comment.comment,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_cCWxp9G1bNO2a4XY(bh);
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
        bh = await this.sd_OupxJ3UsKZPdIrq4(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Kzh2UoFB583pEVee');
    }
  }

  sd_cCWxp9G1bNO2a4XY(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Enter Comment', '', {
        duration: 1000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_cCWxp9G1bNO2a4XY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cCWxp9G1bNO2a4XY');
    }
  }

  async sd_OupxJ3UsKZPdIrq4(bh) {
    try {
      const getnewsInstance: getnews = this.__page_injector__.get(getnews);

      let outputVariables = await getnewsInstance.submitComment(bh.comment);
      bh.local.result = outputVariables.local.result;

      bh = this.sd_5hAEiy81cypYg572(bh);
      //appendnew_next_sd_OupxJ3UsKZPdIrq4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OupxJ3UsKZPdIrq4');
    }
  }

  sd_5hAEiy81cypYg572(bh) {
    try {
      let outputVariables = this.getComments();

      bh = this.sd_oZqyx4g4ppM3WxPP(bh);
      //appendnew_next_sd_5hAEiy81cypYg572
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5hAEiy81cypYg572');
    }
  }

  sd_oZqyx4g4ppM3WxPP(bh) {
    try {
      const page = this.page;
      console.log(bh.comment);
      page.comment = '';
      // page.comment.resetForm()
      //appendnew_next_sd_oZqyx4g4ppM3WxPP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oZqyx4g4ppM3WxPP');
    }
  }

  sd_RWRraJISP9ddT9kH(bh) {
    try {
      this.page.news = JSON.parse(sessionStorage.getItem('news'));
      bh = this.sd_Y5WPBRP53E7ESGtQ(bh);
      //appendnew_next_sd_RWRraJISP9ddT9kH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RWRraJISP9ddT9kH');
    }
  }

  async sd_Y5WPBRP53E7ESGtQ(bh) {
    try {
      const getnewsInstance: getnews = this.__page_injector__.get(getnews);

      let outputVariables = await getnewsInstance.getComments(
        this.page.news.url
      );
      this.page.comments = outputVariables.local.result;

      bh = this.sd_TV353sX3SqSBIBRA(bh);
      //appendnew_next_sd_Y5WPBRP53E7ESGtQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Y5WPBRP53E7ESGtQ');
    }
  }

  sd_TV353sX3SqSBIBRA(bh) {
    try {
      let outputVariables = this.socialMedia();

      bh = this.sd_10J4mtHdVPQSzhrL(bh);
      //appendnew_next_sd_TV353sX3SqSBIBRA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TV353sX3SqSBIBRA');
    }
  }

  sd_10J4mtHdVPQSzhrL(bh) {
    try {
      const page = this.page;
      console.log('comment0000', page.comments);
      //appendnew_next_sd_10J4mtHdVPQSzhrL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_10J4mtHdVPQSzhrL');
    }
  }

  sd_4tJsT1fLrYMGTkS9(bh) {
    try {
      const page = this.page;
      const whatsapp = document.querySelector('.fa-whatsapp');
      const twitter = document.querySelector('.fa-twitter');
      const facebook = document.querySelector('.fa-facebook');
      const pageUrl = page.news.url;
      const message = 'Hi! Please look at this story here';
      const whatsappApi = `https://wa.me/?text=${message}: ${pageUrl}`;
      const twitterApi = `https://twitter.com/intent/tweet?text=${message}: ${pageUrl}`;
      const facebookApi = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
      whatsapp?.addEventListener('click', () => {
        window.open(whatsappApi, '_blank');
      });
      twitter?.addEventListener('click', () => {
        window.open(twitterApi, '_blank');
      });
      facebook?.addEventListener('click', () => {
        window.open(facebookApi, '_blank');
      });

      //appendnew_next_sd_4tJsT1fLrYMGTkS9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4tJsT1fLrYMGTkS9');
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
