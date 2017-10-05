import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LykkeGroupListComponent } from './lykke-projects-list.component';

describe('LykkeGroupListComponent', () => {
  let component: LykkeGroupListComponent;
  let fixture: ComponentFixture<LykkeGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LykkeGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LykkeGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
