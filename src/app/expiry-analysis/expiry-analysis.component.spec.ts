import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiryAnalysisComponent } from './expiry-analysis.component';

describe('ExpiryAnalysisComponent', () => {
  let component: ExpiryAnalysisComponent;
  let fixture: ComponentFixture<ExpiryAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiryAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiryAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
