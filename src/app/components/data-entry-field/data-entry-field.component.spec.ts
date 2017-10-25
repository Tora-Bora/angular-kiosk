import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryFieldComponent } from './data-entry-field.component';

describe('DataEntryFieldComponent', () => {
  let component: DataEntryFieldComponent;
  let fixture: ComponentFixture<DataEntryFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataEntryFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntryFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
