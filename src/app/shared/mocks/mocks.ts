import { Component, Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-loader',
  template: '',
})
export class LoaderComponent {
  show() {}
  hide() {}
}

@Injectable({
  providedIn: 'root',
})
export class MockedApiService {
  getIndividualMedia() {
    return {
      id: 222,
      original_name: 'Some Media',
      backdrop_path: '/zdvLmUrNLxFZu84FSeW8wbfi9TW.jpg',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu felis, viverra aliquet maximus vitae, eleifend nec sapien. ',
      vote_average: 8.9,
    };
  }

  getVideosForMedia() {
    return {
      id: 88040,
      results: [
        {
          id: '5c9e80e5c3a36873557fd09d',
          iso_639_1: 'en',
          iso_3166_1: 'US',
          key: 'cxjXEIDbBxA',
          name: 'TVアニメ「ギヴン」ティザーPV',
          site: 'YouTube',
          size: 1080,
          type: 'Teaser',
        },
      ],
    };
  }
}
@Injectable({
  providedIn: 'root',
})
export class MockedStateService {
  configurationString$ = new BehaviorSubject<string>('');
  state$ = new BehaviorSubject<string>('');

  
  constructor() {}
  getConfiguration() {
    return {
      images: {
        base_url: 'http://image.tmdb.org/t/p/',
        secure_base_url: 'https://image.tmdb.org/t/p/',
        backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
        logo_sizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
        poster_sizes: [
          'w92',
          'w154',
          'w185',
          'w342',
          'w500',
          'w780',
          'original',
        ],
        profile_sizes: ['w45', 'w185', 'h632', 'original'],
        still_sizes: ['w92', 'w185', 'w300', 'original'],
      },
    };
  }
}
