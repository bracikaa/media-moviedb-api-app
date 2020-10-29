import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import {
  MockedApiService,
  MockedStateService,
} from 'src/app/shared/mocks/mocks';
import { ApiService } from 'src/app/shared/services/api.service';
import { StateService } from 'src/app/shared/services/state.service';

import { MediaListPageComponent } from './media-list-page.component';

 describe('MediaListPageComponent', () => {
  let component: MediaListPageComponent;
  let fixture: ComponentFixture<MediaListPageComponent>;
  let api: MockedApiService;
  let stateService: MockedStateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      declarations: [MediaListPageComponent, LoaderComponent],
      providers: [
        { provide: ApiService, useClass: MockedApiService },
        { provide: StateService, useClass: MockedStateService },
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(MediaListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await component.ngOnInit();
    api = new MockedApiService();
    stateService = new MockedStateService();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the media variable', async () => {
    const fixture = TestBed.createComponent(MediaListPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    await component.onMediaChange('');
    fixture.detectChanges();
    expect(component.media).toBeTruthy();
  });

  it('should have the length of media variable = 10', async () => {
    const fixture = TestBed.createComponent(MediaListPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    await component.onMediaChange('shows');
    fixture.detectChanges();
    expect(component.media.length).toBe(10);
  });
});
