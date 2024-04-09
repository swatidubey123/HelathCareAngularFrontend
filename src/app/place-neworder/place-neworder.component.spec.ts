import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceNeworderComponent } from './place-neworder.component';

describe('PlaceNeworderComponent', () => {
  let component: PlaceNeworderComponent;
  let fixture: ComponentFixture<PlaceNeworderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceNeworderComponent]
    });
    fixture = TestBed.createComponent(PlaceNeworderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
