import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientforgetpasswordComponent } from './clientforgetpassword.component';

describe('ClientforgetpasswordComponent', () => {
  let component: ClientforgetpasswordComponent;
  let fixture: ComponentFixture<ClientforgetpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientforgetpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientforgetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
