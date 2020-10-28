import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  state$ = new BehaviorSubject<string>('');
  tab$ = new BehaviorSubject<string>('');
  configurationString$ = new BehaviorSubject<string>('');

  constructor(protected api: ApiService) {}

  async getConfiguration() {
    try {
      let configuration = await this.api.getConfiguration();
      let base_url = configuration.images.base_url;
      let size = configuration.images.logo_sizes[6];
      this.configurationString$.next(base_url + size);
    } catch (e) {
      console.log(e);
    }
  }
}
