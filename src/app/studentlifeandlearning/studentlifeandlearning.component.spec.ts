import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentlifeandlearningComponent } from './studentlifeandlearning.component';

describe('StudentlifeandlearningComponent', () => {
  let component: StudentlifeandlearningComponent;
  let fixture: ComponentFixture<StudentlifeandlearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentlifeandlearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentlifeandlearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
