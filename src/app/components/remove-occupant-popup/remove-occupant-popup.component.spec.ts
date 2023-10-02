import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveOccupantPopupComponent } from './remove-occupant-popup.component';

describe('RemoveOccupantPopupComponent', () => {
  let component: RemoveOccupantPopupComponent;
  let fixture: ComponentFixture<RemoveOccupantPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveOccupantPopupComponent]
    });
    fixture = TestBed.createComponent(RemoveOccupantPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
