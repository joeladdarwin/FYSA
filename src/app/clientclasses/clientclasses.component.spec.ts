import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientclassesComponent } from './clientclasses.component';

describe('ClientclassesComponent', () => {
  let component: ClientclassesComponent;
  let fixture: ComponentFixture<ClientclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
