import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationTheaterComponent } from './operation-theater.component';

describe('OperationTheaterComponent', () => {
  let component: OperationTheaterComponent;
  let fixture: ComponentFixture<OperationTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationTheaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
