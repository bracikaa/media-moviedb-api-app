import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualMediaComponent } from './individual-media.component';

describe('IndividualMediaComponent', () => {
  let component: IndividualMediaComponent;
  let fixture: ComponentFixture<IndividualMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualMediaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
