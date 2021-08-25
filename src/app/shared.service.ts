import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'
import {map,publishReplay, refCount} from 'rxjs/operators';


export interface Config {
  componentType: string, 
  show: Boolean
}
@Injectable({
  providedIn: 'root'
})
export class SharedService {

configs!: Observable<Config[]>;
  
PUBLIC_KEY='';
HASH='';
today: number = Date.now();

API_URL=`https:gateway.marvel.com/v1/public/characters?events=29&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&limit=50`;

  constructor(private http:HttpClient,
    ) { }
  getAllCharacters():Observable<Config[]>{

    if(!this.configs){
      this.configs= this.http.get<any[]>(this.API_URL).pipe(map((data: any)=>data.data.results)),
      publishReplay(1), // this tells Rx to cache the latest emitted
      refCount() // and this tells Rx to keep the Observable alive as long as there are any Subscribers

    }
    return this.configs;
  }
 // Clear configs
 clearCache() {
  this.configs = null as any;
}

}
