import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeSpotComponent } from './exchange-spot.component';

describe('ExchangeSpotComponent', () => {
  let component: ExchangeSpotComponent;
  let fixture: ComponentFixture<ExchangeSpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeSpotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
