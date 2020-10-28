import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiKey: string = 'c619fa1dc85c4dee6564eb6c404a4202';
  constructor(protected httpClient: HttpClient) {}

  sendRequest(method: string, url: string, body?: any): Observable<any> {
    body = body || {};
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headers),
    };

    let request: Observable<any>;

    if (method === 'GET') {
      request = this.httpClient.get(url, requestOptions);
    }

    return request;
  }

  getUrlType(media: string) {
    return media === 'shows' ? 'tv' : 'movie';
  }

  getConfiguration(): Promise<any> {
    let url = `https://api.themoviedb.org/3/configuration?api_key=${this.apiKey}`;
    return this.sendRequest('GET', url).toPromise();
  }

  getTopRatedMedia(media: string): Promise<any> {
    let type = this.getUrlType(media);
    let url = `https://api.themoviedb.org/3/${type}/top_rated?api_key=${this.apiKey}&language=en-US&page=1`;
    return this.sendRequest('GET', url).toPromise();
  }

  getIndividualMedia(media: string, id: string): Promise<any> {
    let type = this.getUrlType(media);
    let url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${this.apiKey}&language=en-US`;
    return this.sendRequest('GET', url).toPromise();
  }

  getVideosForMedia(media: string, id: string): Promise<any> {
    let type = this.getUrlType(media);
    let url = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${this.apiKey}&language=en-US`;
    return this.sendRequest('GET', url).toPromise();
  }

  searchMedia(media: string, query: string): Promise<any> {
    let type = this.getUrlType(media);
    let url = `https://api.themoviedb.org/3/search/${type}?api_key=${this.apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
    return this.sendRequest('GET', url).toPromise();
  }
}
