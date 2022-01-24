import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticBidoutcomeComponent } from './diagnostic-bidoutcome.component';

describe('DiagnosticBidoutcomeComponent', () => {
  let component: DiagnosticBidoutcomeComponent;
  let fixture: ComponentFixture<DiagnosticBidoutcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticBidoutcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticBidoutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
