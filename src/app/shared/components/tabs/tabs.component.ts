import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../../services/state.service';
import { mediaTypes } from '../../interfaces/mediaTypes';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Output() mediaChange: EventEmitter<string> = new EventEmitter<string>();
  currentMedia: mediaTypes;

  mediaTypes = mediaTypes;

  constructor(
    protected route: ActivatedRoute,
    protected location: Location,
    protected stateService: StateService
  ) {}

  ngOnInit(): void {
    this.currentMedia = this.route.snapshot.paramMap.get('media') as mediaTypes;
    if (
      !this.currentMedia ||
      !Object.values(mediaTypes).includes(this.currentMedia)
    ) {
      return this.changeMediaHandler(mediaTypes.SHOWS);
    }

    this.changeMediaHandler(this.currentMedia);
  }

  changeMediaHandler(typeOfMedia: mediaTypes): void {
    this.currentMedia = typeOfMedia;
    this.location.replaceState(`/${this.currentMedia}`);
    this.mediaChange.emit(this.currentMedia);
  }
}
