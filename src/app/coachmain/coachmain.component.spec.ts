import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachmainComponent } from './coachmain.component';

describe('CoachmainComponent', () => {
  let component: CoachmainComponent;
  let fixture: ComponentFixture<CoachmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
