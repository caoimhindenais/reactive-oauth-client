import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Toss} from "../model/toss";

@Injectable({
  providedIn: 'root'
})

export class TossService {


  constructor(private http: HttpClient) { }

  public toss(): Observable<HttpResponse<Toss>>{
    console.log("Calling springboot");

    return this.http.get<Toss>('http://localhost:8080/toss', { observe: 'response' } );
  }
}
