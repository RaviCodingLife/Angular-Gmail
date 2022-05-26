import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinameetingComponent } from './joinameeting.component';

describe('JoinameetingComponent', () => {
  let component: JoinameetingComponent;
  let fixture: ComponentFixture<JoinameetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinameetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinameetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
