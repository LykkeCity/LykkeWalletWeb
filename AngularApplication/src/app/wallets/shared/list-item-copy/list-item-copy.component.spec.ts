import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemCopyComponent } from './list-item-copy.component';

describe('ListItemCopyComponent', () => {
  let component: ListItemCopyComponent;
  let fixture: ComponentFixture<ListItemCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
