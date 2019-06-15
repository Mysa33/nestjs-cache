import { Injectable, HttpModule, HttpService} from '@nestjs/common';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  
  private readonly _id:number;
  constructor(private _http: HttpService){}
  
  //Get all
  getByBrand(brand:String):Observable<any> {
    console.log("brand in service :", brand)
    return this._http.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=' + brand)
      .pipe(
        map(response => response.data)
      );
  } 
  
  //Get by porduct type
  getByProdcutType(product_type:String):Observable<any> {
    console.log("type in service :", product_type);

    return this._http.get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer')
      .pipe(
        map(response => response.data)
      );
  } 
}
