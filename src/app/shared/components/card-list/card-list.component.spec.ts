import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import {
  LoaderComponent,
  media,
  MockedApiService,
  MockedStateService,
  router,
} from '../../mocks/mocks';
import { ApiService } from '../../services/api.service';
import { StateService } from '../../services/state.service';

import { CardListComponent } from './card-list.component';
import { CardComponent } from './card/card.component';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;
  let api: MockedApiService;
  let stateService: MockedStateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      declarations: [CardListComponent, LoaderComponent, CardComponent],
      providers: [
        { provide: ApiService, useClass: MockedApiService },
        { provide: StateService, useClass: MockedStateService },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    api = new MockedApiService();
    stateService = new MockedStateService();
    component.media = media;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have media defined', async () => {
    const fixture = TestBed.createComponent(CardListComponent);
    fixture.detectChanges();
    await component.ngOnInit();
    fixture.detectChanges();
    expect(component.media).toBeTruthy();
  });

  it('should call router.navigate()', () => {
    const fixture = TestBed.createComponent(CardListComponent);
    fixture.detectChanges();
    component.goToIndividual('555');
    expect(router.navigate).toHaveBeenCalled();
  });
});
