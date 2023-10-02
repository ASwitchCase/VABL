import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteListPopupComponent } from './delete-list-popup.component';

describe('DeleteListPopupComponent', () => {
  let component: DeleteListPopupComponent;
  let fixture: ComponentFixture<DeleteListPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteListPopupComponent]
    });
    fixture = TestBed.createComponent(DeleteListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
