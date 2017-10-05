import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLykkeInfoComponent } from './my-lykke-equity.component';

describe('MyLykkeInfoComponent', () => {
  let component: MyLykkeInfoComponent;
  let fixture: ComponentFixture<MyLykkeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLykkeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLykkeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
