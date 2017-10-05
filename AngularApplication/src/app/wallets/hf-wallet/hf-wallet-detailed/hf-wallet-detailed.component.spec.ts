import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HfWalletDetailedComponent } from './hf-wallet-detailed.component';

describe('HfWalletDetailedComponent', () => {
  let component: HfWalletDetailedComponent;
  let fixture: ComponentFixture<HfWalletDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HfWalletDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HfWalletDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
