import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientschedulesComponent } from './clientschedules.component';

describe('ClientschedulesComponent', () => {
  let component: ClientschedulesComponent;
  let fixture: ComponentFixture<ClientschedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientschedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientschedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
