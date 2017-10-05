import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLykkeNewsComponent } from './my-lykke-news.component';

describe('MyLykkeNewsComponent', () => {
  let component: MyLykkeNewsComponent;
  let fixture: ComponentFixture<MyLykkeNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLykkeNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLykkeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
