import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticFileuploadComponent } from './diagnostic-fileupload.component';

describe('DiagnosticFileuploadComponent', () => {
  let component: DiagnosticFileuploadComponent;
  let fixture: ComponentFixture<DiagnosticFileuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticFileuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticFileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
