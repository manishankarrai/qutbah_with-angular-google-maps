import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserqutbahComponent } from './userqutbah.component';

describe('UserqutbahComponent', () => {
  let component: UserqutbahComponent;
  let fixture: ComponentFixture<UserqutbahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserqutbahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserqutbahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
