import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarentryComponent } from './navbarentry.component';

describe('NavbarentryComponent', () => {
  let component: NavbarentryComponent;
  let fixture: ComponentFixture<NavbarentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
