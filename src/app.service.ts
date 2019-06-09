import { Injectable, HttpModule, HttpService} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  
  private readonly _id:number;
  constructor(private _http: HttpService){}
  
  //Get all
  getItems():Observable<object> {
    return this._http.get('http://quotesondesign.com/wp-json/posts/2463');
  }
  
  //Get by limit
  getByLimit(limit:Number):Observable<object> {
    return this._http.get('http://quotesondesign.com/wp-json/posts/2463?results=' + limit);
  }

  //Get by gender
  getByGender(gender:Number):Observable<object> {
    return this._http.get('http://quotesondesign.com/wp-json/posts/2463?gender=' + gender);
  }
   
}
