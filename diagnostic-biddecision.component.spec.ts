import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticBiddecisionComponent } from './diagnostic-biddecision.component';

describe('DiagnosticBiddecisionComponent', () => {
  let component: DiagnosticBiddecisionComponent;
  let fixture: ComponentFixture<DiagnosticBiddecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticBiddecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticBiddecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
