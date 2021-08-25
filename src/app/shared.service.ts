import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SharedService {
PUBLIC_KEY='20e7d5df4963766c1e97bf7b3795b85c';
HASH='eeb524518616b326afab41cd508568ffce291f8a';
today: number = Date.now();

API_URL=`https:gateway.marvel.com/v1/public/characters?events=29&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&limit=50`;










  constructor(private http:HttpClient,
    ) { }
  getAllCharacters():Observable<any[]>{
    return this.http.get<any[]>(this.API_URL).pipe(map((data: any)=>data.data.results));
  }


}
