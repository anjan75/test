import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticFinaldecisionComponent } from './diagnostic-finaldecision.component';

describe('DiagnosticFinaldecisionComponent', () => {
  let component: DiagnosticFinaldecisionComponent;
  let fixture: ComponentFixture<DiagnosticFinaldecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticFinaldecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticFinaldecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
