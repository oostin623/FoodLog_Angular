import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFoodDialogComponent } from './edit-food-dialog.component';

describe('EditFoodDialogComponent', () => {
  let component: EditFoodDialogComponent;
  let fixture: ComponentFixture<EditFoodDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFoodDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFoodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
