import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLykkeComponent } from './my-lykke.component';

describe('MyLykkeComponent', () => {
  let component: MyLykkeComponent;
  let fixture: ComponentFixture<MyLykkeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLykkeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLykkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
