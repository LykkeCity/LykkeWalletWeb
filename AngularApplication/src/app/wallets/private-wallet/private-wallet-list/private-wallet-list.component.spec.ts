import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateWalletListComponent } from './private-wallet-list.component';

describe('PrivateWalletListComponent', () => {
  let component: PrivateWalletListComponent;
  let fixture: ComponentFixture<PrivateWalletListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateWalletListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateWalletListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
