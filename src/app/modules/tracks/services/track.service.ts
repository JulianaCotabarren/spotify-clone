import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api;

  constructor(
    private httpClient: HttpClient
  ) {
    
  }

  getAllTracks$():Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map((dataRaw: any) => {
        return dataRaw.data
      })
    )
  }

  getAllRandom$():Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map((dataRaw: any) => {
        return dataRaw.data.reverse()
      }), 
      catchError((err)=> {
        console.log('Algo salió mal', err);        
        return of([])
      })
    )
  }
}
