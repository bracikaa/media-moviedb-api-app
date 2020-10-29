import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.name = "Gabriel's Inferno Part II";
    component.image =
      'http://image.tmdb.org/t/p/original/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have name defined', async () => {
    const fixture = TestBed.createComponent(CardComponent);
    fixture.detectChanges();
    expect(component.name).toBeTruthy();
    expect(component.name).toBe("Gabriel's Inferno Part II");
  });
  it('should have media defined', async () => {
    const fixture = TestBed.createComponent(CardComponent);
    fixture.detectChanges();
    await component.ngOnInit();
    expect(component.image).toBeTruthy();
    expect(component.image).toBe(
      'http://image.tmdb.org/t/p/original/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg'
    );
  });
});
