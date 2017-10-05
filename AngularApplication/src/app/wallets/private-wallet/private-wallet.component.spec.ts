import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateWalletComponent } from './private-wallet.component';

describe('PrivateWalletComponent', () => {
  let component: PrivateWalletComponent;
  let fixture: ComponentFixture<PrivateWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
