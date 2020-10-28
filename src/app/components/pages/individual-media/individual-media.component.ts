import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Media } from 'src/app/shared/interfaces/media';
import { ApiService } from 'src/app/shared/services/api.service';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'app-individual-media',
  templateUrl: './individual-media.component.html',
  styleUrls: ['./individual-media.component.scss'],
})
export class IndividualMediaComponent implements OnInit {
  id: string;
  media: any;
  typeOfMedia: string;
  youtubeKey: string;
  configurationString: string;

  @ViewChild('loader', { static: true }) loader;

  constructor(
    protected route: ActivatedRoute,
    protected api: ApiService,
    protected stateService: StateService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.typeOfMedia = this.route.snapshot.paramMap.get('media');

    this.stateService.configurationString$.subscribe((value) => {
      this.configurationString = value;
    });

    this.getIndividualMedia();
  }

  onBackClicked(isClicked: boolean): void {
    if (isClicked) {
      window.history.back();
    }
  }

  async getIndividualMedia(): Promise<void> {
    try {
      this.loader.show();
      if (!this.configurationString) {
        await this.stateService.getConfiguration();
      }

      let response = await this.api.getIndividualMedia(
        this.typeOfMedia,
        this.id
      );
      this.media = {
        id: response.id,
        name: response.original_name || response.original_title,
        image: this.configurationString + response.backdrop_path,
        rating: response.vote_average,
        description: response.overview,
      } as Media;

      let videoResponse = await this.api.getVideosForMedia(
        this.typeOfMedia,
        this.id
      );
      if (videoResponse && videoResponse.results.length > 0) {
        this.youtubeKey = videoResponse.results.filter((videoElement) => {
          return videoElement.site === 'YouTube';
        })[0].key;
      }
      this.loader.hide();
    } catch (err) {
      this.loader.hide();
      console.log(err);
    }
  }
}
