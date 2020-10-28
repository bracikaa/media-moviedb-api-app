import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { config } from 'process';
import { Media } from 'src/app/shared/interfaces/media';
import { ApiService } from 'src/app/shared/services/api.service';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'app-media-list-page',
  templateUrl: './media-list-page.component.html',
  styleUrls: ['./media-list-page.component.scss'],
})
export class MediaListPageComponent implements OnInit {
  media: Media[];

  typeOfMedia: string;
  searchParam: string;
  configurationString: string;

  @ViewChild('loader', { static: true }) loader;

  constructor(
    protected api: ApiService,
    protected router: Router,
    protected stateService: StateService
  ) {}

  async ngOnInit(): Promise<void> {
    this.configurationString =
      this.stateService.configurationString$.getValue() || '';

    this.searchParam = this.stateService.state$.getValue() || '';

    this.stateService.configurationString$.subscribe((value) => {
      this.configurationString = value;
    });
  }

  async onMediaChange(media: string): Promise<void> {
    this.typeOfMedia = media;
    if (!this.searchParam || this.searchParam.length <= 2) {
      this.typeOfMedia = media;

      try {
        this.loader.show();   
        if (!this.configurationString) {
          await this.stateService.getConfiguration();
        }

        let response = await this.api.getTopRatedMedia(media);

        this.mapMedia(response);

        this.loader.hide();
      } catch (err) {
        this.loader.hide();
        console.log(err);
      }
    } else {
      this.onSearchChange(this.searchParam);
    }
  }

  async onSearchChange(searchParam: string): Promise<void> {
    this.searchParam = searchParam;
    if (searchParam.length > 2) {
      try {
        this.loader.show();

        let response = await this.api.searchMedia(
          this.typeOfMedia,
          searchParam
        );

        this.mapMedia(response);

        this.loader.hide();
      } catch (err) {
        this.loader.hide();
        console.log(err);
      }
    } else {
      this.onMediaChange(this.typeOfMedia);
    }
  }

  mapMedia(response: any): Media[] {
    return (this.media = response.results
      .filter((element) => {
        return element.backdrop_path !== null;
      })
      .slice(0, 10)
      .map((element) => {
        return {
          id: element.id,
          name: element.original_name || element.original_title,
          image: this.configurationString + element.backdrop_path,
        };
      }) as Media[]);
  }
}
