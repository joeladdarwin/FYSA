import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientpaymentsComponent } from './clientpayments.component';

describe('ClientpaymentsComponent', () => {
  let component: ClientpaymentsComponent;
  let fixture: ComponentFixture<ClientpaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientpaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
