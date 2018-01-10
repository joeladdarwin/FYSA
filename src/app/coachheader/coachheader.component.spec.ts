import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachheaderComponent } from './coachheader.component';

describe('CoachheaderComponent', () => {
  let component: CoachheaderComponent;
  let fixture: ComponentFixture<CoachheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
