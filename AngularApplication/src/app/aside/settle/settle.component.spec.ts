import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettleComponent } from './settle.component';

describe('SettleComponent', () => {
  let component: SettleComponent;
  let fixture: ComponentFixture<SettleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
