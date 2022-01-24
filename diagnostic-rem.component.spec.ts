import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticRemComponent } from './diagnostic-rem.component';

describe('DiagnosticRemComponent', () => {
  let component: DiagnosticRemComponent;
  let fixture: ComponentFixture<DiagnosticRemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticRemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticRemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
