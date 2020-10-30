import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { BarRatingModule } from 'ngx-bar-rating';
import { LoaderComponent, MockedApiService } from '../../mocks/mocks';
import { ApiService } from '../../services/api.service';
import { StateService } from '../../services/state.service';

import { DescriptionComponent } from './description.component';

describe('DescriptionComponent', () => {
  let component: DescriptionComponent;
  let fixture: ComponentFixture<DescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        HttpClientTestingModule,
        BarRatingModule,
      ],
      declarations: [DescriptionComponent, LoaderComponent],
      providers: [
        { provide: ApiService, useClass: MockedApiService },
        { provide: StateService, useClass: MockedApiService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionComponent);
    component = fixture.componentInstance;
    component.media = {
      id: '222',
      name: 'Some Media',
      image: '/zdvLmUrNLxFZu84FSeW8wbfi9TW.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu felis, viverra aliquet maximus vitae, eleifend nec sapien. ',
      rating: '8.9',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
