import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Media } from '../../interfaces/media';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  @Input() media: Media[];
  @Input() typeOfMedia: string;

  constructor(protected router: Router) {}

  ngOnInit(): void {
  }

  goToIndividual(id: string): void {
    this.router.navigate([`../details/${this.typeOfMedia}/${id}`]);
  }
}
