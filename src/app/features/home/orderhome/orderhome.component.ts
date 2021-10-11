import { Component, OnInit } from '@angular/core';
import {
  BucSvcAngularStaticAppInfoFacadeUtil,
  BucCommOmsRestAPIService
} from '@buc/svc-angular';
/*
  INFO:
    * BucSvcAngularStaticAppInfoFacadeUtil - static utility class with convenience methods.
    * Invoke any OMS API with: this.bucCommOmsRestAPIService.invokeOMSRESTApi().
    * Use for any custom service: this.bucCommOmsRestAPIService.invokeOMSCustomService();
*/
@Component({
  selector: 'app-orderhome',
  templateUrl: './orderhome.component.html',
  styleUrls: ['./orderhome.component.scss'],
})
export class ORDERHomeComponent implements OnInit {
  getOrdListJsonStr = '';

  constructor(public bucCommOmsRestAPIService: BucCommOmsRestAPIService) {
  }

  ngOnInit() {
    this.bucCommOmsRestAPIService.invokeOMSRESTApi('getOrderList', {}, null).subscribe((response) => {
      BucSvcAngularStaticAppInfoFacadeUtil.log('ORDERHomeComponent', 'ngOnInit', 'getOrderList response: ', response);
      this.getOrdListJsonStr = JSON.stringify(response, null, 4);
    },
    (error) => {
      this.getOrdListJsonStr = null;
      BucSvcAngularStaticAppInfoFacadeUtil.error('ORDERHomeComponent', 'ngOnInit', 'getOrderList error: ', error);
    });
  }

}
