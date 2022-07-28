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
  ViewChild,
  ViewChildren,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { getnews } from 'app/sd-services/getnews'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Covid',
  templateUrl: './Covid.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class CovidComponent {
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
      this.sd_7ctxxmM57r2RLtk9(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_7ctxxmM57r2RLtk9(bh) {
    try {
      bh = this.sd_syMlmwpyOfA8qGrp(bh);
      //appendnew_next_sd_7ctxxmM57r2RLtk9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7ctxxmM57r2RLtk9');
    }
  }

  sd_PfRYH9fxEa17c31D(country: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { country: country };
      bh.local = {};
      bh = this.sd_TGYefqpzeC6DqMMA(bh);
      //appendnew_next_sd_PfRYH9fxEa17c31D
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PfRYH9fxEa17c31D');
    }
  }

  //appendnew_flow_CovidComponent_start

  sd_syMlmwpyOfA8qGrp(bh) {
    try {
      this.page.Covidcases = [];
      this.page.countries = [];
      this.page.selectedCountry = {};
      this.page.defaultCountry = 'South Africa';
      this.page.colors = [];
      this.page.chartData = [];
      this.page.counter = 0;
      this.page.label = [];
      this.page.values = [];
      bh = this.sd_eq6MirsCH1NqKF7i(bh);
      //appendnew_next_sd_syMlmwpyOfA8qGrp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_syMlmwpyOfA8qGrp');
    }
  }

  async sd_eq6MirsCH1NqKF7i(bh) {
    try {
      const getnewsInstance: getnews = this.__page_injector__.get(getnews);

      let outputVariables = await getnewsInstance.covidCasesForCountries();
      this.page.Covidcases = outputVariables.local.results;

      bh = this.sd_vPgqF6DEZvF6J1Wx(bh);
      //appendnew_next_sd_eq6MirsCH1NqKF7i
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eq6MirsCH1NqKF7i');
    }
  }

  sd_vPgqF6DEZvF6J1Wx(bh) {
    try {
      const page = this.page;
      page.Covidcases.forEach((obj) => page.countries.push(obj.country));
      page.countries.sort();
      bh = this.sd_fJQNmjNnM9Ccz6Vj(bh);
      //appendnew_next_sd_vPgqF6DEZvF6J1Wx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vPgqF6DEZvF6J1Wx');
    }
  }

  sd_fJQNmjNnM9Ccz6Vj(bh) {
    try {
      let outputVariables = this.sd_PfRYH9fxEa17c31D(this.page.defaultCountry);

      //appendnew_next_sd_fJQNmjNnM9Ccz6Vj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fJQNmjNnM9Ccz6Vj');
    }
  }

  sd_TGYefqpzeC6DqMMA(bh) {
    try {
      const page = this.page;
      console.log(bh.input);
      page.Covidcases.forEach((obj) => {
        if (bh.input.country === obj.country) {
          page.selectedCountry = obj;
        }
      });

      page.values = [
        page.selectedCountry.deaths,
        page.selectedCountry.active,
        page.selectedCountry.critical,
        page.selectedCountry.recovered,
        page.selectedCountry.tests,
      ];
      page.label = ['deaths', 'active', 'critical', 'recovered', 'tests'];
      let colors = [];
      while (colors.length < page.label.length) {
        do {
          var color = Math.floor(Math.random() * 1000000 + 1);
        } while (colors.indexOf(color) >= 0);
        colors.push('#' + ('000000' + color.toString(16)).slice(-6));
      }
      page.colors = [
        {
          backgroundColor: colors,
        },
      ];
      console.log(page.colors);
      //appendnew_next_sd_TGYefqpzeC6DqMMA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TGYefqpzeC6DqMMA');
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
  //appendnew_flow_CovidComponent_Catch
}
