import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachdashboardComponent } from './coachdashboard.component';

describe('CoachdashboardComponent', () => {
  let component: CoachdashboardComponent;
  let fixture: ComponentFixture<CoachdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
