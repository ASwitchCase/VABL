import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOccupantPopupComponent } from './add-occupant-popup.component';

describe('AddOccupantPopupComponent', () => {
  let component: AddOccupantPopupComponent;
  let fixture: ComponentFixture<AddOccupantPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOccupantPopupComponent]
    });
    fixture = TestBed.createComponent(AddOccupantPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
