import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Rings } from '../models/rings';
import { RingsGeometry } from '../models/rings-geometry';

@Injectable({
  providedIn: 'root',
})
export class WeddingServiceService {
  public pepe: number = 20;
  constructor(private http: HttpClient) {}

  url = 'https://api.2shapes.com/v1/wedding/compute';
  apikey = '12345';

  computeRingInBackend(rings: Rings): Observable<RingsGeometry> {
    const headers = new HttpHeaders().append('apikey', this.apikey);

    const info: { [id: string]: any } = {};
    info['rings'] = rings;

    console.log('sending rings: ', rings);
    const formData: FormData = new FormData();
    formData.append('data', JSON.stringify(info));

    return this.http.post(this.url, formData, { headers: headers }).pipe(
      map((res) => {
        return new RingsGeometry();
      })
    );
  }
}
