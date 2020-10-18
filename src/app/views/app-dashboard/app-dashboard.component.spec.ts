import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDashboardComponent } from './app-dashboard.component';

describe('AppDashboardComponent', () => {
  let component: AppDashboardComponent;
  let fixture: ComponentFixture<AppDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
