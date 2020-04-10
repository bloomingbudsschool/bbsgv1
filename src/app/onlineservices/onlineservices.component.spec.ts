import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineservicesComponent } from './onlineservices.component';

describe('OnlineservicesComponent', () => {
  let component: OnlineservicesComponent;
  let fixture: ComponentFixture<OnlineservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
