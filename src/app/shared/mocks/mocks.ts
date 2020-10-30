import { Component, Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Media } from '../interfaces/media';

export const router = {
  navigate: jasmine.createSpy('navigate'),
};

@Component({
  selector: 'app-loader',
  template: '',
})
export class LoaderComponent {
  show() {}
  hide() {}
}

export const media: Media[] = [
  {
    id: '222',
    name: 'Some Media',
    image: '/zdvLmUrNLxFZu84FSeW8wbfi9TW.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu felis, viverra aliquet maximus vitae, eleifend nec sapien. ',
  },
  {
    id: '222',
    name: 'Some Media',
    image: '/zdvLmUrNLxFZu84FSeW8wbfi9TW.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu felis, viverra aliquet maximus vitae, eleifend nec sapien. ',
  },
];

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

  getTopRatedMedia(mediaType: string) {
    return {
      page: 1,
      total_results: 7921,
      total_pages: 397,
      results: [
        {
          popularity: 109.564,
          vote_count: 6533,
          video: false,
          poster_path: '/q719jXXEzOoYaps6babgKnONONX.jpg',
          id: 372058,
          adult: false,
          backdrop_path: '/mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg',
          original_language: 'ja',
          original_title: '君の名は。',
          genre_ids: [16, 18, 10749],
          title: 'Your Name.',
          vote_average: 8.6,
          overview:
            'High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.',
          release_date: '2016-08-26',
        },
        {
          popularity: 33.466,
          vote_count: 7806,
          video: false,
          poster_path: '/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg',
          id: 240,
          adult: false,
          backdrop_path: '/poec6RqOKY9iSiIUmfyfPfiLtvB.jpg',
          original_language: 'en',
          original_title: 'The Godfather: Part II',
          genre_ids: [80, 18],
          title: 'The Godfather: Part II',
          vote_average: 8.6,
          overview:
            'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
          release_date: '1974-12-20',
        },
        {
          popularity: 354.607,
          vote_count: 452,
          video: false,
          poster_path: '/zGVbrulkupqpbwgiNedkJPyQum4.jpg',
          id: 592350,
          adult: false,
          backdrop_path: '/9guoVF7zayiiUq5ulKQpt375VIy.jpg',
          original_language: 'ja',
          original_title:
            '僕のヒーローアカデミア THE MOVIE ヒーローズ：ライジング',
          genre_ids: [28, 16],
          title: 'My Hero Academia: Heroes Rising',
          vote_average: 8.6,
          overview:
            "Class 1-A visits Nabu Island where they finally get to do some real hero work. The place is so peaceful that it's more like a vacation … until they're attacked by a villain with an unfathomable Quirk! His power is eerily familiar, and it looks like Shigaraki had a hand in the plan. But with All Might retired and citizens' lives on the line, there's no time for questions. Deku and his friends are the next generation of heroes, and they're the island's only hope.",
          release_date: '2019-12-20',
        },
        {
          popularity: 43.744,
          vote_count: 10304,
          video: false,
          poster_path: '/2TeJfUZMGolfDdW6DKhfIWqvq8y.jpg',
          id: 129,
          adult: false,
          backdrop_path: '/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg',
          original_language: 'ja',
          original_title: '千と千尋の神隠し',
          genre_ids: [16, 14, 10751],
          title: 'Spirited Away',
          vote_average: 8.5,
          overview:
            'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
          release_date: '2001-07-20',
        },
        {
          popularity: 93.471,
          vote_count: 9550,
          video: false,
          poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
          id: 496243,
          adult: false,
          backdrop_path: '/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg',
          original_language: 'ko',
          original_title: '기생충',
          genre_ids: [35, 18, 53],
          title: 'Parasite',
          vote_average: 8.5,
          overview:
            "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
          release_date: '2019-05-30',
        },
        {
          popularity: 6.855,
          vote_count: 277,
          video: false,
          poster_path: '/zGGWYpiKNwjpKxelPxOMqJnUgDs.jpg',
          id: 42269,
          adult: false,
          backdrop_path: '/bh6yfB6I1N1WuMiX6K5HxGVZnja.jpg',
          original_language: 'it',
          original_title: "C'eravamo tanto amati",
          genre_ids: [35, 18],
          title: 'We All Loved Each Other So Much',
          vote_average: 8.5,
          overview:
            'Gianni, Nicola and Antonio become close friends in 1944 while fighting the Nazis. After the end of the war, full of illusions, they settle down. The movie is a the story of the life of these three idealists and how they deal with the inevitable disillusionments of life.',
          release_date: '1974-12-21',
        },
        {
          popularity: 38.235,
          vote_count: 11123,
          video: false,
          poster_path: '/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
          id: 497,
          adult: false,
          backdrop_path: '/5Nz25DPXfQaSpDgce42Y3kFg9G4.jpg',
          original_language: 'en',
          original_title: 'The Green Mile',
          genre_ids: [80, 18, 14],
          title: 'The Green Mile',
          vote_average: 8.5,
          overview:
            "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
          release_date: '1999-12-10',
        },
        {
          popularity: 48.65,
          vote_count: 19770,
          video: false,
          poster_path: '/plnlrtBUULT0rh3Xsjmpubiso3L.jpg',
          id: 680,
          adult: false,
          backdrop_path: '/w7RDIgQM6bLT7JXtH4iUQd3Iwxm.jpg',
          original_language: 'en',
          original_title: 'Pulp Fiction',
          genre_ids: [80, 53],
          title: 'Pulp Fiction',
          vote_average: 8.5,
          overview:
            "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
          release_date: '1994-09-10',
        },
        {
          popularity: 26.282,
          id: 637,
          video: false,
          vote_count: 9399,
          vote_average: 8.5,
          title: 'Life Is Beautiful',
          release_date: '1997-12-20',
          original_language: 'it',
          original_title: 'La vita è bella',
          genre_ids: [35, 18],
          backdrop_path: '/6aNKD81RHR1DqUUa8kOZ1TBY1Lp.jpg',
          adult: false,
          overview:
            'A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.',
          poster_path: '/74hLDKjD5aGYOotO6esUVaeISa2.jpg',
        },
        {
          popularity: 44.831,
          id: 122,
          video: false,
          vote_count: 16430,
          vote_average: 8.5,
          title: 'The Lord of the Rings: The Return of the King',
          release_date: '2003-12-01',
          original_language: 'en',
          original_title: 'The Lord of the Rings: The Return of the King',
          genre_ids: [12, 14, 28],
          backdrop_path: '/9DeGfFIqjph5CBFVQrD6wv9S7rR.jpg',
          adult: false,
          overview:
            "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
          poster_path: '/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
        },
        {
          popularity: 47.066,
          id: 155,
          video: false,
          vote_count: 23542,
          vote_average: 8.5,
          title: 'The Dark Knight',
          release_date: '2008-07-16',
          original_language: 'en',
          original_title: 'The Dark Knight',
          genre_ids: [18, 28, 80, 53],
          backdrop_path: '/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg',
          adult: false,
          overview:
            'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
          poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        },
        {
          popularity: 33.384,
          id: 13,
          video: false,
          vote_count: 19097,
          vote_average: 8.5,
          title: 'Forrest Gump',
          release_date: '1994-07-06',
          original_language: 'en',
          original_title: 'Forrest Gump',
          genre_ids: [35, 18, 10749],
          backdrop_path: '/7c9UVPPiTPltouxRVY6N9uugaVA.jpg',
          adult: false,
          overview:
            'A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.',
          poster_path: '/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg',
        },
        {
          popularity: 21.962,
          vote_count: 5049,
          video: false,
          poster_path: '/ppd84D2i9W8jXmsyInGyihiSyqz.jpg',
          id: 389,
          adult: false,
          backdrop_path: '/qqHQsStV6exghCM7zbObuYBiYxw.jpg',
          original_language: 'en',
          original_title: '12 Angry Men',
          genre_ids: [18],
          title: '12 Angry Men',
          vote_average: 8.5,
          overview:
            "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
          release_date: '1957-04-10',
        },
      ],
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
    this.configurationString$.next('http://image.tmdb.org/t/p/original');
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
