import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdistanceComponent } from './getdistance.component';

describe('GetdistanceComponent', () => {
  let component: GetdistanceComponent;
  let fixture: ComponentFixture<GetdistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdistanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetdistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
